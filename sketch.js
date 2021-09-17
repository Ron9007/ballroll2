const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball, ballImg
var floors
var wall1
var ground, leftBoundary, rightBoundary
var endBall
function preload() {
ballImg=loadImage("ball.gif")
}

function setup() {
createCanvas(600,600)
engine = Engine.create();
world = engine.world;
ball = new Ball(100,50,30,30)
//spawnWalls()
wall1 = new Wall(100,120,50,30)
ground = new Wall(300,575,600,50)
leftBoundary = new Wall(5,300,10,600)
rightBoundary = new Wall(595,300,10,600)
endBall=new Ball(590,550,30,30)
}

function draw() {
  background("gray");
  ball.display()
  wall1.display()
  ground.display()
  leftBoundary.display()
  rightBoundary.display()
  endBall.display()
  
  Engine.update(engine);
}
function keyPressed(){
  if(keyDown(LEFT_ARROW)){
    leftForce()
    console.log("left arrow pressed")
  }
  if(keyDown(RIGHT_ARROW)){
    rightForce()
    console.log("right arrow pressed")
  }
}
function leftForce(){
  Matter.Body.applyForce(ball.body,{x:0,y:0},{x:-0.5,y:0})
  console.log("left force")
}
function rightForce(){
  Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0.5,y:0})
}
function spawnWalls(){
  var wall1 = new Wall(100,120,50,30)
  wall1.display();
}