const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var box,box1;
var ground;



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  box = new Box (100,100,50,100);
  box1 = new Box (100,100,60,20);

  var options = {
    isStatic : true
  }

  ground = Bodies.rectangle(400,390,800,10,options);
  World.add(world,ground);



  
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  fill ("yellow");
  rect(ground.position.x,ground.position.y,800,10);
  box.display()
  box1.display()
}