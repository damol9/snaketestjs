let rect_size=20;
let direction=0;
let speed=15; //smaller value - faster
let apple;
let apple_exists=false;
let rectangle = {
  x:200,
  y:200
}
var snake = {
  length:1
}
/*
direction:
0 - up
1 - down
2 - left
3 - right
*/
function Apple(){
  //this.x=0;
  //this.y=0;
  this.x=floor(random((width-1)/rect_size))*20;
  this.y=floor(random((height-1)/rect_size))*20;
  this.show = function(){
    fill('red');
    rect(this.x,this.y,rect_size,rect_size);
  }
}

function setup() {
  createCanvas(401, 401);
}

function draw() {
  background(0,0,0);
  fill('white');
  rect(rectangle.x,rectangle.y,rect_size,rect_size);
  if(apple_exists === false){
    apple = new Apple();

    //console.log(apple.x+' '+apple.y);
    apple_exists=true;
  }
  apple.show();


  if(frameCount%speed==0){
    if(direction==0)rectangle.y-=rect_size;
    else if(direction==1)rectangle.y+=rect_size;
    else if(direction==2)rectangle.x-=rect_size;
    else if(direction==3)rectangle.x+=rect_size;

    if(rectangle.x<0)rectangle.x+=400;
    if(rectangle.y<0)rectangle.y+=400;
    rectangle.x=rectangle.x%400;
    rectangle.y=rectangle.y%400;

    //console.log(rectangle.x+' '+rectangle.y);
  }
  if(apple.x==rectangle.x&&apple.y==rectangle.y){
    snake.length+=1;
    console.log('hit - length:'+snake.length);
    apple_exists = false;
  }

  /*for(let i=0;i<400;i+=rect_size){
    for(let j=0;j<400;j+=rect_size){
    rect(i,j,rect_size,rect_size);
    }
  }*/
}
function keyPressed() {
  if (keyCode === LEFT_ARROW || keyCode === 65)
    direction = 2;
  else if (keyCode === RIGHT_ARROW|| keyCode === 68)
    direction = 3;
  else if (keyCode === UP_ARROW|| keyCode === 87)
    direction = 0;
  else if (keyCode === DOWN_ARROW|| keyCode === 83)
    direction = 1;
}
