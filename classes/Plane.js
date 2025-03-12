class Plane {
 
    constructor(obj){
        this.posX = obj.posX ?? random(0,500);
        this.posY = obj.posY ?? random(0,500);
        this.speed = obj.speed ?? random(3);
        this.angle = obj.angle ?? random(360);
        this.apWidth = obj.apWidth ?? 15;
        this.apHeight = obj.apHeight ?? 20;
        this.tail = obj.tail ?? 4;
        this.alert = false

        
        this.velX = this.speed*cos(this.angle);
        this.velY = this.speed*sin(this.angle);
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

    move(){


        // if (this.posX > 500) {

        // }

        this.posX = this.posX+this.velX;
        this.posY = this.posY+this.velY;
        // console.log("x = ", this.posX, "y = ", this.posY)

       
    }


}