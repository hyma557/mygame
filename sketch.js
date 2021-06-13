const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var myEngine, myWorld;

var tank1, tank2, tank1I, tank2I;
var bg, bgi;
var database
var position;
var game, player, form;
var gameState=0, playerCount=0;

function preload(){
  bgi = loadImage("images/background.png")
  tank1I = loadImage("images/imgt2.png")
  tank2I = loadImage("images/imgt1.png")

}
function setup() {
  createCanvas(windowWidth, windowHeight);
  database = firebase.database()
  
  
  /*bg = createSprite(width/2,height/2)
  bg.addImage(bgi)
  bg.scale = 1.15
  bg.velocityX = -2*/

game = new Game()
console.log("ckeck1")
game.getState()
game.start()



}

function draw() {
 // background("lightgreen");  
  //Engine.update(myEngine)

/**/

  if (playerCount == 2){
    game.update(1)
  }

  if (gameState == 1){
   clear()
   game.play()
  }
  
  drawSprites();

  

 
  }

  function readPosition(data){
    position = data.val();
    tank1.x = position.x
    tank2.x = position.x
  }
  
  function showError(){
    console.log("message")
  }