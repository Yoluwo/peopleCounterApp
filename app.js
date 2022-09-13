
/*Initialize count as 0
* listen for clicks on the increment button
* Change the count-el in the html to reflect the new count
*/


let countEl = document.getElementById("count-el")
let count = 0;

function increment() {
    count += 1
    countEl.textContent = count;
}

//Create a funtion save() which logs out the count when it's called

//Grab the save-el paragraph and store in a variable called saveEl
let saveEl = document.getElementById("save-el")
console.log(count, countEl, saveEl)

function save() {
    let countStr =" " + count + " , "
    saveEl.innerText += countStr
}