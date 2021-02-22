var monkey, monkey_running
var banana, bananaImage, obstacle, obstacle2
var FoodGroup, obstacleGroup
var score
var ground
var bananana
var bananaImage
var score2 = 0
var wizardGroup
var potiongroup
var dragonGroup

function preload() {


  wizardImage = loadImage("wizardImage.jpg")

  potionImage = loadImage("potionImage.png");
  obstacle2 = loadImage("obstacle.png");
  dragonImage = loadImage("dragonImage.png")
}



function setup() {
  createCanvas(600, 600)
  ground = createSprite(300, 595, 900, 10)
  ground.velocityX = -5
  wizard = createSprite(100, 595, 30, 30)
  wizard.addAnimation("wizard", wizardImage)
  wizard.scale = 0.16

  dragonGroup = new Group
  wizardGroup = new Group
  potionGroup = new Group

}


function draw() {
  background("white")

  ground.x = ground.width / 2

  monkey.collide(ground)
  if (keyWentDown("space")) {
    wizard.velocityY = -20
  }
  wizard.velocityY = wizard.velocityY + 0.8
  wizardGroup.add(wizard)
  if (wizard.isTouching(potionGroup)) {
    potionGroup.destroyEach()
    wizard.scale = monkey.scale + 0.02
  }
  spawnObstacle()
  potion()
  score()
  doReset()
  drawSprites()
}

function spawnObstacle() {
  if (frameCount % 200 === 0) {
    dragon = createSprite(600, 550, 40, 40)
    dragon.addImage("obstacle", obstacle2)
    dragon.scale = 0.2
    dragon.velocityX = -5
    dragonGroup.add(dragon)
  }
}

function potion() {
  if (frameCount % 100 === 0) {
    potion = createSprite(600, 150, 20, 20)
    potion.addImage("banana", bananaImage)
    potion.scale = 0.111
    potion.velocityX = -5
    potion.lifetime = 120
    potion.x = Math.round(random(150, 280))
    potionGroup.add(potion)
  }
}

function score() {
  textSize(18)
  text("Survival Time:", 385, 50)
  text(score2, 509, 50)
  score2 = Math.ceil(frameCount / frameRate())
  console.log(score2)
}

function doReset() {
  if (wizard.isTouching(dragonGroup)) {
    dragonGroup.destroyEach()
    wizard.scale = wizard.scale - 0.02
  }
}