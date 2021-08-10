var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    music = loadSound("ballhit.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";
    

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(515,580,200,30);
    block3.shapeColor = "purple"

    block4 = createSprite(740,580,220,30);
    block4.shapeColor = "green"

    ball = createSprite(20,100, 40,40);
    ball.x=Math.round(random(20,500));
    ball.shapeColor = "white";
    ball.velocityX = 4;
    ball.velocityY = 9;

}

function draw() {
    background("lightgray");
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    
    

    if(ball.isTouching(block1) && ball.bounceOff(block1)){
        ball.shapeColor = "blue"
        music.play();
    }

    if(ball.isTouching(block2)){
        ball.shapeColor = "orange"
        //condition to stop ball and music at specific block 
        ball.velocityX = 0;//(remove the && condition)
        ball.velocityY = 0;
        music.stop();
        //music.play();
    }

    if(ball.isTouching(block3) && ball.bounceOff(block3)){
        ball.shapeColor = "purple";
        music.play();
    }

    if(ball.isTouching(block4) && ball.bounceOff(block4)){
        ball.shapeColor = "green"
        music.play();
    }

    drawSprites();



    fill("black");
    textSize(18);
    text("Block 1",35,585);
    text("Block 2",265,585);
    text("Block 3",490,585);
    text("Block 4",700,585);
}
