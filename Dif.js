class Dif {
    constructor() {
        Perg.delete()
        this.ok1=0;this.ok2=0;this.ok3=0
  this.inputX = createInput("").attribute("placeholder", "X e Y");
  this.inputX.size(windowWidth/3, windowHeight/16)
  this.inputX.style('font-size', (windowWidth/11-windowHeight/8)+'px')
  this.inputX.position(windowWidth/2 - this.inputX.width/2, windowHeight/2 - this.inputX.height);
  this.inputX.class("customInput");
  
  this.inputA = createInput("").attribute("placeholder", "A");
  this.inputA.size(windowWidth/3, windowHeight/16)
  this.inputA.style('font-size', (windowWidth/11-windowHeight/8)+'px')
  this.inputA.position(windowWidth/2 - this.inputA.width/2, windowHeight/2);
  this.inputA.class("customInput");

  this.inputB = createInput("").attribute("placeholder", "B");
  this.inputB.size(windowWidth/3, windowHeight/16)
  this.inputB.style('font-size', (windowWidth/11-windowHeight/8)+'px')
  this.inputB.position(windowWidth/2 - this.inputB.width/2, windowHeight/2 + this.inputB.height);
  this.inputB.class("customInput");
  //if(P.length>=70){P.replace(71, 1, "\n" )}
  this.greeting = createElement("h2");
  if(idioma==1){this.greeting.html("Escreva um valor maximo positivo para X/Y, A, e B. <br/>Obs:Esse mesmo valor mas negativo sera usado como minimo")}
  if(idioma==2){this.greeting.html("  Write a maximum positive value for X/Y, A, and B. <br/>Note: This same but negative value will be used as a minimum")}
  this.greeting.position(20, windowHeight/4 - windowHeight/5);
  this.greeting.size(windowWidth, windowHeight/16)
  this.greeting.class("greeting");
    }
  
  read(){
    if(this.ok1==0&&this.inputX.value() >= 0){maxX = this.inputX.value(); minX = -maxX;this.inputX.remove(); this.ok1+=1}
    else{this.inputX.value("")}
    if(this.ok2==0&&this.inputA.value() >= 0){maxA = this.inputA.value(); minA = -maxA;this.inputA.remove(); this.ok2+=1}
    else{this.inputA.value("")}
    if(this.ok3==0&&this.inputB.value() >= 0){maxB = this.inputB.value(); minB = -maxB;this.inputB.remove(); this.ok3+=1}
    else{this.inputB.value("")}
    if((this.ok1+this.ok2+this.ok3)==3){
        a=0
        this.ok1=0;this.ok2=0;this.ok3=0
        this.greeting.remove()
        preload()
        D=0
    }
      
    }
  
  }
  