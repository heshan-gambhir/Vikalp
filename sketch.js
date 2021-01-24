var narrator;
var narrator1;
var gameState=0;
var database; 
var player;

function preload(){

}
function setup(){
    createCanvas(displayWidth-50,displayHeight-150)
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}
function draw(){
    if(playerCount === 2){
        game.update(1);
      }
      if(gameState === 1){
        clear();
        game.play();
      }
      if(gameState === 2){
        game.end();
      }
    }
    
    

