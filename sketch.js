var tom,tomImage,tomWalking, garden, jerry, jerryImage, jerryMoving

function preload() {
    tomImage = loadImage("cat1.png");
    tomWalking = loadAnimation("cat2.png", "cat3.png");
    garden = loadImage("garden.png");
    jerryImage = loadImage("mouse1.png");
    jerryMoving = loadAnimation("mouse2.png", "mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    tom = createSprite(900,700,10,10);
    tom.addImage(tomImage);
    jerry = createSprite(100,700,10,10);
    jerry.addImage(jerryImage);
    background = createSprite(0,0,500,400);
    background.addImage(garden);

}

function draw() {

    keyPressed();

    if(movingRect.x - tom.x < jerry.width/2 + tom.width/2 && tom.x - jerry.x < jerry.width/2 + tom.width/2){
        tom.setImage(tomImage);
        jerry.setImage(jerryImage);
        }

    drawSprites();
}


function keyPressed(){

    if(keyPressed("SPACE")) {
        tom.addAnimation("Walking", tomWalking);
        jerry.addAnimation("Moving", jerryMoving);
        tom.velocityX = -3;
        jerry.velocityX = 3;
    }

}
