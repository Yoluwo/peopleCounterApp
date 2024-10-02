
/*Initialize count as 0
* listen for clicks on the increment button
* Change the count-el in the html to reflect the new count
*/

let count = 0
let countEl = document.getElementById("count-el")

/*Increment the count variable when the button is clicked*/

function increment() {
    count += 1
    // set countEl's innerText to the count
    countEl.textContent = count
}

/*Save function that logs out the count
* Grab the save-el paragraph and store it in a variable called saveEl
* Create a variable that contains both the count and the separator
* Render the variable in the saveEl using innerText.
* NB: Make sure not to delete the existing content of the paragraph
*/

let saveEl = document.getElementById("save-el")

function save() {
    let countSeparator = count + " - ";
    saveEl.textContent += countSeparator
    countEl.textContent = 0
    count = 0
}

/* Reset data */

function reset() {
    location.reload();
}
