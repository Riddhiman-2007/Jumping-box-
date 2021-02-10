var canvas;
var music;
var rect1 , rect2 , rect3 , rect4 ; 
var box ; 
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
 rect1 = createSprite(625,580,160,20);
 rect1.shapeColor = "green";

 rect2= createSprite(450,580,160,20);
 rect2.shapeColor = "pink";

 rect3= createSprite(275,580,160,20);
 rect3.shapeColor = "orange";
  
 rect4= createSprite(100,580,160,20);
 rect4.shapeColor = "blue";
  
 box = createSprite(random(20,750),300,20,20);
 box.velocityX = (random (-1,-10)) ; 
 box.velocityY = (random(1,10)) ;
 box.shapeColor = "white";
    //create box sprite and give velocity
  edges = createEdgeSprites();
    
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite


  if(box.isTouching(rect1)){
    box.shapeColor = "green";
  }
  
  if(box.isTouching(rect2)){
    box.shapeColor = "pink";
  }
  
  if(box.isTouching(rect3)){
    box.shapeColor = "orange";
    music.play();
  }
if(box.isTouching(rect4)){
    box.shapeColor = "blue";
    music.stop();
  box.velocityX = 0;
  box.velocityY = 0;
  }
  
  
box.bounceOff(edges);
box.bounceOff(rect1);
box.bounceOff(rect2);
box.bounceOff(rect3);
    //add condition to check if box touching surface and make it box
  
  drawSprites();
}
