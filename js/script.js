let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');
let count = 0;

function increament() {
    count += 1;
    countEl.innerHTML = count;
}

function save() {
    let preText = count + " - ";
    saveEl.innerHTML += preText;
    console.log(count);
    count = 0;
    countEl.innerHTML = 0;
}

function reset() {
    count = 0;
    countEl.innerHTML = 0;
}