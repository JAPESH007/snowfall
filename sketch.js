var bg, snowflake1, snowflake2


function setup() {
  var canvas= createCanvas(800,400);
  snowflake1= createSprite(random(1,10) ,400, 100, 50, 50);
  snowflake1.scale=0.5;
  snowflake2.scale=0.5;
 snowflake2= createSprite(random(1,10) ,500, 100, 50, 50);
 
}


function preload(){
snowflake1 = loadImage("snow4.webp")
snowflake2 = loadImage("snow5.webp")
bg =loadImage("snow1.jpg")




}


function draw() {
  background(bg);
  drawSprites();
}



function keyPressed() {
	if (keyCode === 32) {
	   
	   Matter.Body.applyForce(gravity);
	   
	 }
   }