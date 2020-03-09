<<<<<<< HEAD
 
let confidence = document.querySelector("#confidence");
// console.log(confidence)
let entry = document.querySelector("#entry");
// console.log(entry)
let date = document.querySelector("#date");
// console.log(date);
let submit = document.querySelector("#submit");
// console.log(submit)
let entryBlock = document.querySelector("#entryBlock")
 
// define  array  
let entryArray = [];

// create a function for event
let formSubmission = (event) => {
=======
// pulling my elements and testing
let entry = document.querySelector('.entry')
console.log(entry)
let date = document.querySelector('.date')
console.log(date)
let confidence = document.querySelector('.confidence')
console.log(confidence)
let save = document.querySelector('#save')
console.log(save)

// !! looks like you should be calling this function in your event handler
submitForm = (event) => {
>>>>>>> 519cd7e10b84e04cff51b7c9597ca714f42c1eb5
    event.preventDefault(); 
    // keep form from reloading
    

    //  make object literal notation  
 let newEntry = {
        confidence : confidence.value,
        entry : entry.value,
        date : date.value
    }
    // console.log(newEntry)  
    // push object to array
    entryArray.push(newEntry);
    // call your function  
    displayEntries(entryArray);   
}

<<<<<<< HEAD
// show entries to array
let displayEntries = (entryArray) => {
  
    // define variable to add to later
    let entryBlockString = "";  
    entryArray.forEach(entry => {
        entryBlockString = `${entryBlockString} ${entry.entry} \n ${entry.confidence} \n ${entry.date}\n`
        // console.log(entryBlockString)
=======
//!! this should happen inside of your callback function
let input = {
    creation_date: date.value,
    journal_entry: entry.value,
    confidence_level: confidence.value
}
 // !! why is this array populated with random data not submitted by the user?? (don't just copy the examples from the README)
// Created array to store object literal notation
const journalArray = [
    {
        creationDate: `${input.creation_date}`,
        entry: `${input.journal_entry}`,
        level: `${input.confidence_level}`
    }
>>>>>>> 519cd7e10b84e04cff51b7c9597ca714f42c1eb5
    
    });
// display entries in browser
    entryBlock.innerText = `${entryBlockString}`; 
}

// call the function for clicked button
submit.addEventListener("click", formSubmission);