let rect_size=30;
let direction=1;
let last_direction=0;
let speed=15; //smaller value - faster
let apple;
let apple_exists=false;
let snake_length = 1;
let snake_part = [];
let alive=true;
let changed=true;
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
  this.x=floor(random((width-1)/rect_size))*rect_size;
  this.y=floor(random((height-1)/rect_size))*rect_size;
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
  createCanvas(361, 361);
  snake_part.push(new Snake_Part((width-1)/2,(height-1)/2));
  snake_part.push(new Snake_Part((width-1)/2,((height-1)/2)-20));
  snake_part.push(new Snake_Part((width-1)/2,((height-1)/2)-40));
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
    let trigger=true;
    while(trigger){
      trigger=false;
      for(let i=1;i<snake_part.length;i++){
        if(apple.x==snake_part[i].x&&apple.y==snake_part[i].y){
          trigger=true;
          apple = new Apple();
        }
      }
    }

    //console.log(apple.x+' '+apple.y);
    apple_exists=true;
  }
  apple.show();

  if(alive){
    if(frameCount%speed==0){

      if(direction === 0){
        //console.log("MOVE"+direction+' '+snake_part[0].x+' '+(snake_part[0].y-20));
        if((snake_part[0].y-rect_size)>=0){
          let trigger=false;
          for(let i=1;i<snake_part.length;i++){
            if(snake_part[0].x==snake_part[i].x&&snake_part[0].y-rect_size==snake_part[i].y)trigger=true;
          }
          if(trigger){
            alive=false;
            changed=true;
          }
          else{
            snake_part.pop();
            snake_part.unshift(new Snake_Part(snake_part[0].x,snake_part[0].y-rect_size));
          }
        }
        else {
          //console.log("COLLISION"+direction+' '+snake_part[0].x+' '+(snake_part[0].y-20));
          alive=false;
          changed=true;
        }
      }
      else if(direction === 1){
        //console.log("MOVE"+direction+' '+snake_part[0].x+' '+(snake_part[0].y+20));
        if((snake_part[0].y+rect_size)<(height-1)){
          let trigger=false;
          for(let i=1;i<snake_part.length;i++){
            if(snake_part[0].x==snake_part[i].x&&snake_part[0].y+rect_size==snake_part[i].y)trigger=true;
          }
          if(trigger){
            alive=false;
            changed=true;
          }
          else{
            snake_part.pop();
            snake_part.unshift(new Snake_Part(snake_part[0].x,snake_part[0].y+rect_size));
          }
        }
        else {
          //console.log("COLLISION"+direction+' '+snake_part[0].x+' '+(snake_part[0].y+20));
          alive=false;
          changed=true;
        }
      }
      else if(direction === 2){
        //console.log("MOVE"+direction+' '+(snake_part[0].x-20)+' '+snake_part[0].y);
        if((snake_part[0].x-rect_size)>=0){
          let trigger=false;
          for(let i=1;i<snake_part.length;i++){
            if(snake_part[0].x-rect_size==snake_part[i].x&&snake_part[0].y==snake_part[i].y)trigger=true;
          }
          if(trigger){
            alive=false;
            changed=true;
          }
          else{
            snake_part.pop();
            snake_part.unshift(new Snake_Part(snake_part[0].x-rect_size,snake_part[0].y));
          }
        }
        else {
          //console.log("COLLISION"+direction+' '+(snake_part[0].x-20)+' '+snake_part[0].y);
          alive=false;
          changed=true;
        }

      }
      else if(direction === 3){
        //console.log("MOVE"+direction+' '+(snake_part[0].x+20)+' '+snake_part[0].y);
        if((snake_part[0].x+rect_size)<(width-1)){
          let trigger=false;
          for(let i=1;i<snake_part.length;i++){
            if(snake_part[0].x+rect_size==snake_part[i].x&&snake_part[0].y==snake_part[i].y)trigger=true;
          }
          if(trigger){
            alive=false;
            changed=true;
          }
          else{
            snake_part.pop();
            snake_part.unshift(new Snake_Part(snake_part[0].x+rect_size,snake_part[0].y));
          }
        }
        else {
          //console.log("COLLISION"+direction+' '+(snake_part[0].x+20)+' '+snake_part[0].y);
          alive=false;
          changed=true;
        }
      }
      last_direction=direction;
    }
  }
  if(apple.x==snake_part[0].x&&apple.y==snake_part[0].y){
    snake_length+=1;
    //console.log('hit - length:'+snake_length);
    apple_exists = false;
    snake_part.unshift(new Snake_Part(snake_part[0].x,snake_part[0].y));
    changed=true;
    /*if(direction === 0)snake_part.unshift(new Snake_Part(snake_part[0].x,snake_part[0].y-20));
    if(direction === 1)snake_part.unshift(new Snake_Part(snake_part[0].x,snake_part[0].y+20));
    if(direction === 2)snake_part.unshift(new Snake_Part(snake_part[0].x-20,snake_part[0].y));
    if(direction === 3)snake_part.unshift(new Snake_Part(snake_part[0].x+20,snake_part[0].y));*/
  }
  //if(frameCount%speed==0){
  //  console.log(snake_part[0].x,snake_part[0].y);
  //}
  if(changed){
    document.getElementById("id1").innerHTML = "Wynik: "+(snake_length-1)+'&nbsp;&nbsp;&nbsp;Czy zywy: '+alive;
    changed=false;
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW || keyCode === 65){
    if(last_direction != 3) direction = 2;
  }
  else if (keyCode === RIGHT_ARROW|| keyCode === 68){
    if(last_direction != 2) direction = 3;
  }
  else if (keyCode === UP_ARROW|| keyCode === 87){
    if(last_direction != 1) direction = 0;
  }
  else if (keyCode === DOWN_ARROW|| keyCode === 83){
    if(last_direction != 0) direction = 1;
  }

}
