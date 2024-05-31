let balls = []; // save ball info
//set a variable to resize canvas
let minNumber;
//set a variable to record the change between circles and dots
let CircleOrDots = true;

function setup() {
  //keep the canva as a square
  let minNumber= Math.min(windowWidth, windowHeight);
  createCanvas(minNumber, minNumber); 
  setupBalls();
}

function setupBalls() {
  balls = [];
  background(0); 
  
  let numBalls = 500; // Number of balls to generate
  
  // create balls at random locations
  for (let i = 0; i < numBalls; i++) {
    // calculate balls location
    let x = random(width); // Random x position within the canvas
    let y = random(height); // Random y position within the canvas
    
    // random balls color 
    let c = color(random(255), random(255), random(255)); 
    
    // save ball info
    balls.push({
      x: x,
      y: y,
      color: c
    });
  }
}
function windowResized() {
  resizeCanvas(minNumber, minNumber);
  setupBalls(); // Recalculate ball positions based on new window size
}

function draw() {
  //add mouse-pressed animation to move the balls in the background
  if(mouseIsPressed == true){
  setupBalls(); 
  }
  minNumber = Math.min(windowWidth, windowHeight);
  background(0); // clear the history

  // draw the balls
  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    
    // draw balls
    fill(ball.color); 
    strokeWeight(0); // Set stroke width to 2 pixels
    ellipse(ball.x, ball.y, minNumber * 0.02, minNumber * 0.02); // Diameter is 2% of window width
  }
  //change between circles and dots
  //when press 1/2/3/4 circles will rotate
  if (rotateNumber1){push();
    //transform the middle of rotation to the middle of the circle
    translate(minNumber * 0.30, minNumber * 0.25);
    rotate(frameCount / 1600 );
  drawBigCircleWithChanges(0, 0, minNumber * 0.05/2, 25, minNumber * 0.55, ['#FFFFFF', '#4E9E48', '#FFFFFF', '#4E9E48', '#FFFFFF', '#4E9E48', '#FFFFFF', '#4E9E48', '#D449AC', '#F55060', '#000000', '#199B34', '#FFFFFF']); // Top-left big circle
  pop();
  }else{drawBigCircleWithChanges(minNumber * 0.30, minNumber * 0.25, minNumber * 0.05/2, 25, minNumber * 0.55, ['#FFFFFF', '#4E9E48', '#FFFFFF', '#4E9E48', '#FFFFFF', '#4E9E48', '#FFFFFF', '#4E9E48', '#D449AC', '#F55060', '#000000', '#199B34', '#FFFFFF']);};
  if (rotateNumber2){push();
    translate(minNumber * 0.85, minNumber * 0.2);
    rotate(frameCount / 1600 );
    drawBigCircleWithChanges(0, 0, minNumber * 0.05/2, 25, minNumber * 0.4, ['#FFFFFF', '#ED6E0B', '#FFFFFF', '#ED6E0B', '#FFFFFF', '#ED6E0B', '#FFFFFF', '#ED6E0B', '#D449AC', '#4DADCE', '#000000', '#199B34', '#FFFFFF']); // Top-right big circle
  pop();
  }else{drawBigCircleWithChanges(minNumber * 0.85, minNumber * 0.2, minNumber * 0.05/2, 25, minNumber * 0.4, ['#FFFFFF', '#ED6E0B', '#FFFFFF', '#ED6E0B', '#FFFFFF', '#ED6E0B', '#FFFFFF', '#ED6E0B', '#D449AC', '#4DADCE', '#000000', '#199B34', '#FFFFFF']); // Top-right big circle
}
if (rotateNumber3){push();
  translate(minNumber * 0.20, minNumber * 0.85);
  rotate(frameCount / 1600 );    
drawBigCircleWithChanges(0, 0, minNumber * 0.05/2, 25, minNumber * 0.5, ['#00238B', '#E0B155', '#00238B', '#E0B155', '#00238B', '#E0B155', '#00238B', '#E93B6E', '#FF3512', '#F363C5', '#000000', '#199B34', '#FF1B1D', '#FFFFFF']); // Bottom-left big circle
pop();
}else{drawBigCircleWithChanges(minNumber * 0.20, minNumber * 0.85, minNumber * 0.05/2, 25, minNumber * 0.5, ['#00238B', '#E0B155', '#00238B', '#E0B155', '#00238B', '#E0B155', '#00238B', '#E93B6E', '#FF3512', '#F363C5', '#000000', '#199B34', '#FF1B1D', '#FFFFFF']); // Bottom-left big circle
}  
if (rotateNumber4){push();
  translate(minNumber * 0.8, minNumber * 0.75);
  rotate(frameCount / 1600 );    
drawBigCircleWithChanges(0, 0, minNumber * 0.05/2, 25, minNumber * 0.55, ['#FFFFFF', '#EB1D59', '#FFFFFF', '#EB1D59', '#FFFFFF', '#EB1D59', '#FFFFFF', '#EB1D59', '#D449AC', '#FC5E45', '#000000', '#FF1631', '#FF1B1D', '#FFFFFF', '#FFFFFF']); // Bottom-right big circle
pop();
}else{drawBigCircleWithChanges(minNumber * 0.8, minNumber * 0.75, minNumber * 0.05/2, 25, minNumber * 0.55, ['#FFFFFF', '#EB1D59', '#FFFFFF', '#EB1D59', '#FFFFFF', '#EB1D59', '#FFFFFF', '#EB1D59', '#D449AC', '#FC5E45', '#000000', '#FF1631', '#FF1B1D', '#FFFFFF', '#FFFFFF']); // Bottom-right big circle
}
}

