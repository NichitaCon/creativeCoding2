class AirfieldAirCraft{
    constructor(obj){
        this.numAirCrafts = obj.numAirCrafts ?? 50;
        this.aWidth = obj.aWidth ?? 400;
        this.aHeight = obj.aHeight ?? 400;
        this.posX = obj.posX ?? 250;
        this.posY = obj.posY ?? 250;
        this.airCrafts = [];
        this.generateAirCrafts();
    }

    renderAirfield(){
        push()
            translate(this.posX,this.posY)
            fill(255,0,0)
            rect(0,0,this.aWidth,this.aHeight)
        pop()
    }

    renderAirCrafts(){
        push();
            translate(this.posX,this.posY);
            this.airCrafts.forEach((airCraft,id) => {
                airCraft.craft(id)
            })
        pop();
    }

    generateAirCrafts(){
        for (let i=0; i<this.numAirCrafts; i++) {
            this.airCrafts.push(new Craft({
                posX: random(0,200), 
                posY: random(0,200),
                speed: random(3),
                angle: random(360)
            }))
        }
        
    }

    moveAirCrafts(){
        this.airCrafts.forEach(airCraft => {
            airCraft.move()
        })
    }

    checkDist(){
 
        // this.airCrafts.forEach(airCraft => airCraft.alert == false)
        let count = 0;
        for(let i=0; i<this.airCrafts.length; i++){
            for(let j=i+1; j<this.airCrafts.length; j++){
               
                let airCraftA = this.airCrafts[i];
                let airCraftB = this.airCrafts[j];
                let dist = sqrt((sq(airCraftA.posX - airCraftB.posX))+(sq(airCraftA.posY - airCraftB.posY)));
                if(dist<20){
                    airCraftA.alert = true;
                    airCraftB.alert = true;
                } else {
                    airCraftA.alert = false;
                    airCraftB.alert = false;
                }
                // console.log(dist);
                count++;
            }
        }
        // console.log(count);

       
    }

    checkPos(){
        this.airCrafts.forEach(airCraft => {
            //Right side
            if (airCraft.posX > 200) {
                airCraft.posX = 0;
                airCraft.posY = map(airCraft.posY,0,this.aWidth,this.aWidth,0)
            }

            //Bottom side
            if (airCraft.posY > 200) {
                airCraft.posY = 0;
                airCraft.posX = map(airCraft.posX,0,this.aHeight,this.aHeight,0)
            }

            //Left side
            if (airCraft.posX < 0) {
                airCraft.posX = 200;
                airCraft.posY = map(airCraft.posY,0,this.aWidth,this.aWidth,0)
            }

            //Top side
            if (airCraft.posY < 0) {
                airCraft.posY = 200;
                airCraft.posX = map(airCraft.posX,0,this.aHeight,this.aHeight,0)
            }
        });
    }
}