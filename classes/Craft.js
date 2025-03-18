class Craft {
    constructor(obj) {
        this.pos = createVector( obj.posX ?? random(0,500), obj.posY ?? random(0,500))
        this.posX = obj.posX ?? random(0,500);
        this.posY = obj.posY ?? random(0,500);
        this.speed = obj.speed ?? random(3);
        this.angle = obj.angle ?? random(360);
        this.apWidth = obj.apWidth ?? 15;
        this.apHeight = obj.apHeight ?? 20;

        createVector( obj.posX, obj.posY)

        
        
        this.velX = this.speed*cos(this.angle);
        this.velY = this.speed*sin(this.angle);

    }

    move(){
        this.posX = this.posX+this.velX;
        this.posY = this.posY+this.velY; 
    }
}