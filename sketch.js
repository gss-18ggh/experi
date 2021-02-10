const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bI1, bgI2
var boyA, girlA
var bg1, bg2
var boy, girl;
var count = 1
var press, press1, sp1, sp
var v1, v2, v3, v4, v5, v6, age1
var op1, op2, op3, op4, op5, op6, que
var g1, g2, g3, gQ, gI1, gI2, gI3, gQI
var reportCard, reportCardI
var no1, no2, no3, no4, no5, no6, no8, no9;
var noI1, noI2, noI3, noI3, noI4, noI5, noI6, noI7, noI8, noI9
var ground, ani;
function preload(){

boyA = loadAnimation("boy1.png","boy2.png" );
girlA = loadAnimation("girl1.png", "girl2.png")

bI1 = loadImage("bg.jpg")

age1 = loadImage("AGE/AGE.Q.png");
v1 = loadImage("AGE/age1.png");
v2 = loadImage("AGE/age2.png");
v3 = loadImage("AGE/age3.png");
v4 = loadImage("AGE/age4.png");
v5 = loadImage("AGE/age5.png");
v6 = loadImage("AGE/age6.png");

noI1 = loadImage("num/1.png");
noI2 = loadImage("num/2.png");
noI3 = loadImage("num/3.png");
noI4 = loadImage("num/4.png");
noI5 = loadImage("num/5.png");
noI6 = loadImage("num/6.png");
noI7 = loadImage("num/7.png");
noI8 = loadImage("num/8.png");
noI9 = loadImage("num/9.png");

gQI = loadImage("gender/ques.png");
gI1= loadImage("gender/h1.png");
gI2= loadImage("gender/h2.png");
gI3= loadImage("gender/h3.png");

sp = loadImage("having1.png")
press = loadImage("PRESS1.png")

reportCardI = loadImage("REPO1.png")

}

function setup(){
    createCanvas(700, 500)

engine = Engine.create();
    world = engine.world;


boy = createSprite(100, 250, 10, 10);
boy.addAnimation("cryingB", boyA);
boy.scale = 0.4
boy.visible = true

girl = createSprite(500, 250, 10, 10);
girl.addAnimation("cryingG", girlA)
girl.scale = 0.4
girl.visible = true

bg2 = createSprite(300, 250, 10, 10);
bg2.addImage("k",bgI2);
bg2.scale= 0.4;
bg2.visible=false;

g1 = createSprite(100, 350, 10, 10);
g1.addImage("l",gI1);
g1.scale= 0.4;
g1.visible=false;

g2 = createSprite(300, 350, 10, 10);
g2.addImage("m",gI2);
g2.scale= 0.4;
g2.visible=false;

g3 = createSprite(500, 350, 10, 10);
g3.addImage("n",gI2);
g3.scale= 0.4;
g3.visible=false;

gQ = createSprite(300, 50, 10, 10);
gQ.addImage("o",gQI);
gQ.scale = 0.4;
gQ.visible = false

que = createSprite(300, 50, 10, 10);
que.addImage("p",age1);
que.scale =0.4;
que.visible = false

op1 = createSprite(100, 170, 10, 10);
op1.addImage("q", v1);
op1.scale=0.3;
op1.visible = false

op2 = createSprite(350, 170, 10, 10);
op2.addImage("r",v2);
op2.scale=0.27;
op2.visible = false

op3 = createSprite(570, 170, 10, 10);
op3.addImage("s",v3);
op3.scale=0.27;
op3.visible = false

op4 = createSprite(100, 370, 10, 10);
op4.addImage("t",v4);
op4.scale=0.3;
op4.visible = false

op5 = createSprite(350, 370, 10, 10);
op5.addImage("u",v5);
op5.scale=0.25;
op5.visible = false

op6 = createSprite(570, 370, 10, 10);
op6.addImage("v",v5);
op6.scale=0.25;
op6.visible = false


sp1 = createSprite(300, 50, 10, 10);
sp1.addImage("w",sp);
sp1.visible = true
sp1.scale=0.3

press1 = createSprite(300, 450, 10, 10);
press1.addImage("x",press);
press1.visible=true;
press1.scale = 0.3;

//ground = new Ground(350, 400, 700, 1);
//ani = new Ani(50, -20, 70, 70);

Engine.run(engine);

}

function draw(){

    background(bI1);
drawSprites();
if(count===1){

    //sp.visible=true

    count = 2

}

if(keyDown("space")&& count===2){

    sp1.visible = false
    press1.visible = false;
boy.visible = false;
girl.visible = false;
//bg2.visible = true;
/*que.visible = true;
op/1.visible = true;
op2.visible = true;
op3.visible = true;
op4.visible = true;
op5.visible = true;
op6.visible = true;
*/

gQ.visible = true;
g1.visible = true;
g2.visible = true;
g3.visible = true;

count = 3

}
if(keyDown("k") && count === 3){

    que.visible = true;
    op1.visible = true;
    op2.visible = true;
    op3.visible = true;
    op4.visible = true;
    op5.visible = true;
    op6.visible = true;
    
    gQ.visible = false;
    g1.visible = false;
    g2.visible = false;
    g3.visible = false;
    
    count =4

}

//if(keyDown("r") && count===4){

//    ground.display();

//ani.display();

//}

}
