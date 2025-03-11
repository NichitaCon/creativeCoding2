let airfields = [];

function setup(){
    createCanvas(500,500);
    
    angleMode(DEGREES)
    rectMode(CENTER)
    airfields.push(new Airfield({
        numPlanes:10,
        width:200,
        height:200,
        posX:150,
        posY:200,
    }))

    // airfields.push(new Airfield({
    //     numPlanes:10,
    //     width:200,
    //     height:200,
    //     posX:350,
    //     posY:150,
    // }))
}
 
 
function draw(){
    background(221,161,94);
    airfields.forEach(airfields => {
        airfields.renderAirfield()
        airfields.renderPlanes()
        airfields.movePlanes()
        airfields.checkDist()
        airfields.checkPos()
    })

}