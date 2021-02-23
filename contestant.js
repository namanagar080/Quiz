class Contestant{
    constructor(){
    this.index=null;
    this.distance=0;
    this.name=null;
    }

    getCount(){
      var getCountRef=  database.ref("playerCount");
        getCountRef.on("value",function(data){
            contestantCount=data.val();
        })
    }

    updateCount(count){
       database.ref("/").update({
           contestantCount:count
       }) 
    }

    updateContestantDetails(){
        var contestantIndex="players/player"+this.index;
       database.ref(contestantIndex).set({
           name:this.name,
           distance:this.distance
       })
    }

   static getContestantInfo(){
      var playerInfoRef=  database.ref("players");
      playerInfoRef.on("value",(data)=>{ 
          allPlayers=data.val();
      })
    }
}