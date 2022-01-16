var canvas;
var backgroundImage, hero,enemy, track;
var fuelImage, powerCoinImage, lifeImage, obstacle1Image, obstacle2Image,obstacle3Image; 
var blastImage;                   //C42// SA
var database, gameState;
var form, player, playerCount;
var allPlayers, pl1, pl2, zombiegroup,toolsgroup,tool,toolImage;
var zombie1, zombie2, zombie3 
var members= [];

function preload() {
  backgroundImage = loadImage("./assets/Wasteland background.jpg");
  hero = loadImage("./assets/hero.png");
  enemy = loadImage("./assets/zombieleader.png");
  toolImage = loadImage("./assets/tool.png");
  powerCoinImage = loadImage("./assets/goldCoin.png");
  lifeImage = loadImage("./assets/life.png");
  obstacle1Image = loadImage("./assets/zombie.png"); 
  obstacle2Image = loadImage("./assets/Viking Zombie.png");
  obstacle3Image = loadImage("./assets/strong zombie.png");  
  blastImage = loadImage("./assets/blast.png"); //C42 //SA
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
