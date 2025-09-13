const inputField = document.getElementById("amount");
const button = document.getElementById("generate");
const output = document.getElementById("otput");
// add event types for event listeners
button.addEventListener("click", (e) => {
    console.log(e.button);
    buildBoxes();
});
inputField.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        buildBoxes();
    }
});
function buildBoxes() { }
