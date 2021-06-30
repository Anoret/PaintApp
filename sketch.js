let penc = 'black'
let outline = true
let penw = '10'
let shape = 'line'
function setup() {
  createCanvas(800, 800);background(220);
}

function draw() {
  
  
// these are to draw out my buttons using code
  stroke('black')
  strokeWeight(1)
  
  fill('red')
  rect(0,0,50,50)
  
  fill('green')
  rect(50,0,50,50)
  
  fill('blue')
  rect(100,0,50,50)
  
  fill('black')
  rect(150,0,50,50)
  
  fill('yellow')
  rect(200,0,50,50)
  
  fill('white')
  rect(250,0,100,50)
  fill('black')
  textSize(30)
  text('Eraser',255,38)
  
  fill('white')
  rect(350,0,100,50)
  fill('black')
  textSize(30)
  text('Draw',365,36)
  
  fill('white')
  rect(450,0,50,50)
  rect(462,13,25,25)
  
  fill('white')
  rect(500,0,50,50)
  triangle(506,38,524,12,542,38)
  
  fill('white')
  rect(550,0,50,50)
  line(559,40,588,10)
  
  
  //these are the codes for my buttons!
  if (mouseIsPressed && mouseY<50 && mouseX > 0 && mouseX < 50)
    {penc = 'red'}
  
  if (mouseIsPressed && mouseY<50 && mouseX > 50 && mouseX < 100)
    {penc = 'green'}
  
  if (mouseIsPressed && mouseY<50 && mouseX > 100 && mouseX < 150)
    {penc = 'blue'}
  
  if (mouseIsPressed && mouseY<50 && mouseX > 150 && mouseX < 200)
    {penc = 'black'}
  
  if (mouseIsPressed && mouseY<50 && mouseX > 200 && mouseX < 250)
    {penc = 'yellow'}
  
  if (mouseIsPressed && mouseY<50 && mouseX > 250 && mouseX < 350)
    {outline = (false)}
  
  if (mouseIsPressed && mouseY<50 && mouseX > 350 && mouseX < 450)
    {outline = (true)}
  
  if (mouseIsPressed && mouseY<50 && mouseX > 450 && mouseX < 500)
    {shape = 'rectangle'}
  
  if (mouseIsPressed && mouseY<50 && mouseX > 500 && mouseX < 550)
    {shape = 'triangle'}
  
  if (mouseIsPressed && mouseY<50 && mouseX > 550 && mouseX < 600)
    {shape = 'line'}
  
  //these are my key functions for clearing the screen and changing the thickness!
  if (keyIsPressed) {if (key == 'c'){background(220)}
                     if (key == '1'){penw = 1}
                     if (key == '2'){penw = 4}
                     if (key == '3'){penw = 10}
                     if (key == '4'){penw = 20}
                     if (key == '5'){penw = 50}
                    }
  
  //this is the function for drawing
  if (mouseIsPressed && outline == true){
    if (shape == 'line'){
  stroke(penc)
  strokeWeight(penw)
  line(pmouseX,pmouseY,mouseX,mouseY)}
    else {if (shape == 'rectangle'){fill(penc)
                                   rect(mouseX,mouseY,55)
      
    }
          else{fill(penc)
               triangle(mouseX,mouseY,mouseX+50,mouseY-90,mouseX+100,mouseY)
               
            
          }
         }
  }
    
  
  
  //this is the function for my eraser
  if (mouseIsPressed && outline == false){
  stroke(220)
  strokeWeight(penw)
  line(pmouseX,pmouseY,mouseX,mouseY)}
}