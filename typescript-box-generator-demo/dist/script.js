import { BoxSizes, createBox } from "./modules/box.js";
const inputField = document.getElementById("amount");
const button = document.getElementById("generate");
const output = document.getElementById("output");
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
let boxes = [];
function buildBoxes() {
    // input value
    let boxAmount = Number(inputField.value);
    if (!boxAmount || boxAmount < 0) {
        alert("Please enter a positive number!");
        return;
    }
    let i = 0;
    boxGenerator();
    function boxGenerator() {
        setTimeout(() => {
            const boxSizesArray = Object.values(BoxSizes).filter((value) => typeof value === "number" || value === BoxSizes.BOMB);
            const boxSizesArrayLength = boxSizesArray.length;
            // randon size
            let randomNum = Math.floor(Math.random() * boxSizesArrayLength);
            let oneBoxSize = boxSizesArray[randomNum];
            // check if the oneBoxSize is a bomb
            if (oneBoxSize === BoxSizes.BOMB) {
                boxes.forEach((box) => {
                    box.setColor("red");
                    box.element.addEventListener("click", () => {
                        box.setColor("blue");
                        console.log("The box id is public: ", +box.id);
                    });
                });
                // style and display a dynamic message
                inputField.disabled = true;
                inputField.className = "lost";
                button.disabled = true;
                output.innerHTML = `You lost. You managed to produce ${boxes.length} box(s) before blowing up`;
                return;
            }
            // create a box
            let box = createBox({
                id: i,
                size: oneBoxSize,
            });
            i++;
            // push the box in the global array
            boxes.push(box);
            if (i < boxAmount) {
                boxGenerator();
            }
        }, 200);
    }
}
