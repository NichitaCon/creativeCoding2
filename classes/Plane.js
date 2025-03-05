class Plane {
 
    constructor(obj){
        this.posX = obj.posX ?? random(0,500);
        this.posY = obj.posY ?? random(0,500);
        this.apWidth = obj.apWidth ?? 15;
        this.apHeight = obj.apHeight ?? 20;
        this.tail = obj.tail ?? 4;
        this.velX = obj.velX ?? random(-0.9,0.9);
        this.velY = obj.velY ?? random(-0.9,0.9);
    }

    renderPlane(){
        push()
        translate(this.posX,this.posY)
        let angle = atan2(this.velY,this.velX);
        // ellipse(0,0,10,10);
        
        rotate(angle)
        strokeWeight(1)
        beginShape()
       
            vertex(0,0);
            vertex(-this.tail,-this.apWidth/2)
            vertex(this.apHeight-this.tail,0)
            vertex(-this.tail,this.apWidth/2)
           
        endShape(CLOSE)
        pop()
    }

    move(){


        // if (this.posX > 500) {

        // }

        this.posX = this.posX+this.velX;
        this.posY = this.posY+this.velY;
        console.log("x = ", this.posX, "y = ", this.posY)

       
    }


}