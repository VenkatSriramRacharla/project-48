var WrongAns1= true
var WrongAns2= true
var WrongAns3= true
var RightAns= true
var score = 0

function setup(){
  
  createCanvas(1250,550)    
  background("cyan")    
      
  push()    
  textSize(115)    
  fill("black")    
  textStyle(BOLD)    
  text("Test Your Knowledge", 50, 175)    
  pop()    
      
  fill("black")    
  textSize(25)    
  text("Enter Your Name: ", 400, 300)

  login = createInput("");
  login.style('color', 'black')
  login.position(615, 282, 20, 20)

  button = createButton("SUBMIT")
  button.style('background-color', 'orange')
  button.style('font-size', '26px')
  button.style('color', 'white')
  button.position(550, 350, 40, 40)
  
  button.mousePressed(()=>{
  name1 = login.value();
  if(name1 == ""){
    text("Name can't be blank",550,416)
    return false;
  } else{
      button.mouseClicked(logic)
  }
  })
  

}

function preload(){
  RightAnsSound = loadSound("assets/RightAns.mp3")
  WrongAnsSound = loadSound("assets/WrongAns.mp3")
  Question1Background = loadImage("assets/US FLAG.webp")
  Question2Background = loadImage("assets/Floor plan.jpeg")
}



function logic(){
  background("cyan")
  login.hide()
  button.hide()
  user = login.value()
  greeting = createElement("h1")
  greeting.html("Hello " + user + "!")
  greeting.position(575, 250)

  push()
  textSize(115)
  fill("black")
  textStyle(BOLD)
  text("Test Your Knowledge", 50, 175)
  pop()

  button1 = createButton("TEST YOU KNOWLEDGE")
  button1.style('background-color', 'orange')
  button1.style('font-size', '26px')
  button1.style('color', 'white')
  button1.position(500, 350, 40, 40)

 button1.mouseClicked(Question1)
}










function Question1(){
  background(Question1Background)
  login.hide()
  button.hide()
  button1.hide()
  greeting.hide()

  Q1 = createElement("h1")
  Q1.html("Q1. Who is the President of U.S.A?")
  Q1.style("color", "black")
  Q1.style("background-color", "cyan")
  Q1.position(50, 175)

  Q1A = createButton("A: Donald Trump")
  Q1A.style("color", "black")
  Q1A.style("background-color", "white")
  Q1A.position(50,250)
  Q1A.style("font-size", "24px")
  Q1A.mousePressed(Q1Option1Ans)

  Q1B = createButton("B: Kamala Harris")
  Q1B.style("color", "black")
  Q1B.style("background-color", "white")
  Q1B.position(50,300)
  Q1B.style("font-size", "24px")
  Q1B.mousePressed(Q1Option2Ans)

  Q1C = createButton("C: Mike Pence")
  Q1C.style("color", "black")
  Q1C.style("background-color", "white")
  Q1C.position(50,350)
  Q1C.style("font-size", "24px")
  Q1C.mousePressed(Q1Option3Ans)

  Q1D = createButton("D: Joe Biden")
  Q1D.style("color", "black")
  Q1D.style("background-color", "white")
  Q1D.position(50,400)
  Q1D.style("font-size", "24px")
  Q1D.mousePressed(Q1Option4Ans)

  nextButton = createButton("NEXT")
  nextButton.style("color", "black")
  nextButton.style("background-color", "orange")
  nextButton.style("font-size", "24px")
  nextButton.position(1000, 500)
  nextButton.mousePressed(Question2)

}
 function Q1Option1Ans(){
   Q1A.style("background-color", "red")
   Q1D.style("background-color", "green")
   WrongAnsSound.play()

   Q1A.attribute('disabled', '')
   Q1B.attribute('disabled', '')
   Q1C.attribute('disabled', '')
   Q1D.attribute('disabled', '')

   WrongAns1 = createElement("h1")
   WrongAns1.html("Wrong Answer")
   WrongAns1.style("color", "red")
   WrongAns1.style("background-color", "cyan")
   WrongAns1.position(50, 450)


 }

 function Q1Option2Ans(){
  Q1B.style("background-color", "red")
  Q1D.style("background-color", "green")
  WrongAnsSound.play()

  Q1A.attribute('disabled', '')
  Q1B.attribute('disabled', '')
  Q1C.attribute('disabled', '')
  Q1D.attribute('disabled', '')

  WrongAns2 = createElement("h1")
  WrongAns2.html("Wrong Answer")
  WrongAns2.style("color", "red")
  WrongAns2.style("background-color", "cyan")
  WrongAns2.position(50, 450)
}

