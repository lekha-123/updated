class Game {
    constructor() {
      this.resetTitle = createElement("h2");
      this.resetButton = createButton("");
  
      this.leadeboardTitle = createElement("h2");
  
      this.leader1 = createElement("h2");
      this.leader2 = createElement("h2");
      this.playerMoving = false;
  
      this.leftKeyActive = false;
      this.blast = false; //C42//SA
    }
  
    getState() {
      var gameStateRef = database.ref("gameState");
      gameStateRef.on("value", function(data) {
        gameState = data.val();
      });
    }
    update(state) {
      database.ref("/").update({
        gameState: state
      });
    }
  
    start() {
      player = new Player();
      playerCount = player.getCount();
  
      form = new Form();
      form.display();

      pl1 = createSprite(width/2+100,height-50);
    pl1.addImage("hero", hero);
    pl1.scale = 0.5;

    pl1.addImage("blast", blastImage); //C42 //SA

    pl2 = createSprite(width/2-200,height/2-250);
    pl2.addImage("enemy", enemy);
    pl2.scale = 0.5;

    pl2.addImage("blast", blastImage);  //C42//SA

    members = [pl1, pl2];
    zombiegroup= new Group();
    zombie1= new Group()
    zombie2= new Group()
    zombie3= new Group()
    toolsgroup = new Group();
    }

    play(){
      this.handleResetButton();
      this.handleElements();
      Player.getPlayersInfo();
      this.handlePlayerControls();

      if(allPlayers!==undefined){
        var index = 0;
        for (var plr in allPlayers) {
          //add 1 to the index for every loop
          index = index + 1;
  
          //use data form the database to display the cars in x and y direction
          var x = allPlayers[plr].positionX;
          var y = allPlayers[plr].positionY;


          members[index - 1].position.x = x;
          members[index - 1].position.y = y;

        if (index === player.index) {
          stroke(10);
          fill("red");
          ellipse(x, y, 50, 50); 
          
        }
        camera.position.x =members[index - 1].position.x;
            }
       
        drawSprites();
        

      }
      
    }
    handleResetButton() {
      this.resetButton.mousePressed(() => {
        database.ref("/").set({
          carsAtEnd: 0,
          playerCount: 0,
          gameState: 0,
          players: {}
        });
        window.location.reload();
      });
    }

    handleElements() {
      form.hide();
      form.titleImg.position(20, 30);
      form.titleImg.class("gameTitleAfterEffect");
  
      this.resetTitle.html("Reset Game");
      this.resetTitle.class("resetText");
      this.resetTitle.position(width / 2 + 200, 40);
  
      this.resetButton.class("resetButton");
      this.resetButton.position(width / 2 + 230, 100);
  
      this.leadeboardTitle.html("Leaderboard");
      this.leadeboardTitle.class("resetText");
      this.leadeboardTitle.position(width - 150, 20);
  
      this.leader1.class("leadersText");
      this.leader1.position(width -150, 80);
  
      this.leader2.class("leadersText");
      this.leader2.position(width - 150, 130);
    }

    handlePlayerControls() {
      Player.getPlayersInfo();
      
        if (player.index==1) {
          if (keyIsDown(LEFT_ARROW) ) {
            this.leftKeyActive = true;
            player.positionX -= 5;
            player.update();
          }
    
          if (keyIsDown(RIGHT_ARROW) ) {
            this.leftKeyActive = false;
            player.positionX += 5;
            player.update();
          }
         
            if (keyWentUp(32) ) {
              var playerposition=[player.positionX,player.positionY]
                          this.addSprites(
                            toolsgroup,
                            1,
                            toolImage,
                            0.2,
                            -4,playerposition
                          );
                        }
      }


      if(player.index==2){
        if (keyIsDown(LEFT_ARROW) ) {
          this.leftKeyActive = true;
          player.positionX -= 5;
          player.update();
        }
  
        if (keyIsDown(RIGHT_ARROW) ) {
          this.leftKeyActive = false;
          player.positionX += 5;
          player.update();
        }
        if(keyWentUp(65)){
          var playerposition=[player.positionX,player.positionY]
          this.addSprites(
            zombie1,
            1,
            obstacle1Image,
            0.2,
            4,playerposition
          );
        }
        if(keyWentUp(66)){
          var playerposition=[player.positionX,player.positionY]
          this.addSprites(
            zombie2,
            1,
            obstacle2Image,
            0.2,
            4,playerposition
          );
        }
        if(keyWentUp(67)){
          var playerposition=[player.positionX,player.positionY]
          this.addSprites(
            zombie3,
            1,
            obstacle3Image,
            0.2,
            4,playerposition
          );
        }
        }
      

      }
    
      addSprites(spriteGroup, numberOfSprites, spriteImage, scale, velocity,positions=[]) {
        for (var i = 0; i < numberOfSprites; i++) {
          var x, y;
          x = positions[0];
          y = positions[1];
          //C41 //SA
          var sprite = createSprite(x, y);
          sprite.addImage("sprite", spriteImage);
          sprite.velocityY=velocity
    
          sprite.scale = scale;
          sprite.setVelocity(0,velocity)
          spriteGroup.add(sprite);
        }
      }
}
  