// Coordinates
const lO = 800;

// Utilities
let stop = false;
let step = 1;

function setup() {
    createCanvas(800, 800);
    background('white');

    fill('red')
    strokeWeight(0);
    rect(0, 0, lO, lO)

    frameRate(1);
}

function draw() {
    if (stop) {
        return;
    }

    for (let y = 0 ; y < math.pow(3, (step - 1)) ; y++) {
        for (let x = 0 ; x < math.pow(3, (step - 1)) ; x++) {
            const tierLength = lO / math.pow(3, step);

            const sMx1 = tierLength * (x * 3 + 1);
            const sMy1 = tierLength * (y * 3 + 1);

            fill('white')
            strokeWeight(0);
            rect(sMx1, sMy1, tierLength, tierLength)
        }
    }
    step++;
    if (step > 6) {
        console.log('Animation finished');
        stop = true;
    }
}

window.addEventListener('click', e => {
    if (!stop) {
        return
    }
    console.log('Reset');

    fill('red')
    strokeWeight(0);
    rect(0, 0, lO, lO)

    step = 1;
    stop = false;
})