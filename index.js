// // document.getElementById("count-el").innerText = 5

// 1. Grab the save-el paragrah and store it in a variable called saveEl

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let totalEl = document.getElementById("total-el")
let musicOn = false

// intialize the count as 0
let count = 0
let total = 0
totalEl.textContent = "Total Entered: " + total

// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

function increment() {
    count++
    countEl.innerText = count
    if (musicOn == false) {
        document.getElementById('sound1').play();
    }
    musicOn = true
}

function decrease() {
    if (count != 0) {
        count--
        countEl.textContent = count 
    }
    if (musicOn == false) {
        document.getElementById('sound1').play();
    }
    musicOn = true
}

// 1. Create a function, save(), which logs out the count when it's called

function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let add = count + " - "
    total += count

    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
    saveEl.textContent += add
    totalEl.textContent = "Total Entered: " + total
    count = 0
    countEl.textContent = 0
    if (musicOn == false) {
        document.getElementById('sound1').play();
    }
    musicOn = true
}

function clearAll() {
    count = 0
    total = 0
    countEl.textContent = 0
    saveEl.textContent = "Previous entries: "
    totalEl.textContent = "Total Entered: " + 0
    if (musicOn == false) {
        document.getElementById('sound1').play();
    }
    musicOn = true

}

