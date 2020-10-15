const Bodies=Matter.Bodies
const Engine=Matter.Engine
const World=Matter.World
var particles = []
var particles2 = []
var particles3 = []
var particles4 = []
var plinkos = []
var divisions = []
var world,engine
var p1,bottom,divisionHeight=300
function setup() {
  createCanvas(480,800);
  engine=Engine.create()
  world=engine.world
  bottom=new Ground(250,800,500,50)
  p1=new Particle(200,100)
  for (var k =0; k<=width; k=k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
  }

  for (var j = 40; j <=width; j=j+50){
    plinkos.push(new Plinko(j,75));
  }

  for (var j = 15; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,175))
  }
  
}

function draw() {
  background(0,0,0); 
  Engine.update(engine) 
  drawSprites();
  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }

  for (var k = 0; k<divisions.length; k++){
    divisions[k].display();
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
  }
  bottom.display();
  p1.display();
  
  
}