var bob1, bob2, bob3, bob4, bob5;
var rod;
var chain1, chain2, chain3, chain4, chain5; 

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//bob bodies
	bob1 = new Bob(240, 450);
	bob2 = new Bob(320, 450);
	bob3 = new Bob(400, 450);
	bob4 = new Bob(480, 450);
	bob5 = new Bob(560, 450);

	//static rod
	rod = new Rod();

	//constraints
	chain1 = new Chain(bob1.body, {x : 240, y : 50});
	chain2 = new Chain(bob2.body, {x : 320, y : 50});
	chain3 = new Chain(bob3.body, {x : 400, y : 50});
	chain4 = new Chain(bob4.body, {x : 480, y : 50});
	chain5 = new Chain(bob5.body, {x : 560, y : 50});	

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  
  //display all the constraints and bodies
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  rod.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  static();
  force();
}

function static() {
	//set rod to static
	Body.setStatic(rod.body, {isStatic:true});
}

function force() {
	//apple force when left arrow is pressed
	if(keyCode === 38) {
		Body.applyForce(bob1.body, bob1.body.position, {x : -50, y : -1});
	}
}

