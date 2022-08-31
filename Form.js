class Form {
  constructor(P) {
this.input = createInput("").attribute("placeholder", "Digite a sua resposta");
this.input.size(windowWidth/3, windowHeight/16)
this.input.style('font-size', (windowWidth/11-windowHeight/8)+'px')
this.input.position(windowWidth/2 - this.input.width/2, windowHeight/2 - this.input.height/2);
this.input.class("customInput");
//if(P.length>=70){P.replace(71, 1, "\n" )}
this.greeting = createElement("h2");
this.greeting.html(P);
this.greeting.position(20, windowHeight/4 - windowHeight/16);
this.greeting.class("greeting");


  }

read(){
  if(this.input.value()==Resp||this.input.value()==Resp2||(I1!=undefined && I1.value()+" "+I2.value()==Resp)){
this.delete()
    preload()
  }
  else{this.input.value("");if(I1!=undefined){I1.value("");I2.value("")}}
}
delete(){
  this.input.remove()
  if(I1!=undefined){I1.remove();I2.remove()}
  if(RespEsc!=undefined){RespEsc.remove()}
  this.greeting.remove()
      Pergs=[]
}

}
