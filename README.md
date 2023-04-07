# Powerlifting Database
A powerlifting database listing the best squat, bench, deadlift, and total for a lifter as well as their weight class.

## Features
Users can:
- Filter lifters by weight class by clicking on the drop down and selecting a weight class
    - Weight classes are added to the drop down from the initial fetch request when the DOM is loaded and when a lifter is added to the database
    - Initial fetch request pulls data from db.json file on local server
- Sort by highest squat, bench, deadlift, total, or weight class
    - By clicking on the header for each of the aforementioned orders, the table rows will be sorted in descending order 
- Add a lifter to the database
    - Users can use the form to add a lifter to the database
    - The first and last name fields are required
    - If the user does not enter a number for the other fields, the default value will be 0 


## Acknowledgements
The inspiration for this project was based on the existing database openpowerlifting.com.

## Project Status
This project is for the Flatiron School and is not meant to be continued or maintained.