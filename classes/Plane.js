class Plane extends Craft {
    constructor(obj) {
        super(obj);
        this.tail = 8;
    }

    decreaseSpeed() {
        this.speed -= 0.3;
        if (this.speed < .3) {
            this.speed = .3
        }
        this.updateVelocity();
    }

    renderCraft(id) {
        push();
        translate(this.pos.x, this.pos.y);
        // let angle = atan2(this.velY,this.velX);
        // ellipse(0,0,10,10);
        textSize(15);
        text(id, 10, 0);

        rotate(this.angle);
        strokeWeight(1);

        fill(20);
        beginShape();

        vertex(0, 0);
        vertex(-this.tail, -this.width / 2);
        vertex(this.height - this.tail, 0);
        vertex(-this.tail, this.width / 2);

        endShape(CLOSE);

        if (this.alert == true) {
            noFill();
            ellipse(0, 0, this.height * 2);
        }
        pop();
    }
}
