class Quiz{
    constructor(){}

    getState(){
        var gameStateRef=database.ref("gameState");
        gameStateRef.on("value",function(data){
            gameState=data.val();
        })
}

updateState(state){
    database.ref("/").update({
        gameState:state
    })
    }

    async start(){
        if(gameState===0){
            contestant=new Contestant();
            var contestantCountRef=await database.ref('contrestantCount').once("value");
            if(contestantCountRef.exists()){
                contestantCount=ContestantCountRef.val();
                contestant.getCount();
            }
            question=new Question();
            question.display();
        }
    }
}