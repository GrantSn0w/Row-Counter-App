document.getElementById("count-el").innerText
let countEl= document.getElementById("count-el")
console.log(countEl)
let saveEl = document.getElementById("save-el")
console.log(saveEl)
let count = 0
function increment() {
    count += 1
    countEl. textContent= count
}
function save() {
    let saveHistory = count + " - "
    saveEl.textContent += saveHistory
    count = 0
    countEl. textContent= 0
}
