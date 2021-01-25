var box,b1,b2,b3,b4,edges;
function setup(){
  createCanvas(500,500);
  box=createSprite(Math.round(random(20,490)),Math.round(random(20,450)),15,15);
  
  box.velocityX=2;
  box.velocityY=5;
  b1=createSprite(437.5,492,125,15);
  b1.shapeColor="green";
  b2=createSprite(312.5,492,125,15);
  b2.shapeColor="blue";
  b3=createSprite(187.5,492,125,15);
  b3.shapeColor="red";
  b4=createSprite(62.5,492,125,15);
  b4.shapeColor="orange";
  edges=createEdgeSprites();
   
  
}
function draw(){
  background("black");
 // box.y=mouseY;
 // box.x=mouseX;
   box.bounceOff(edges);
  
  
  if(isTouching(box,b1) ){
    
    box.shapeColor=b1.shapeColor;
     bounceOff(box,b1)
    
  }
  if(isTouching(box,b2)){
    bounceOff(box,b2);
    box.shapeColor=b2.shapeColor;
  
  }
  if(isTouching(box,b3)){
    bounceOff(box,b3);
    box.shapeColor=b3.shapeColor;
    
  }
  if(isTouching(box,b4)){
   
    box.shapeColor=b4.shapeColor;
    bounceOff(box,b4);
  }

  
  
  
  
  
  drawSprites()
}

