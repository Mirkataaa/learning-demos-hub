import { BoxSizes, createBox } from "./modules/box.js";

const inputField = document.getElementById("amount") as HTMLInputElement;
const button = document.getElementById("generate") as HTMLButtonElement;
const output = document.getElementById("output") as HTMLOutputElement;

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

let boxes: ReturnType<typeof createBox<number>>[] = [];

function buildBoxes(): void {
  // input value
  let boxAmount: number = Number(inputField.value);

  if (!boxAmount || boxAmount < 0) {
    alert("Please enter a positive number!");
    return;
  }

  let i = 0;
  boxGenerator();

  function boxGenerator(): void {
    setTimeout(() => {
      const boxSizesArray: BoxSizes[] = Object.values(BoxSizes).filter(
        (value) => typeof value === "number" || value === BoxSizes.BOMB
      );

      const boxSizesArrayLength: number = boxSizesArray.length;
      // randon size
      let randomNum: number = Math.floor(Math.random() * boxSizesArrayLength);
      let oneBoxSize: BoxSizes = boxSizesArray[randomNum];

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

      let box = createBox<number>({
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