function Q1Option3Ans(){
  Q1C.style("background-color", "red")
  Q1D.style("background-color", "green")
  WrongAnsSound.play()

  Q1A.attribute('disabled', '')
  Q1B.attribute('disabled', '')
  Q1C.attribute('disabled', '')
  Q1D.attribute('disabled', '')

  WrongAns3 = createElement("h1")
  WrongAns3.html("Wrong Answer")
  WrongAns3.style("color", "red")
  WrongAns3.style("background-color", "cyan")
  WrongAns3.position(50, 450)
}

function Q1Option4Ans(){
  Q1D.style("background-color", "green")
  RightAnsSound.play()

  Q1A.attribute('disabled', '')
  Q1B.attribute('disabled', '')
  Q1C.attribute('disabled', '')
  Q1D.attribute('disabled', '')

  RightAns = createElement("h1")
  RightAns.html("Right Answer")
  RightAns.style("color", "green")
  RightAns.style("background-color", "cyan")
  RightAns.position(50, 450)
  
  score += 1
}













function Question2(){
  background(Question2Background)
  login.hide()
  button.hide()
  button1.hide()
  greeting.hide()

  Q1.hide()
  Q1A.hide()
  Q1B.hide()
  Q1C.hide()
  Q1D.hide()

  nextButton.hide()
  
  if(WrongAns1.show ){
    WrongAns1.hide();
  }
  if(WrongAns2.show){
    WrongAns2.hide();
  }
  if(WrongAns3.show ){
    WrongAns3.hide();
  }
  if(RightAns.show ){
    RightAns.hide();
  }


  Q2 = createElement("h1")
  Q2.html("Q2. Who designs a construction plan?")
  Q2.style("color", "black")
  Q2.style("background-color", "cyan")
  Q2.position(50, 175)

  Q2A = createButton("A: Civil Engineer")
  Q2A.style("color", "black")
  Q2A.style("background-color", "white")
  Q2A.position(50,250)
  Q2A.style("font-size", "24px")
  Q2A.mousePressed(Q2Option1Ans)

  Q2B = createButton("B: Plumber")
  Q2B.style("color", "black")
  Q2B.style("background-color", "white")
  Q2B.position(50,300)
  Q2B.style("font-size", "24px")
  Q2B.mousePressed(Q2Option2Ans)

  Q2C = createButton("C: Boxer")
  Q2C.style("color", "black")
  Q2C.style("background-color", "white")
  Q2C.position(50,350)
  Q2C.style("font-size", "24px")
  Q2C.mousePressed(Q2Option3Ans)

  Q2D = createButton("D: Architect")
  Q2D.style("color", "black")
  Q2D.style("background-color", "white")
  Q2D.position(50,400)
  Q2D.style("font-size", "24px")
  Q2D.mousePressed(Q2Option4Ans)

  nextButton = createButton("NEXT")
  nextButton.style("color", "black")
  nextButton.style("background-color", "orange")
  nextButton.style("font-size", "24px")
  nextButton.position(1000, 500)
  nextButton.mousePressed(Question3)

}
 




function Q2Option1Ans(){
   Q2A.style("background-color", "red")
   Q2D.style("background-color", "green")

   Q2A.attribute('disabled', '')
   Q2B.attribute('disabled', '')
   Q2C.attribute('disabled', '')
   Q2D.attribute('disabled', '')

   WrongAns1 = createElement("h1")
   WrongAns1.html("Wrong Answer")
   WrongAns1.style("color", "red")
   WrongAns1.style("background-color", "cyan")
   WrongAns1.position(50, 450)


 }

 function Q2Option2Ans(){
  Q2B.style("background-color", "red")
  Q2D.style("background-color", "green")

  Q2A.attribute('disabled', '')
  Q2B.attribute('disabled', '')
  Q2C.attribute('disabled', '')
  Q2D.attribute('disabled', '')

  WrongAns2 = createElement("h1")
  WrongAns2.html("Wrong Answer")
  WrongAns2.style("color", "red")
  WrongAns2.style("background-color", "cyan")
  WrongAns2.position(50, 450)
}

function Q2Option3Ans(){
  Q2C.style("background-color", "red")
  Q2D.style("background-color", "green")

  Q2A.attribute('disabled', '')
  Q2B.attribute('disabled', '')
  Q2C.attribute('disabled', '')
  Q2D.attribute('disabled', '')

  WrongAns3 = createElement("h1")
  WrongAns3.html("Wrong Answer")
  WrongAns3.style("color", "red")
  WrongAns3.style("background-color", "cyan")
  WrongAns3.position(50, 450)
}

