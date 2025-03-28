class Airfield{
    constructor(obj){
        this.numPlanes = obj.numPlanes ?? 50;
        this.aWidth = obj.aWidth ?? 400;
        this.aHeight = obj.aHeight ?? 400;
        this.posX = obj.posX ?? 250;
        this.posY = obj.posY ?? 250;
        this.planes = [];
        this.generatePlanes();
    }

    renderAirfield(){
        push()
            translate(this.posX,this.posY)
            fill(255,0,0)
            rect(0,0,this.aWidth,this.aHeight)
        pop()
    }

    renderPlanes(){
        push();
            translate(this.posX,this.posY);
            this.planes.forEach((plane,id) => {
                plane.renderPlane(id)
            })
        pop();
    }

    generatePlanes(){
        for (let i=0; i<this.numPlanes; i++) {
            this.planes.push(new Plane({
                pos: createVector(
                    random(0,200),
                    random(0,200)
                ),
                speed: random(4),
                angle: random(360)
            }))
        }
        
    }

    movePlanes(){
        this.planes.forEach(plane => {
            plane.move()
        })
    }

    checkDist(){
 
        this.planes.forEach(plane => plane.alert = false)
        let count = 0;
        for(let i=0; i<this.planes.length; i++){
            for(let j=i+1; j<this.planes.length; j++){
               
                let planeA = this.planes[i];
                let planeB = this.planes[j];
                let dist = sqrt((sq(planeA.pos.x - planeB.pos.x))+(sq(planeA.pos.y - planeB.pos.y)));
                if(dist<20){
                    planeA.alert = true;
                    planeB.alert = true;
                }
                // console.log(dist);
                count++;
            }
        }
        // console.log(count);

       
    }

    checkPos(){
        this.planes.forEach(plane => {
            //Right side
            if (plane.pos.x > 200) {
                plane.pos.x = 0;
                plane.pos.y = map(plane.pos.y,0,this.aWidth,this.aWidth,0)
            }

            //Bottom side
            if (plane.pos.y > 200) {
                plane.pos.y = 0;
                plane.pos.x = map(plane.pos.x,0,this.aHeight,this.aHeight,0)
            }

            //Left side
            if (plane.pos.x < 0) {
                plane.pos.x = 200;
                plane.pos.y = map(plane.pos.y,0,this.aWidth,this.aWidth,0)
            }

            //Top side
            if (plane.pos.y < 0) {
                plane.pos.y = 200;
                plane.pos.x = map(plane.pos.x,0,this.aHeight,this.aHeight,0)
            }
        });
    }
}