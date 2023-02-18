const canvas = document.getElementById('canvas');
const btn = document.getElementById('button');

let changed = false
btn.addEventListener('click', event => {
    if (!changed) {
        canvas.style.background = "blue";
        changed = true;
    } else {
        canvas.style.background = "#FF0000";
        changed = false;
    }
})