function Q2Option4Ans(){
  Q2D.style("background-color", "green")

  Q2A.attribute('disabled', '')
  Q2B.attribute('disabled', '')
  Q2C.attribute('disabled', '')
  Q2D.attribute('disabled', '')

  RightAns = createElement("h1")
  RightAns.html("Right Answer")
  RightAns.style("color", "green")
  RightAns.style("background-color", "cyan")
  RightAns.position(50, 450)
  
  score += 1
}
















function Question3(){
  background("cyan")
  login.hide()
  button.hide()
  button1.hide()
  greeting.hide()

  Q1.hide()
  Q1A.hide()
  Q1B.hide()
  Q1C.hide()
  Q1D.hide()

  Q2.hide()
  Q2A.hide()
  Q2B.hide()
  Q2C.hide()
  Q2D.hide()

  nextButton.hide()
  
  if(WrongAns1.show ){
    WrongAns1.hide();
  }
  if(WrongAns2.show){
    WrongAns2.hide();
  }
  if(WrongAns3.show ){
    WrongAns3.hide();
  }
  if(RightAns.show ){
    RightAns.hide();
  }


  Q3 = createElement("h1")
  Q3.html("Q3. Which job is about making food?")
  Q3.style("color", "black")
  Q3.style("background-color", "cyan")
  Q3.position(50, 175)

  Q3A = createButton("A: Restaurant Manager")
  Q3A.style("color", "black")
  Q3A.style("background-color", "white")
  Q3A.position(50,250)
  Q3A.style("font-size", "24px")
  Q3A.mousePressed(Q3Option1Ans)

  Q3B = createButton("B: Dentist")
  Q3B.style("color", "black")
  Q3B.style("background-color", "white")
  Q3B.position(50,300)
  Q3B.style("font-size", "24px")
  Q3B.mousePressed(Q3Option2Ans)

  Q3C = createButton("C: Pizza delivery guy")
  Q3C.style("color", "black")
  Q3C.style("background-color", "white")
  Q3C.position(50,350)
  Q3C.style("font-size", "24px")
  Q3C.mousePressed(Q3Option3Ans)

  Q3D = createButton("D: Chef")
  Q3D.style("color", "black")
  Q3D.style("background-color", "white")
  Q3D.position(50,400)
  Q3D.style("font-size", "24px")
  Q3D.mousePressed(Q3Option4Ans)

  nextButton = createButton("NEXT")
  nextButton.style("color", "black")
  nextButton.style("background-color", "orange")
  nextButton.style("font-size", "24px")
  nextButton.position(1000, 500)
  nextButton.mousePressed(Question4)

}
 




function Q3Option1Ans(){
   Q3A.style("background-color", "red")
   Q3D.style("background-color", "green")

   Q3A.attribute('disabled', '')
   Q3B.attribute('disabled', '')
   Q3C.attribute('disabled', '')
   Q3D.attribute('disabled', '')

   WrongAns1 = createElement("h1")
   WrongAns1.html("Wrong Answer")
   WrongAns1.style("color", "red")
   WrongAns1.style("background-color", "cyan")
   WrongAns1.position(50, 450)


 }

 function Q3Option2Ans(){
  Q3B.style("background-color", "red")
  Q3D.style("background-color", "green")

  Q3A.attribute('disabled', '')
  Q3B.attribute('disabled', '')
  Q3C.attribute('disabled', '')
  Q3D.attribute('disabled', '')

  WrongAns2 = createElement("h1")
  WrongAns2.html("Wrong Answer")
  WrongAns2.style("color", "red")
  WrongAns2.style("background-color", "cyan")
  WrongAns2.position(50, 450)
}

function Q3Option3Ans(){
  Q3C.style("background-color", "red")
  Q3D.style("background-color", "green")

  Q3A.attribute('disabled', '')
  Q3B.attribute('disabled', '')
  Q3C.attribute('disabled', '')
  Q3D.attribute('disabled', '')

  WrongAns3 = createElement("h1")
  WrongAns3.html("Wrong Answer")
  WrongAns3.style("color", "red")
  WrongAns3.style("background-color", "cyan")
  WrongAns3.position(50, 450)
}

function Q3Option4Ans(){
  Q3D.style("background-color", "green")

  Q3A.attribute('disabled', '')
  Q3B.attribute('disabled', '')
  Q3C.attribute('disabled', '')
  Q3D.attribute('disabled', '')

  RightAns = createElement("h1")
  RightAns.html("Right Answer")
  RightAns.style("color", "green")
  RightAns.style("background-color", "cyan")
  RightAns.position(50, 450)
  
  score += 1
}








