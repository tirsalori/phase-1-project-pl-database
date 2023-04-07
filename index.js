//add lifters to DOM
document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/lifters")
        .then((response) => response.json())
        .then((data) => {
            const table = document.querySelector("tbody")
            for (let lifter of data) {
                let row = table.insertRow()
                for (key in lifter) {
                    let cell = row.insertCell()
                    let text = document.createTextNode(lifter[key])
                    cell.appendChild(text)
                }
            }
        }
        )
})