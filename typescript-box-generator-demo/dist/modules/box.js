// define a set of named box sizes using TS's enum
// All enum by default are public and we cant change this
export var BoxSizes;
(function (BoxSizes) {
    BoxSizes[BoxSizes["Small"] = 40] = "Small";
    BoxSizes[BoxSizes["Medium"] = 80] = "Medium";
    BoxSizes[BoxSizes["Large"] = 120] = "Large";
    BoxSizes["BOMB"] = "BOMB";
})(BoxSizes || (BoxSizes = {}));
export function createBox(boxInfo) {
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
    function getRandomColor() {
        let red = Math.floor(Math.random() * 256);
        let greem = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        return `rgb(${red} , ${greem} , ${blue})`;
    }
    function setColor(color) {
        element.style.backgroundColor = color;
    }
    return {
        id,
        element,
        setColor,
    };
}
