let val = document.getElementById("counter-value");
let dec = document.getElementById("dec");
let reset = document.getElementById("reset");
let inc = document.getElementById("inc");

let counterVal = Number(val.textContent);
dec.addEventListener("click", function() {
    counterVal = counterVal - 1;
    val.textContent = counterVal;
    updateStyles();
});
reset.addEventListener("click", function() {
    counterVal = 0;
    val.textContent = counterVal;
    updateStyles();
});
inc.addEventListener("click", function() {
    counterVal = counterVal + 1;
    val.textContent = counterVal;
    updateStyles();
});

function updateStyles() {
    val.classList.remove("inc-style", "dec-style", "reset-style");
    if (counterVal > 0) {
        val.classList.add("inc-style");
    } else if (counterVal < 0) {
        val.classList.add("dec-style");
    } else if (counterVal === 0) {
        val.classList.add("reset-style");
    }
}