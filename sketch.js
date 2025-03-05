let airfields = [];

function setup(){
    createCanvas(500,500);
    background(221,161,94);
    angleMode(DEGREES)
    rectMode(CENTER)
    airfields.push(new Airfield({
        numPlanes:10,
        width:80,
        height:80,
        posX:100,
        posY:100,
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
    airfields.forEach(airfields => {
        airfields.renderAirfield()
        airfields.renderPlanes()
        airfields.movePlanes()
    })

}