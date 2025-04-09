class Ghost extends Craft {
    constructor(obj) {
        super(obj);
        this.opacity = 0;
    }

    renderCraft(id) {
        if(this.alert) {
            this.opacity = 255
        } else {
            this.opacity = 30
        }

        push();
        translate(this.pos.x, this.pos.y);
        rotate(this.angle);
        fill(200, this.opacity);
        ellipse(0, 0, this.width);
        pop();
    }
}
