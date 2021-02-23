var canvas;
var gameState, contestantCount, database, quiz, question, contestant ;

function setup(){
  canvas = createCanvas(850,400);
  database=firebase.database();
  quiz=new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  if(contestantCount===4){
    gameState=1;
    quiz.updateState(gameState);
  }
  if(gameState===1){
    quiz.play();
  }
  drawSprites();
}
