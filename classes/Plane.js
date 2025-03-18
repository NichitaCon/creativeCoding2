class Plane extends Craft {
 
    constructor(obj){

        super(obj);

        this.tail = obj.tail ?? 4;
        this.alert = false
    }

    renderPlane(id){
        push()
        translate(this.posX,this.posY)
        // let angle = atan2(this.velY,this.velX);
        // ellipse(0,0,10,10);
        textSize(15)
        text(id,10,0)
        
        rotate(this.angle)
        strokeWeight(1)
        beginShape()
       
            vertex(0,0);
            vertex(-this.tail,-this.apWidth/2)
            vertex(this.apHeight-this.tail,0)
            vertex(-this.tail,this.apWidth/2)
           
        endShape(CLOSE)

        if (this.alert == true) {
            noFill();
            ellipse(0,0,this.apHeight*2);
        }
        pop()
    }




}