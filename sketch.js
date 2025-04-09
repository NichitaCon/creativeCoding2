let airfields = [];
let myKey = "";

function setup() {
    createCanvas(500, 500);

    angleMode(DEGREES);
    airfields.push(
        new Airfield({
            numPlanes: 10,
            aWidth: 200,
            aHeight: 200,
            posX: 100,
            posY: 200,
        })
    );
}

function keyPressed() {
    console.log(key);
    myKey = key;
    console.log(airfields[0].planes.length);
}

function draw() {
    background(221, 161, 94);
    airfields.forEach((airfields) => {
        airfields.renderAirfield();
        airfields.renderPlanes();
        airfields.movePlanes();
        airfields.checkDist();
        airfields.checkPos();
    });

    text(myKey, 100, 100);
    if (keyIsDown(LEFT_ARROW) === true) {
        airfields[0].planes[0].turnLeft();
    }
     if (keyIsDown(RIGHT_ARROW) === true) {
        airfields[0].planes[0].turnRight();
    }
    if (keyIsDown(UP_ARROW) === true) {
        airfields[0].planes[0].increaseSpeed();
    }
    if (keyIsDown(DOWN_ARROW) === true) {
        airfields[0].planes[0].decreaseSpeed();
    }
}
