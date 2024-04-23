
let button = document.getElementById('btn-cross');
let div = document.getElementById('advert');

button.onclick = function() {
    if (div.style.display !== "none")
        div.style.display = "none";
};