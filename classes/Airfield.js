class Airfield {
    constructor(obj) {
        this.numCrafts = obj.numCrafts ?? 50;
        this.aWidth = obj.aWidth ?? 400;
        this.aHeight = obj.aHeight ?? 400;
        this.posX = obj.posX ?? 250;
        this.posY = obj.posY ?? 250;
        this.crafts = [];
        this.generateCrafts();
    }

    renderAirfield() {
        push();
        translate(this.posX, this.posY);
        fill(119, 222, 255);
        rect(0, 0, this.aWidth, this.aHeight);
        pop();
    }

    renderCrafts() {
        push();
        translate(this.posX, this.posY);
        this.crafts.forEach((craft, id) => {
            craft.renderCraft(id);
        });
        pop();
    }

    generateCrafts() {
        for (let i = 0; i < this.numCrafts; i++) {
            let num = random(0, 100);
            console.log(num)
            if (num < 10) {
                console.log("plane")
                this.crafts.push(
                    new Plane({
                        pos: createVector(random(0, this.aWidth), random(0, this.aHeight)),
                        speed: random(4),
                        angle: random(360),
                    })
                );
            } else {
                console.log("crafdt")
                this.crafts.push(
                    new Ghost({
                        pos: createVector(150, 150),
                        speed: random(4),
                        angle: random(360),
                    })
                );
            }
        }
    }

    moveCrafts() {
        this.crafts.forEach((craft) => {
            craft.move();
        });
    }

    checkDist() {
        this.crafts.forEach((craft) => (craft.alert = false));
        let count = 0;
        for (let i = 0; i < this.crafts.length; i++) {
            for (let j = i + 1; j < this.crafts.length; j++) {
                let craftA = this.crafts[i];
                let craftB = this.crafts[j];
                let dist = sqrt(
                    sq(craftA.pos.x - craftB.pos.x) +
                        sq(craftA.pos.y - craftB.pos.y)
                );
                if (dist < 20) {
                    craftA.alert = true;
                    craftB.alert = true;
                }
                // console.log(dist);
                count++;
            }
        }
        // console.log(count);
    }

    checkPos() {
        this.crafts.forEach((craft) => {
            //Right side
            if (craft.pos.x > this.aWidth) {
                craft.pos.x = 0;
                craft.pos.y = map(craft.pos.y, 0, this.aHeight, 0, this.aHeight);
            }
            //Bottom side
            if (craft.pos.y > this.aHeight) {
                craft.pos.y = 0;
                craft.pos.x = map(craft.pos.x, 0, this.aWidth, 0, this.aWidth);
            }

            //Left side
            if (craft.pos.x < 0) {
                craft.pos.x = this.aWidth;
                craft.pos.y = map(craft.pos.y, 0, this.aHeight, 0, this.aHeight);
            }

            //Top side
            if (craft.pos.y < 0) {
                craft.pos.y = this.aHeight;
                craft.pos.x = map(craft.pos.x, 0, this.aWidth, 0, this.aWidth);
            }
        });
    }
}