function drawBigCircleWithChanges(x, y, r, Num, diameter, colors) {
  drawBigCircle(x, y, diameter); // Draw the big circle
  if(CircleOrDots){
  drawCirclesInsideBigCircle(x, y, diameter, colors);
  } // Draw the concentric circles inside the big circle
  else{
    drawDotsInsideBigCircle(x, y, r, Num, diameter, colors)};
}

function drawBigCircle(x, y, diameter) {
  fill(255); // Set fill color to white
  stroke(0); // Set the stroke color to black
  strokeWeight(minNumber * 0.02); // Set the stroke width relative to window width
  ellipse(x, y, diameter); // Draw the big circle
}

function drawCirclesInsideBigCircle(x, y, diameter, colors) {
  let numOfCircles = colors.length; // Use the number of colors provided
  let circleDiameter = diameter; // Start with the diameter of the big circle

  for (let i = 0; i < numOfCircles; i++) {
    drawCircle(x, y, circleDiameter, colors[i]); // Draw the concentric circles
    circleDiameter -= diameter / numOfCircles; // Decrease the diameter to create concentric circles
  }
}
//change circles into dots
function drawDotsInsideBigCircle(x, y, r, Num, diameter, colors){
  let numOfCircles = colors.length; // Use the number of colors provided
  let circleDiameter = diameter; // Start with the diameter of the big circle

  for (let i = 0; i < numOfCircles; i++) {
    drawDots(x, y, r, Num, circleDiameter,colors[i]); // Draw the concentric circles
    circleDiameter -= diameter / numOfCircles; // Decrease the diameter to create concentric circles
  }
}

function drawCircle(x, y, diameter, strokeColor) {
  noFill();
  stroke(strokeColor); // Set the stroke color to the provided color
  strokeWeight(minNumber * 0.05); // Set the stroke width relative to window width
  ellipse(x, y, diameter); // Draw the circle
}

//here is the function to draw dots
function drawDots(x, y, r, Num, diameter, fillColor){
  fill(fillColor);
  noStroke();
  //use angle to define location of dots
  let angleIncrement = TWO_PI / Num;
  for (let i = 0; i < Num; i++) {
    let dotsAngle = i * angleIncrement; 
    let xPos = x + diameter/2 * Math.cos(dotsAngle); 
    let yPos = y + diameter/2 * Math.sin(dotsAngle); 
    ellipse(xPos, yPos, r, r); 
  }
}

//add key-pressed annimation to change circles
let rotateNumber1 = true;
let rotateNumber2 = true;
let rotateNumber3 = true;
let rotateNumber4 = true;
function keyPressed() {
  if (key == " ") {
    CircleOrDots = !CircleOrDots;
  }
  if (key == "1") {
    rotateNumber1 = !rotateNumber1;
  };
  if (key == "2") {
    rotateNumber2 = !rotateNumber2;
  };
  if (key == "3") {
    rotateNumber3 = !rotateNumber3;
  };
  if (key == "4") {
    rotateNumber4 = !rotateNumber4;
  };
}