
//fetch lifters to DOM
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("form").addEventListener("submit", addLifter)
    document.getElementById("weightClass-dropdown").addEventListener('change', filterWeighClass)
    Array.from(document.querySelectorAll("th#squatHead, th#benchHead, th#deadliftHead, th#totalHead, th#weightClassHead")).forEach(element => element.addEventListener("click", sortStats))
    fetch("http://localhost:3000/lifters")
        .then((response) => response.json())
        .then((data) => {
            //const table = document.querySelector("tbody")
            for (let lifter of data) {
                addLifterStats(lifter)
            }
        }) 
    }
)

//function to collect new lifter stats
function addLifter(e) {
    e.preventDefault()
    fetch("http://localhost:3000/lifters",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            "firstName": e.target[0]["value"],
            "lastName": e.target[1]["value"],
            "squat": e.target[2]["value"],
            "bench": e.target[3]["value"],
            "deadlift": e.target[4]["value"],
            "total": e.target[5]["value"],
            "weightClass": e.target[6]["value"]
        })
    })
        .then((response) => response.json())
        .then((data) => {addLifterStats(data)})
}

//function to add lifter stats to table
function addLifterStats(data) {
    const table = document.querySelector("tbody")
    const weightClassDropdown = document.getElementById("weightClass-dropdown")
    const weightClassOption = document.createElement("option")
    let row = table.insertRow()
    let idCell = row.insertCell(0)
    let firstNameCell = row.insertCell(1)
    let lastNameCell = row.insertCell(2)
    let squatCell = row.insertCell(3)
    let benchCell = row.insertCell(4)
    let deadliftCell = row.insertCell(5)
    let totalCell = row.insertCell(6)
    let weightClassCell = row.insertCell(7)
    idCell.innerText = data["id"]
    firstNameCell.innerText = data["firstName"]
    lastNameCell.innerText = data["lastName"]
    squatCell.innerText = data["squat"]
    benchCell.innerText = data["bench"]
    deadliftCell.innerText = data["deadlift"]
    totalCell.innerText = data["total"]
    weightClassCell.innerText = data["weightClass"]

    options = document.getElementsByTagName("option")
    for (let i = 0; i < options.length; i++) {
        if (options[i] !== data["weightClass"]){
            weightClassOption.innerText = data["weightClass"]
        }
    }
    weightClassDropdown.appendChild(weightClassOption)
}

//function to filter by weight class
function filterWeighClass(e) {
    tableRows = document.getElementById("table").rows
    for (let i = 1; i < tableRows.length; i++){
        if (e.target.value !== tableRows[i].cells[7].innerText) {
            tableRows[i].style.display = "none"
        }
    }
}

//function to sort by stats
function sortStats(e) {
    const table = document.getElementById("table")
    let switching = true
    while (switching) {
        switching = false
        const rows = table.rows
        for(let i = 1; i < (rows.length-1); i++) {
            if (Number(rows[i].getElementsByTagName("td")[e.target.cellIndex].innerText) < Number(rows[i+1].getElementsByTagName("td")[e.target.cellIndex].innerText)) {
                rows[i].parentNode.insertBefore(rows[i+1],rows[i])
            }
        
        }
    }
}
