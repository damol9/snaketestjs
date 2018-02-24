let rect_size=20;
let direction=1;
let speed=15; //smaller value - faster
let apple;
let apple_exists=false;
var snake_length = 1;
var snake_part = [];
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
function Snake_Part(x,y){
  this.x=x;
  this.y=y;
  this.show = function(){
    fill('white');
    rect(this.x,this.y,rect_size,rect_size);
  }
}

function setup() {
  createCanvas(401, 401);
  snake_part.push(new Snake_Part(200,200));
  snake_part.push(new Snake_Part(200,180));
  snake_part.push(new Snake_Part(200,160));
  //console.log(snake_part[0].x+' '+snake_part[0].y);
}

function draw() {
  background(0,0,0);
  fill('white');
  for(let i=0;i<snake_part.length;i++){
    //rect(snake_part[i].x,snake_part[i].y,rect_size,rect_size);
    snake_part[i].show();
  }
  if(apple_exists === false){
    apple = new Apple();

    //console.log(apple.x+' '+apple.y);
    apple_exists=true;
  }
  apple.show();


  if(frameCount%speed==0){
    snake_part.pop();
    if(direction === 0)snake_part.unshift(new Snake_Part(snake_part[0].x,snake_part[0].y-20));
    else if(direction === 1)snake_part.unshift(new Snake_Part(snake_part[0].x,snake_part[0].y+20));
    else if(direction === 2)snake_part.unshift(new Snake_Part(snake_part[0].x-20,snake_part[0].y));
    else if(direction === 3)snake_part.unshift(new Snake_Part(snake_part[0].x+20,snake_part[0].y));
  }
  if(apple.x==snake_part[0].x&&apple.y==snake_part[0].y){
    snake_length+=1;
    //console.log('hit - length:'+snake_length);
    apple_exists = false;
    snake_part.unshift(new Snake_Part(snake_part[0].x,snake_part[0].y));
    /*if(direction === 0)snake_part.unshift(new Snake_Part(snake_part[0].x,snake_part[0].y-20));
    if(direction === 1)snake_part.unshift(new Snake_Part(snake_part[0].x,snake_part[0].y+20));
    if(direction === 2)snake_part.unshift(new Snake_Part(snake_part[0].x-20,snake_part[0].y));
    if(direction === 3)snake_part.unshift(new Snake_Part(snake_part[0].x+20,snake_part[0].y));*/
  }
  //if(frameCount%speed==0){
  //  console.log(snake_part[0].x,snake_part[0].y);
  //}
}

function keyPressed() {
  if (keyCode === LEFT_ARROW || keyCode === 65){
    if(direction != 3)direction = 2;
  }
  else if (keyCode === RIGHT_ARROW|| keyCode === 68){
    if(direction != 2)direction = 3;
  }
  else if (keyCode === UP_ARROW|| keyCode === 87){
    if(direction != 1)direction = 0;
  }
  else if (keyCode === DOWN_ARROW|| keyCode === 83){
    if(direction != 0)direction = 1;
  }

}
