class Player {
  constructor(){
    this.rank = null ;
    this.index = null;
    this.distance = 0;
    this.name = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
  getCarsAtEnd(){
    var rank = database.ref('CarsAtEnd')
    rank.on("value",(data)=>{
      this.rank = data.val();
    })
  }

  static UpdateCarsAtEnd(rank){
    database.ref('/').update({
      CarsAtEnd:rank
    })


  }
}
