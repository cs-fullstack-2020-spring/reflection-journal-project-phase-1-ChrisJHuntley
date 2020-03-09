 
let confidence = document.querySelector("#confidence");
// console.log(confidence)
let entry = document.querySelector("#entry");
// console.log(entry)
let date = document.querySelector("#date");
// console.log(date)
let submit = document.querySelector("#submit");
// console.log(submit)
let entryBlock = document.querySelector("#entryBlock");;
 
// define  array  
let journalArray = []

// create a function for event
let formSubmission = (event) => {
    event.preventDefault(); 
    // keep form from reloading
    

    //  make object literal notation  
 let newEntry = {
    date : date.value,
        confidence : confidence.value,
        entry : entry.value,
        date : date.value
    }
    // console.log(newEntry)  
    // push object to array
    journalArray.push(newEntry);
    // call your function  
    displayEntries(journalArray);   
}

// show entries to array
let displayEntries = (journalArray) => {
  
    // define variable to add to later
    let entryBlockString = "";  
    journalArray.forEach(entry => {
        entryBlockString = `
        ${entryBlockString} 
        ${entry.entry}
         ${entry.confidence} 
         ${entry.date}`
        // console.log(entryBlockString)
    
    });
// display entries in browser
    entryBlock.innerText = `${entryBlockString}`; 
}

// call the function for clicked button
submit.addEventListener("click", formSubmission);