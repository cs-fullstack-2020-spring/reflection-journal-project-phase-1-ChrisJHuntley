 
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

// show entries to array
let displayEntries = (entryArray) => {
  
    // define variable to add to later
    let entryBlockString = "";  
    entryArray.forEach(entry => {
        entryBlockString = `${entryBlockString} ${entry.entry} \n ${entry.confidence} \n ${entry.date}\n`
        // console.log(entryBlockString)
    
    });
// display entries in browser
    entryBlock.innerText = `${entryBlockString}`; 
}

// call the function for clicked button
submit.addEventListener("click", formSubmission);