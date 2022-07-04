// Set #current day to moment.js
// Set past, present, future colors to time
// Save user inputs to local storage
// 

var currentTime = document.getElementById('currentDay');
var saveButton9 = document.querySelector('.saveBtn9');
var textArea = document.querySelector('.description');
var textInput9 = document.getElementById('text9');

currentTime.innerText = moment().format("dddd, MMMM Do YYYY");

//Function to apply color to text area based on current time 
// function getTime () {

// }

// checkTime every 5 minutes
// setInterval(getTime(), (1000 * 60) * 5);
// console.log(getTime);

function saveEvent () {
    this.event.target.parentElement.querySelector('input').value;
    console.log(this.event.target.parentElement.querySelector('input').value);
    localStorage.removeItem('textInput9');
    localStorage.setItem('textInput9', textInput9.value);
    console.log(localStorage);
}

textInput9.innerText = localStorage.getItem('textInput9');


