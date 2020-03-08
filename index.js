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
    event.preventDefault(); 
    let userInput = {
        creation_date: date.nodeValue,
        journal_entry: entry,
        confidence_level: confidence
    }
    console.log(` creation_date:: ${date}
     journal_entry: ${entry}
     confidence_level:  : ${confidence}`)
}
// created object literal notation

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
    

]
console.log(journalArray)
//  set an event listener to
// date.addEventListener('click', thedate)
function thedate(enter){
    date.innerHTML= date

}
// entry.addEventListener('click', test)
function test(enter){
    entry.innerHTML= entry
}

 
save.addEventListener('click', evt)
function evt(event) {
        console.log(journalArray)
        
    }
//     else {
        
//     }
// }
// function completed(){
// let check=confrim('Would you like to retry ')
//     if (check==true) {
//     }
// }
// console.log(completed());
// //     function howmany(doit){
// for(i=0;i<journalArray.length; i++){
//   let doit= input.push(journalArray)
// }
//     }