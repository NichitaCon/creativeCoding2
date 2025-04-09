class Craft {
    constructor(obj) {
        this.pos = createVector(
            obj.pos.x ?? random(0, 500),
            obj.pos.y ?? random(0, 500)
        );

        this.speed = obj.speed ?? random(3);
        this.angle = obj.angle ?? random(360);
        this.futureAngle = this.angle;

        this.width = obj.width ?? 15;
        this.height = obj.height ?? 20;
        this.alert = false;

        this.updateVelocity();
    }

    turnLeft() {
        this.futureAngle += 15
        console.log("left")
    }

    turnRight() {
        this.futureAngle -= 15
        console.log("right")
    }

    increaseSpeed() {
        this.speed += 0.3;
        this.updateVelocity();
        console.log("increase speed called")
    }

    decreaseSpeed() {
        this.speed -= 0.3;
        this.updateVelocity();
    }

    updateVelocity() {
        this.vel = createVector(
            this.speed * cos(this.angle),
            this.speed * sin(this.angle)
        );
    }

    renderPlane(id) {
        push();
        translate(this.pos.x, this.pos.y);
        // let angle = atan2(this.velY,this.velX);
        // ellipse(0,0,10,10);
        textSize(15);
        text(id, 10, 0);

        rotate(this.angle);
        noFill()
        strokeWeight(1);
        
        ellipse(0,0,this.width)

        if (this.alert == true) {
            noFill();
            ellipse(0, 0, this.height * 2);
        }
        pop();
    }

    move() {
        if (this.angle < this.futureAngle) {
            this.angle += .5;
            this.updateVelocity()
        } else if (this.angle > this.futureAngle) {
            this.angle -= .5;
            this.updateVelocity()
        }
        this.pos.x = this.pos.x + this.vel.x;
        this.pos.y = this.pos.y + this.vel.y;
    }
}