function Question4(){
  background("cyan")
  login.hide()
  button.hide()
  button1.hide()
  greeting.hide()

  Q1.hide()
  Q1A.hide()
  Q1B.hide()
  Q1C.hide()
  Q1D.hide()

  Q2.hide()
  Q2A.hide()
  Q2B.hide()
  Q2C.hide()
  Q2D.hide()

  Q3.hide()
  Q3A.hide()
  Q3B.hide()
  Q3C.hide()
  Q3D.hide()

  nextButton.hide()
  
  if(WrongAns1.show ){
    WrongAns1.hide();
  }
  if(WrongAns2.show){
    WrongAns2.hide();
  }
  if(WrongAns3.show ){
    WrongAns3.hide();
  }
  if(RightAns.show ){
    RightAns.hide();
  }


  Q4 = createElement("h1")
  Q4.html("Q4. Who is the richest person on earth?")
  Q4.style("color", "black")
  Q4.style("background-color", "cyan")
  Q4.position(50, 175)

  Q4A = createButton("A: Bill Gates")
  Q4A.style("color", "black")
  Q4A.style("background-color", "white")
  Q4A.position(50,250)
  Q4A.style("font-size", "24px")
  Q4A.mousePressed(Q4Option1Ans)

  Q4B = createButton("B: Jeff Bezos")
  Q4B.style("color", "black")
  Q4B.style("background-color", "white")
  Q4B.position(50,300)
  Q4B.style("font-size", "24px")
  Q4B.mousePressed(Q4Option2Ans)

  Q4C = createButton("C: Mark Zuckerberg")
  Q4C.style("color", "black")
  Q4C.style("background-color", "white")
  Q4C.position(50,350)
  Q4C.style("font-size", "24px")
  Q4C.mousePressed(Q4Option3Ans)

  Q4D = createButton("D: Elon Musk")
  Q4D.style("color", "black")
  Q4D.style("background-color", "white")
  Q4D.position(50,400)
  Q4D.style("font-size", "24px")
  Q4D.mousePressed(Q4Option4Ans)

  nextButton = createButton("NEXT")
  nextButton.style("color", "black")
  nextButton.style("background-color", "orange")
  nextButton.style("font-size", "24px")
  nextButton.position(1000, 500)
  nextButton.mousePressed(Question5)

}
 




function Q4Option1Ans(){
   Q4A.style("background-color", "red")
   Q4D.style("background-color", "green")

   Q4A.attribute('disabled', '')
   Q4B.attribute('disabled', '')
   Q4C.attribute('disabled', '')
   Q4D.attribute('disabled', '')

   WrongAns1 = createElement("h1")
   WrongAns1.html("Wrong Answer")
   WrongAns1.style("color", "red")
   WrongAns1.style("background-color", "cyan")
   WrongAns1.position(50, 450)


 }

 function Q4Option2Ans(){
  Q4B.style("background-color", "red")
  Q4D.style("background-color", "green")

  Q4A.attribute('disabled', '')
  Q4B.attribute('disabled', '')
  Q4C.attribute('disabled', '')
  Q4D.attribute('disabled', '')

  WrongAns2 = createElement("h1")
  WrongAns2.html("Wrong Answer")
  WrongAns2.style("color", "red")
  WrongAns2.style("background-color", "cyan")
  WrongAns2.position(50, 450)
}

function Q4Option3Ans(){
  Q4C.style("background-color", "red")
  Q4D.style("background-color", "green")

  Q4A.attribute('disabled', '')
  Q4B.attribute('disabled', '')
  Q4C.attribute('disabled', '')
  Q4D.attribute('disabled', '')

  WrongAns3 = createElement("h1")
  WrongAns3.html("Wrong Answer")
  WrongAns3.style("color", "red")
  WrongAns3.style("background-color", "cyan")
  WrongAns3.position(50, 450)
}

function Q4Option4Ans(){
  Q4D.style("background-color", "green")

  Q4A.attribute('disabled', '')
  Q4B.attribute('disabled', '')
  Q4C.attribute('disabled', '')
  Q4D.attribute('disabled', '')

  RightAns = createElement("h1")
  RightAns.html("Right Answer")
  RightAns.style("color", "green")
  RightAns.style("background-color", "cyan")
  RightAns.position(50, 450)
  
  score += 1
}







