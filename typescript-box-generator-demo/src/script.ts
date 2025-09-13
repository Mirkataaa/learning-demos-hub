const inputField = document.getElementById("amount") as HTMLInputElement;
const button = document.getElementById("generate") as HTMLButtonElement;
const output = document.getElementById("otput") as HTMLOutputElement;

// add event types for event listeners

button.addEventListener("click", (e: MouseEvent) => {
  console.log(e.button);
  buildBoxes();
});

inputField.addEventListener("keydown", (e: KeyboardEvent) => {
  if (e.key === "Enter") {
    buildBoxes();
  }
});

function buildBoxes() {}
