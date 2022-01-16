class Player {
    constructor() {
      this.name = null;
      this.index = null;
      this.positionX = 0;
      this.positionY = 0;
      this.rank = 0;
      this.score = 0;
    }
  
    addPlayer() {
      var playerIndex = "players/player" + this.index;
  
      if (this.index === 1) {
        this.index=1
        this.positionX = width / 2 + 100;
        this.positionY=height-50
      } else {
        this.positionX = width / 2 -200;
        this.index=2
        this.positionY=height/2-250
      }
  
      database.ref(playerIndex).set({
        name: this.name,
        index:this.index,
        positionX: this.positionX,
        positionY: this.positionY,
        rank: this.rank,
        score: this.score,
      });
    }
    update() {
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).update({
        positionX: this.positionX,
        positionY: this.positionY,
        index:this.index,
        rank: this.rank,
        score: this.score,
        //C41//SA
      });
    }
  
    static getPlayersInfo() {
      var playerInfoRef = database.ref("players");
      playerInfoRef.on("value", data => {
        allPlayers = data.val();
       
      });
    }
  
  getCount() {
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", data => {
      playerCount = data.val();
    });
  }

  updateCount(count) {
    database.ref("/").update({
      playerCount: count
    });
  }



}