/*
PSUEDO CODE
initialize the count as 0
listen for clicks on the increment button
increment the count variable when the button i clicked
change the count-el in html which will reflect the new count

*/
// function increment() {
//     count += 1
//     let coutEL = document.getElementById("count-el").innerHTML = count
   
// }
let coutEL = document.getElementById("count-el")
let count = 0
function increment() {
    count += 1
    coutEL.innerHTML = count  
}
let saveEl = document.getElementById("save-el")
function Save() {
    let save = `${count} - `
    saveEl.innerHTML += save
    coutEL.innerHTML = 0
    count = 0
}
let name = 'Tosin'
let greeting = 'welcome: '
let wecomeEl = document.getElementById("welcome-el").innerHTML = `${name} ${greeting}`

