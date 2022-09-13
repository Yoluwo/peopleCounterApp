
/*Initialize count as 0
* listen for clicks on the increment button
* Change the count-el in the html to reflect the new count
*/
let countEl = document.getElementById("count-el")
console.log(countEl)

let count = 0;

function increment() {
    count = count + 1
    countEl.innerText = count
}
