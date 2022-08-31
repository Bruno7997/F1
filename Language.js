class l {
    constructor() {
RealButton.hide()
RespButton.hide()
EnterButton.hide()
ChooseButton.hide()
InteiroButton.hide()
LButton.hide()

        Perg.delete()
//Português
this.button1 = createButton("Português")
this.button1.position(windowWidth/2 - windowWidth/8, (windowHeight/4)*2);
this.button1.size(windowWidth/5,windowHeight/10)
this.button1.class("customButton");
//Inglês
this.button2 = createButton("Inglês")
this.button2.position(windowWidth/2 - windowWidth/8, (windowHeight/4)*3);
this.button2.size(windowWidth/5,windowHeight/10)
this.button2.class("customButton");

this.button1.mousePressed(() => {idioma=1;this.destroy()})
    this.button2.mousePressed(() => {idioma=2;this.destroy()})

    }
    destroy(){
        L=0
        this.button1.remove()
        this.button2.remove()
        a=0
        Button=0;setup();preload()
    }
  
  
  
  }
  