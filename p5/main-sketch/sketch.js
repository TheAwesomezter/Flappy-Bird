let bird;
let pipes = [];

let score = 0;

function setup() {
    createCanvas(800, 600);

    bird = new Bird();
    pipes.push(new Pipe());
}

function draw() {
    background(0);

    for (let i = pipes.length - 1; i > 0; i--) {
        pipes[i].show();
        pipes[i].update();

        if (pipes[i].hits(bird)) {
            // console.log("Oofe!");
            document.getElementById('hit-or-miss').innerHTML = "Hit!";
        } else {
            document.getElementById('hit-or-miss').innerHTML = "Miss";
        }

        if (!pipes[i].hits(bird)) {
            console.log(score);
            if (frameCount % 75 == 0) {
                score = score + 1;
            }
            document.getElementById('score').innerHTML = score;
        }

        if (pipes[i].offScreen()) {
            pipes.splice(i, 1);
        }
    }

    bird.update();
    bird.show();

    if (frameCount % 75 == 0) {
        pipes.push(new Pipe());
    }
}

function keyPressed() {
    if (key == ' ') {
        bird.up();
        // console.log("Hello!");
    }
}
