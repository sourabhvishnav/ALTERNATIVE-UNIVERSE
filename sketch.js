var sun,mercury,venus,earth,mars,jupiter;

var sun_image,mercury_image,venus_image,earth_image,mars_image,
    jupiter_image;

var angle;
var angleSpeed;


 function preload (){
   
   sun_image = loadImage("sun.png");
   mercury_image = loadImage("mercury.png");
   venus_image = loadImage("venus.png");
   earth_image = loadImage("earth.png");
   mars_image = loadImage("mars.png");
   jupiter_image = loadImage("jupiter.png");
 } 
   
function setup() {
  createCanvas(800, 670);
  
  angle  =0;
  angleSpeed = 0.8;

  sun = createSprite(0,0,5,5);
  sun.addImage("sun",sun_image);
  sun.scale = 0.2;

  mercury = createSprite(10,80,2,2);
  mercury.addImage("mercury",mercury_image);
  mercury.scale = 0.3;
  
  venus = createSprite(120,200,5,5);
  venus.addImage("venus",venus_image);
  venus.scale = 0.2;
  
  earth = createSprite(180,80,5,5);
  earth.addImage("earth",earth_image);
  earth.scale = 0.1;
  
  mars = createSprite(0,175,5.5);
  mars.addImage("mars",mars_image);
  mars.scale = 0.150
  
  jupiter = createSprite(245,0,5,5);
  jupiter.addImage("jupiter",jupiter_image);
  jupiter.scale = 0.4;
  
}

function draw() {
  background(0);
  
    sun.debug =  true;
    sun.setCollider("circle",-5,0,150);

  if(frameCount%38===0){
    sun.scale = sun.scale+0.05;
  }
  
  
  translate(width/2,height/2);
  rotate(angle);

 angle = angle + angleSpeed


  jupiter.debug = true;
  jupiter.setCollider("circle",0,0,120);
  
  mars.debug = true;
  mars.setCollider("circle",0,0,260);
  
  earth.debug = true;
  earth.setCollider("circle",0,0,360);
  
  venus.debug = true;
  venus.setCollider("circle",0,-50,190);
  

  mercury.debug = true;
  mercury.setCollider("circle",0,0,160);
  
  if(sun.isTouching(jupiter)){
    jupiter.destroy();
  }
   if(sun.isTouching(mercury)){
    mercury.destroy();
  }
   if(sun.isTouching(earth)){
    earth.destroy();
  }
   if(sun.isTouching(venus)){
    venus.destroy();
  }
   if(sun.isTouching(mars)){
    mars.destroy();
  }
  
  if(frameCount%970===0){
   sun.destroy();
  }
  
  if(frameCount%970===0){
    reset();
  }
  
  drawSprites();
}
 function reset(){
   sun = createSprite(0,0,5,5);
  sun.addImage("sun",sun_image);
  sun.scale = 0.2;
  
  mercury = createSprite(10,80,2,2);
  mercury.addImage("mercury",mercury_image);
  mercury.scale = 0.3;
  
  venus = createSprite(120,200,5,5);
  venus.addImage("venus",venus_image);
  venus.scale = 0.2;
  
  earth = createSprite(180,80,5,5);
  earth.addImage("earth",earth_image);
  earth.scale = 0.1;
  
  mars = createSprite(0,175,5.5);
  mars.addImage("mars",mars_image);
  mars.scale = 0.150
  
  jupiter = createSprite(245,0,5,5);
  jupiter.addImage("jupiter",jupiter_image);
  jupiter.scale = 0.4;
  
   
 }