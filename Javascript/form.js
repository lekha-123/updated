class Form {
    constructor() {
      this.input = createInput("").attribute("placeholder", "Enter your name");
      this.playButton = createButton("Play");
      this.titleImg = createImg("./assets/zombie title.png", "game title");
      this.greeting = createElement("h2");
  
      this.instruction1=createElement("h5");
      this.instruction2 = createElement("h5");
    }
  
    setElementsPosition() {
      this.titleImg.position(120, 160);
      this.input.position(width / 2 - 110, height / 2 + 80);
      this.playButton.position(width / 2 - 90, height / 2 - 20);
      this.greeting.position(width / 2 - 300, height / 2 - 100);
      this.instruction1.position(100 , height / 2 +50);
      this.instruction2.position(100 , height / 2 +50);
    }
  
    setElementsStyle() {
      this.titleImg.class("gameTitle");
      this.input.class("customInput");
      this.playButton.class("customButton");
      this.greeting.class("greeting");
      this.instruction1.class("greeting1");
      this.instruction2.class("greeting1");
    }
  
    hide() {
      this.greeting.hide();
      this.playButton.hide();
      this.input.hide();
      this.instruction1.hide();
      this.instruction2.hide();
    }
  
    handleMousePressed() {
      this.playButton.mousePressed(() => {
        this.input.hide();
        this.playButton.hide();
        var message = `
        Hello ${this.input.value()}
        </br>wait for another player to join...`;
        this.greeting.html(message);
        playerCount += 1;
        player.name = this.input.value();
        player.index = playerCount;
        player.addPlayer();
        player.updateCount(playerCount);
        if(player.index==1){
          var info1 = "Use the left and right arrow keys to move and space bar to use your attack.";
          this.instruction1.html(info1);
        }
        else if(player.index==2){
          var info1=" Use the number keys to summon zombies to attack the hero.";
          this.instruction2.html(info1);
        }
      
      });
    }
  
    display() {
      this.setElementsPosition();
      this.setElementsStyle();
      this.handleMousePressed();
    }
  
    
  }
  