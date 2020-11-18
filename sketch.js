var ground,floor;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
			{
				helicopterIMG=loadImage("helicopter.png")
				packageIMG=loadImage("package.png"      )

			}

			function setup() 
			{
				
				engine = Engine.create();
				world = engine.world;

				createCanvas(800, 700);
				rectMode(CENTER);
				

				packageSprite=createSprite(width/2, 80, 30,30);
				packageSprite.addImage(packageIMG)
				packageSprite.scale=0.2

				helicopterSprite=createSprite(width/2, 200, 10,10);
				helicopterSprite.scale=0.6
				//helicopterSprite.addImage(helicopterIMG)

				groundSprite=createSprite(width/2, height-35, width,10);
				
				groundSprite.shapeColor=color("purple")
				
				floorSprite=createSprite(width/2, height-50, 200,20);
				floorSprite.shapeColor=color("green")


				packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
				World.add(world, packageBody);
				

				//Create a Ground
				ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
				World.add(world, ground);

				floor = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
				World.add(world, floor);


				Engine.run(engine);
			
			}


			function draw() 
			{
			rectMode(CENTER);
			background(0);
			packageSprite.x= packageBody.position.x 
			packageSprite.y= packageBody.position.y 
			drawSprites();
			
			}

			

			if (keyCode === DOWN_ARROW) 
			{    
				
			
			}
