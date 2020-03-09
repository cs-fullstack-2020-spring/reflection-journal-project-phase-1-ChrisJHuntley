 
let confidence = document.querySelector("#confidence");
// console.log(confidence);
let entry = document.querySelector("#entry");
// console.log(entry);
let date = document.querySelector("#date");
// console.log(date);
let submit = document.querySelector("#submit");
// console.log(submit);
let entryBlock = document.querySelector("#entryBlock")
 
// define and empty array to keep journal entries
let entryArray = [];

// create a callback function for on click event
let formSubmission = (event) => {
    event.preventDefault(); // keep form from reloading
    // console.log("callback works"); // check that call back is being called

    // define and object using object literal notation with form input values as property values
    let newEntry = {
        confidence : confidence.value,
        entry : entry.value,
        date : date.value
    }
    // console.log(newEntry) // check that object is being created
    entryArray.push(newEntry); // push object to array defined on line 16
    displayEntries(entryArray); // call function to display entries and pass array
}

// arrow function to display entries from array
let displayEntries = (entryArray) => {
    // console.log("array function called"); // check that function is being called
    let entryBlockString = ""; // define an empty string to build string to display
    entryArray.forEach(entry => {
        entryBlockString = `${entryBlockString} ${entry.entry} \n ${entry.confidence} \n ${entry.date}\n`
        // console.log(entryBlockString);
        // iterate through array and for each element in the array append the new element to the string defined on line 37
    });
    entryBlock.innerText = `${entryBlockString}`; // display built string as innerText in empty div
}

// call callback function when form submit button is clicked
submit.addEventListener("click", formSubmission);