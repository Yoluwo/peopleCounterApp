
/*Initialize count as 0
* listen for clicks on the increment button
* Change the count-el in the html to reflect the new count
*/

let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment() {
    count += 1
    countEl.textContent = count;
}

let reset = function() {
    count = 0;
    document.getElementById
}

/*Create a funtion save() which logs out the count when it's called
and resets the number of people entered when save button is clicked
*/
function save() {
    let countStr =" "+ count + " , "
    saveEl.innerText += countStr
    countEl.textContent = 0;
    count = 0;
    console.log(saveEl, countEl)
}