function Question5(){
  background("cyan")
  login.hide()
  button.hide()
  button1.hide()
  greeting.hide()

  Q1.hide()
  Q1A.hide()
  Q1B.hide()
  Q1C.hide()
  Q1D.hide()

  Q2.hide()
  Q2A.hide()
  Q2B.hide()
  Q2C.hide()
  Q2D.hide()

  Q3.hide()
  Q3A.hide()
  Q3B.hide()
  Q3C.hide()
  Q3D.hide()

  Q4.hide()
  Q4A.hide()
  Q4B.hide()
  Q4C.hide()
  Q4D.hide()

  nextButton.hide()
  
  if(WrongAns1.show ){
    WrongAns1.hide();
  }
  if(WrongAns2.show){
    WrongAns2.hide();
  }
  if(WrongAns3.show ){
    WrongAns3.hide();
  }
  if(RightAns.show ){
    RightAns.hide();
  }


  Q5 = createElement("h1")
  Q5.html("Q5. Who wrote the mangas and the anime called Naruto?")
  Q5.style("color", "black")
  Q5.style("background-color", "cyan")
  Q5.position(50, 175)

  Q5A = createButton("A: J. R. R. Tolkien")
  Q5A.style("color", "black")
  Q5A.style("background-color", "white")
  Q5A.position(50,250)
  Q5A.style("font-size", "24px")
  Q5A.mousePressed(Q5Option1Ans)

  Q5B = createButton("B: J. K. Rowling")
  Q5B.style("color", "black")
  Q5B.style("background-color", "white")
  Q5B.position(50,300)
  Q5B.style("font-size", "24px")
  Q5B.mousePressed(Q5Option2Ans)

  Q5C = createButton("C: Stephen King")
  Q5C.style("color", "black")
  Q5C.style("background-color", "white")
  Q5C.position(50,350)
  Q5C.style("font-size", "24px")
  Q5C.mousePressed(Q5Option3Ans)

  Q5D = createButton("D: Masashi Kishimoto")
  Q5D.style("color", "black")
  Q5D.style("background-color", "white")
  Q5D.position(50,400)
  Q5D.style("font-size", "24px")
  Q5D.mousePressed(Q5Option4Ans)

  nextButton = createButton("NEXT")
  nextButton.style("color", "black")
  nextButton.style("background-color", "orange")
  nextButton.style("font-size", "24px")
  nextButton.position(1000, 500)
  nextButton.mousePressed(lastPage)

}
 




function Q5Option1Ans(){
   Q5A.style("background-color", "red")
   Q5D.style("background-color", "green")

   Q5A.attribute('disabled', '')
   Q5B.attribute('disabled', '')
   Q5C.attribute('disabled', '')
   Q5D.attribute('disabled', '')

   WrongAns1 = createElement("h1")
   WrongAns1.html("Wrong Answer")
   WrongAns1.style("color", "red")
   WrongAns1.style("background-color", "cyan")
   WrongAns1.position(50, 450)


 }

 function Q5Option2Ans(){
  Q5B.style("background-color", "red")
  Q5D.style("background-color", "green")

  Q5A.attribute('disabled', '')
  Q5B.attribute('disabled', '')
  Q5C.attribute('disabled', '')
  Q5D.attribute('disabled', '')

  WrongAns2 = createElement("h1")
  WrongAns2.html("Wrong Answer")
  WrongAns2.style("color", "red")
  WrongAns2.style("background-color", "cyan")
  WrongAns2.position(50, 450)
}

function Q5Option3Ans(){
  Q5C.style("background-color", "red")
  Q5D.style("background-color", "green")

  Q5A.attribute('disabled', '')
  Q5B.attribute('disabled', '')
  Q5C.attribute('disabled', '')
  Q5D.attribute('disabled', '')

  WrongAns3 = createElement("h1")
  WrongAns3.html("Wrong Answer")
  WrongAns3.style("color", "red")
  WrongAns3.style("background-color", "cyan")
  WrongAns3.position(50, 450)
}

function Q5Option4Ans(){
  Q5D.style("background-color", "green")

  Q5A.attribute('disabled', '')
  Q5B.attribute('disabled', '')
  Q5C.attribute('disabled', '')
  Q5D.attribute('disabled', '')

  RightAns = createElement("h1")
  RightAns.html("Right Answer")
  RightAns.style("color", "green")
  RightAns.style("background-color", "cyan")
  RightAns.position(50, 450)
  
  score += 1
}

function lastPage(){
  background("cyan")
  
  login.hide()
  button.hide()
  button1.hide()
  greeting.hide()

  Q5.hide()
  Q5A.hide()
  Q5B.hide()
  Q5C.hide()
  Q5D.hide()

  nextButton.hide()
  
  if(WrongAns1.show ){
    WrongAns1.hide();
  }
  if(WrongAns2.show){
    WrongAns2.hide();
  }
  if(WrongAns3.show ){
    WrongAns3.hide();
  }
  if(RightAns.show ){
    RightAns.hide();
  }
  text("CorrectAnswer: " +score, 100,100)
}