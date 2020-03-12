 
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
 }
    // console.log(newEntry)  
    // push object to array
    journalArray.push(newEntry);
    // call your function  
    showEntries(journalArray);   
}

// show entries to array
let showEntries = (journalArray) => {
  
    // define variable to add to later
    let entryBlockString = "";  
    journalArray.forEach(entry => {
        entryBlockString = `
        ${entryBlockString} 
        ${entry.entry}
         ${entry.confidence} 
         ${entry.date}\n`
        // console.log(entryBlockString)
    
    });
// display entries in browser
    entryBlock.innerText = `${entryBlockString}`; 
}

// call the function for clicked button
submit.addEventListener("click", formSubmission);