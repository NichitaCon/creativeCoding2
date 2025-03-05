class Airfield{
    constructor(obj){
        this.numPlanes = obj.numPlanes ?? 50;
        this.width = obj.width ?? 400;
        this.heigt = obj.height ?? 400;
        this.posX = obj.posX ?? 250;
        this.posY = obj.posY ?? 250;
        this.planes = [];
        this.generatePlanes();
    }

    renderAirfield(){
        push()
            translate(this.posX,this.posY)
            fill(255,0,0)
            rect(0,0,this.width,this.heigt)
        pop()
    }

    renderPlanes(){
        push();
            translate(this.posX,this.posY);
            this.planes.forEach(plane => plane.renderPlane())
        pop();
    }

    generatePlanes(){
        for (let i=0; i<this.numPlanes; i++) {
            this.planes.push(new Plane({
                posX: random(-this.width*.5,this.width*.5), 
                posY: random(-this.heigt*.5,this.heigt*.5)
            }))
        }
    }

    movePlanes(){
        this.planes.forEach(plane => {
            plane.move()
        })
    }

    // checkPos(){
    //     this.planes.forEach(plane => {
    //         if (plane.posX > this.width/2) {
    //             plane.posX = -this.width/2;
    //             plane.posY = map(plane.posY,0,this.width,this.width,0)
    //         } else if
    //     })
    // }
}