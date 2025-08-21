const boxes = document.querySelectorAll('.box');

let current = 1;

let interval = setInterval(() => {
    boxes.forEach((box) => {
        if(current > boxes.length) current = 1;
        if(box.classList[1].split('-')[1] * 1 === current) {
            box.classList.add('active');
        } else {
            box.classList.remove('active')
        }
    })

    current++
} , 1000)