var dog, happyDog, database, foodS, foodStock


function preload()
{
dogImage = loadImage("images/dogImg.png")
happyDog = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database()

  
  

  //Create the Bodies Here.   
 dog = createSprite(240,350)
  dog.addImage(dogImage)
dog.scale = (0.2)
 Foodstock=database.ref('Food');
 Foodstock.on("value", readStock);
  
  


}


function draw() {
  
  background(46, 139, 87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}
fill("white")

text("Press Up Arrow Key To feed the dog Milk", 170,50)
text("Food Remaining: "+foodS, 200,200)
  
drawSprites();

 
}

function readStock(data){
foodS = data.val();
}

function writeStock(x){
  
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/') .update({
    Food:x
  })
  }
