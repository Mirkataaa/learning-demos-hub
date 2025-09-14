// define a set of named box sizes using TS's enum
// All enum by default are public and we cant change this
export enum BoxSizes {
  Small = 40,
  Medium = 80,
  Large = 120,
  BOMB = "BOMB",
}

interface BoxStructure<T> {
  id: number;
  size: T;
}

interface PublicBoxProperties {
  id: number;
  element: HTMLDivElement;
  setColor: (color: string) => void;
}

export function createBox<T extends string | number>(boxInfo: BoxStructure<T>): PublicBoxProperties {
  const id = boxInfo.id;
  const size = boxInfo.size;
  // create box element
  let element = document.createElement("div");
  element.classList.add("box");
  element.style.width = `${size}px`;
  element.style.height = `${size}px`;
  element.style.backgroundColor = getRandomColor();
  element.setAttribute("id", `box-${id}`);
  element.style.display = "inline-block";
  document.querySelector(".wrapper")?.appendChild(element);

  function getRandomColor(): string {
    let red: number = Math.floor(Math.random() * 256);
    let greem: number = Math.floor(Math.random() * 256);
    let blue: number = Math.floor(Math.random() * 256);

    return `rgb(${red} , ${greem} , ${blue})`;
  }

  function setColor(color: string): void {
    element.style.backgroundColor = color;
  }

  return {
    id,
    element,
    setColor,
  };
}
