var hypnoticBall, database;
var position;
var form, game, player;
var gameState = 0, playerCount = 0;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
game = new Game()
  game.start()
}

function draw(){
  background("white");
  
   
  
}

