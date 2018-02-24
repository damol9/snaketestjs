let rect_size=20;
function setup() {
  createCanvas(401, 401);
}

function draw() {
  background(0,0,0);
  rect(200,200,rect_size,rect_size);
  /*for(let i=0;i<400;i+=rect_size){
    for(let j=0;j<400;j+=rect_size){
    rect(i,j,rect_size,rect_size);
    }
  }xd*/
}
