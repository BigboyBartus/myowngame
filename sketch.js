var score=0
function preload(){
groundImg = loadImage("assets/ground.jpg")
forestImg=loadImage("assets/forest.jpg")
firstMapImg=loadImage("assets/partofmap.jpg")
randomPlaceImg=loadImage("assets/randomplace.jpg")
villageImg=loadImage("assets/villageinmap.jpg")
secondvillageImage=loadImage("assets/secondvil.jpg")
roadImg=loadImage("assets/road.png")
startImg=loadImage("assets/startvillage.jpeg")
playerImg=loadImage("assets/player.png")
enemyImg=loadImage("assets/enemies.png")
bulletImg=loadImage("assets/bullet.png")
dragonImg=loadImage("assets/bossbattle.png")
}


function setup(){
createCanvas(1000,500)
ground=createSprite(500,450,2000,400)
ground.addImage(startImg)
player=createSprite(50,50,89,100)
player.shapeColor="red"
player.addImage(playerImg)
player.scale=0.02
bullet=createSprite(player.x, player.y)
    bullet.addImage(bulletImg)
    bullet.visible=false
    zombies=new Group()
}


function draw(){
background("green")
fill("red")
textSize(20)
text("score:  "+score,50,30)


if(keyIsDown(LEFT_ARROW)){
    player.x=player.x-1
}
if(keyIsDown(RIGHT_ARROW)){
    player.x=player.x+1
}
if(keyIsDown(UP_ARROW)){
    player.y=player.y-1
}
if(keyIsDown(DOWN_ARROW)){
    player.y=player.y+1
}
if(keyCode===32){
    console.log(123)
    bullet.x=player.x
    bullet.y=player.y
    bullet.visible=true
    bullet.velocityX=2
    bullet.scale=0.2
}
if(score>=1){
dragon=createSprite(100,50)
dragon.addImage(dragonImg)
dragon.velocityY=1
dragon.scale=0.03
}

spawnEnemies();
if(bullet.isTouching(zombies)){
    zombies.destroyEach()
    bullet.destroy()    
    score=score+1
}
drawSprites();

}
function spawnEnemies(){
if(frameCount%250==0){
sprite=createSprite(random(200,800),10,20,20)

sprite.shapeColor="blue"
sprite.velocityY=1
sprite.addImage(enemyImg)
sprite.scale=0.2 
zombies.add(sprite)

}
}