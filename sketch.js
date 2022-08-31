var canvas=0
var Resp,Resp2, Y, X,X2,X3, A,A2, B,B2, Func,Func11,Func2,Func3, Calc,Calc2,Calc3,ZDF=[], a=0,n=0
var modo = []
var Button = 0
var f1, f2, I1, I2
modo.push("Crescente")
modo.push("Decrescente")
modo.push("Constante")
modo.push("Linear")
modo.push("Identidade")
var Pergs = [],Perg, G
var EnterButton,RealButton,InteiroButton, ChooseButton,RespButton,RespEsc, D=0,LButton, L=0
var maxX=50, maxA=50, maxB=500, minX=-maxX, minA=-maxA, minB=-maxB
var Aa=0, Bb=0
var idioma = 1
function preload(){ 
    
    if(a==0){X=Math.round(random(minX,maxX));X2=Math.round(random(minX,maxX));Y=Math.round(random(minX,maxX)); for(X3=X2;X3!=X2;X3=Math.round(random(minX,maxX)));}
    if(n==1&&a==0){LDF(random(minA,maxA),random(minB,maxB),random(minA,maxA),random(minB,maxB),Math.round(random(0,5)),Math.round(random(0,5)));for(X3=X2;!(X3==X2);X3=random(minX,maxX));}
    if(n==0&&a==0){LDF(Math.round(random(minA,maxA)),Math.round(random(minB,maxB)),Math.round(random(minA,maxA)),Math.round(random(minB,maxB)),Math.round(random(0,5)),Math.round(random(0,5)))}
    S=Math.round(random(1,4));if(S==1){S="+"};if(S==2){S="-"};if(S==3){S="*"};if(S==4){S="/"};
    if(idioma==1){
    /*0*/Pergs.push("Qual o zero da função? (Obs: Utiliza ponto ( . ) se decimal)")
    /*1*/Pergs.push("Essa função é?(Linear,Identidade,Crescente,Decrescente ou Constante)")
    /*2*/Pergs.push("Se a lei de formação for igual a "+Func+", qual sera o valor de X quando Y for "+Y+"?")
    /*3*/Pergs.push("Se a lei de formação for igual a "+Func+", qual sera o valor de Y quando X for "+X+"?")
    /*4*/Pergs.push("Se f1(x) = "+Func+", e f2(x) = "+Func2+". Quanto é f1("+X+") "+S+" f2("+X2+")?") 
    /*5*/Pergs.push("Se f1(x) = "+Func+", e f2(x) = "+Func2+". Quanto é ( f1("+X+") + f2("+X2+") ) / 2?") 
    switch(f1){case(0):Func3=A+"x + "+B;Calc3= (A * X3) + B;break;case(1):Func3=A+"x - "+B;Calc3= (A* X3) - B;break;;case(2):Func3=B+" - "+A+"x";Calc3= B - (A * X3);break;case(3):Func3=B+" + "+A+"x";Calc3= B + (A * X3);break;case(4):Func3= A+"x * "+B;Calc3=(A*X3)*B;break;case(5):Func3= B+" * "+A+"x";Calc3=B*(A*X3);break}
    /*6*/Pergs.push("Se a lei de formação for "+Func11+", F("+X+") = "+Calc+" e F("+X3+") = "+Calc3+". Quanto vale A? E B?")
    //for(;Aa==0;Aa=Math.round(random(-2,2)))
    //for(;Bb==0;Bb=Math.round(random(-2,2)))
    Aa=1;Bb=1
    /*7*/Pergs.push("Se A = "+Aa+" e B = "+Bb+" então escreva os pares ordenados de ")
    }
    if(idioma==2){
        /*0*/Pergs.push("What is the zero of the function? (Note: Use dot ( . ) if decimal)")
        /*1*/Pergs.push("This function is? (Linear, Identity, Increasing, Decreasing or Constant)")
        /*2*/Pergs.push("If the law of formation is equal to "+Func+", what will be the value of X when Y is "+Y+"?")
        /*3*/Pergs.push("If the law of formation is equal to "+Func+", what will be the value of X when Y is "+X+"?")
        /*4*/Pergs.push("If f1(x) = "+Func+", and f2(x) = "+Func2+". How much is("+X+") "+S+" f2("+X2+")?") 
        /*5*/Pergs.push("If f1(x) = "+Func+", and f2(x) = "+Func2+". How much is ( f1("+X+") + f2("+X2+") ) / 2?") 
        switch(f1){case(0):Func3=A+"x + "+B;Calc3= (A * X3) + B;break;case(1):Func3=A+"x - "+B;Calc3= (A* X3) - B;break;;case(2):Func3=B+" - "+A+"x";Calc3= B - (A * X3);break;case(3):Func3=B+" + "+A+"x";Calc3= B + (A * X3);break;case(4):Func3= A+"x * "+B;Calc3=(A*X3)*B;break;case(5):Func3= B+" * "+A+"x";Calc3=B*(A*X3);break}
        /*6*/Pergs.push("If the law of formation is equal to "+Func11+", F("+X+") = "+Calc+" e F("+X3+") = "+Calc3+". How much is A? E B?")

        }

if(a==0){Pergunta(Math.round(random(2,6)))}
else if(a==1||a==0.5||a==0.75){Pergunta(0)}
else{Pergunta(1)}
}

function setup() {
if(canvas!=1){createCanvas(windowWidth, windowHeight);canvas=1}
    if(Button == 0){
        if(idioma==1){LButton = createButton("Idioma");LButton.position(windowWidth/2+LButton.width*2, 0);LButton.size(windowWidth/5,windowHeight/10);LButton.class("customButton");}
else if (idioma==2){LButton = createButton("Language");LButton.position(windowWidth/2+LButton.width*2, 0);LButton.size(windowWidth/5,windowHeight/10);LButton.class("customButton");}
    if(idioma==1){ChooseButton = createButton("Escolha")}if(idioma==2){ChooseButton = createButton("Choice")}
    ChooseButton.position(windowWidth/2-ChooseButton.width, 0);
    ChooseButton.size(windowWidth/5,windowHeight/10)
    ChooseButton.class("customButton");

    if(idioma==1){EnterButton = createButton("Enter")}if(idioma==2){EnterButton = createButton("Enter")}
    EnterButton.position(windowWidth/2 + windowWidth/3/2, windowHeight/2 -  windowHeight/16/2);
    EnterButton.size(windowWidth/5,windowHeight/10)
    EnterButton.class("customButton");

    if(idioma==1){RealButton = createButton("Real")}if(idioma==2){RealButton = createButton("Real")}
    RealButton.position(windowWidth/2+windowWidth/3, windowHeight/2-windowHeight/2 );
    RealButton.size(windowWidth/5,windowHeight/10)
    RealButton.class("customButton");

    if(idioma==1){InteiroButton = createButton("Inteiro")}if(idioma==2){InteiroButton = createButton("Integer")}
    InteiroButton.position(windowWidth/2-windowWidth/2, windowHeight/2-windowHeight/2 );
    InteiroButton.size(windowWidth/5,windowHeight/10)
    InteiroButton.class("customButton");

    if(idioma==1){RespButton = createButton("Resposta")}if(idioma==2){RespButton = createButton("Answer")}
    RespButton.position(windowWidth/2-windowWidth/2.5 + InteiroButton.width/2, windowHeight/2-windowHeight/2 )
    RespButton.size(windowWidth/5,windowHeight/10)
    RespButton.class("customButton");

   Button = 1}
    handleMousePressed()
    if(G==7){
        G=new Graf(Aa,Bb)
        Pergunta(7)
        RespButton.hide()
        InteiroButton.hide()
        RealButton.hide()
        EnterButton.hide()
        ChooseButton.hide()
    }
    }

function draw() {
background(100)


drawSprites()
}

function LDF(a,b,a2,b2,F,F2){
    a=a.toFixed(2);b=b.toFixed(2);a=Number(a);b=Number(b);a2=a2.toFixed(2);b2=b2.toFixed(2);a2=Number(a2);b2=Number(b2)
    for(var i = 0; i < 5; i++){
        if(Math.round(random(1,4)) == 1){
            if(i==4&&X<=50&&X>=-50){X=X*X}
            if(i==5&&X2<=50&&X2>=-50){X2=X2*X2}
        }
    }
    
    A=a;B=b;A2=a2;B2=b2
f1=F;f2=F2
    
    //
    switch(F){
    case(-1):;break;
    case(0):Func=a+"x + "+b;Calc= (a * X) + b;Func11="ax + b";break;
    case(1):Func=a+"x - "+b;Calc= (a * X) - b;Func11="ax - b";break;

    case(2):Func=b+" - "+a+"x";Calc= b - (a * X);Func11="b - ax";break
    case(3):Func=b+" + "+a+"x";Calc= b + (a * X);Func11="b + ax";break

case(4):Func= a+"x * "+b;Calc=(a*X)*b;Func11="ax * b";break
case(5):Func= b+" * "+a+"x";Calc=b*(a*X);Func11="b * ax";break}

switch(F2){
case(-1):;break;
case(0):Func2=a2+"x + "+b2;Calc2= (a2 * X2) + b2;break;
case(1):Func2=a2+"x - "+b2;Calc2= (a2 * X2) - b2;break;

case(2):Func2=b2+" - "+a2+"x";Calc2= b2 - (a2 * X2);break
case(3):Func2=b2+" + "+a2+"x";Calc2= b2 + (a2 * X2);break

case(4):Func2= a2+"x * "+b2;Calc2=(a2*X2)*b2;break
case(5):Func2= b2+" * "+a2+"x";Calc2=b2*(a2*X2);break}

ZDF[0]=-b/a
ZDF[1]=-b+"/"+a
ZDF[2]=-b2/a2
ZDF[3]=-b2+"/"+a2
}
function Pergunta(p){
switch(p){
        case(0):
        if(a==0.5){Perg = new Form(Pergs[0]+" (f2)"); a+=0.25
            Resp=ZDF[2];Resp2=ZDF[3]}

        else if(a==0.75){Perg = new Form(Pergs[1]+" (f2)");a+=0.25
        if(f2==2){A2=-A2}
            if(A2>0&&!(A2==1&&B2==0)){Resp=modo[0];Resp2=Resp}
            if(A2<0){Resp=modo[1];Resp2=Resp}
            if(A2==0){Resp=modo[2];Resp2=Resp}
            if(B2==0&&A2!=1){Resp=modo[3];Resp2=Resp}
            if(A2==1&&B2==0){Resp=modo[4];Resp2=Resp}
            if(f2==2){A2=-A2}}

        else if(a==1){
        Perg = new Form(Pergs[0]); a+=1
        Resp=ZDF[0];Resp2=ZDF[1]}
        break;

        case(1):
        Perg = new Form(Pergs[1]);a=0
        if(f1==2){A=-A}
        if(A>0&&!(A==1&&B==0)){Resp=modo[0];Resp2=Resp}
        if(A<0){Resp=modo[1];Resp2=Resp}
        if(A==0){Resp=modo[2];Resp2=Resp}
        if(B==0&&A!=1){Resp=modo[3];Resp2=Resp}
        if(A==1&&B==0){Resp=modo[4];Resp2=Resp}
        if(f1==2){A=-A}
        break;


        case(2): Perg = new Form(Pergs[2]); a+=1; Calc= (Y - B) / A
        Resp=Calc;Resp2=(Y-B)+"/"+A
        break;

        case(3): Perg = new Form(Pergs[3]); a+=1
        Resp=Calc;Resp2=Resp
        break;

        case(4): Perg = new Form(Pergs[4]); a+=0.5
        if(S=="+"){Resp=Calc+Calc2};if(S=="-"){Resp=Calc-Calc2};if(S=="*"){Resp=Calc*Calc2};if(S=="/"){Resp=Calc/Calc2};
        ;Resp2=Calc+S+Calc2
        break;
case(5): Perg = new Form(Pergs[5]);a+=0.5
Resp=(Calc+Calc2)/2; Resp2=(Calc+Calc2)+"/2"
break;
        case(6):
        if(f1!=4&&f1!=5){Perg = new Form(Pergs[6]);Perg.input.remove();a+=1
I1 = createInput("").attribute("placeholder", "A");I2 = createInput("").attribute("placeholder", "B");
I1.size(windowWidth/6, windowHeight/16);I2.size(windowWidth/6, windowHeight/16)
I1.style('font-size', (windowWidth/11-windowHeight/8)+'px');I2.style('font-size', (windowWidth/11-windowHeight/8)+'px')
I1.position(windowWidth/2 - I1.width*1.5, windowHeight/2 - I1.height/2);I2.position(windowWidth/2 - I2.width/3, windowHeight/2 - I2.height/2);
I1.class("customInput");I2.class("customInput");
Resp=A+" "+B;Resp2=Resp
        }
        else{Pergunta(Math.round(random(2,6)))}
        break;
        case(7):
        if(G==undefined){
            Perg=new Form(" ")
            G=7
        }

        break
    }
}
function handleMousePressed() {
    LButton.mousePressed(()=>{L = new l()})
RespButton.mousePressed(() => {RespEsc = createElement("h2");if(Resp2==Resp){RespEsc.html(Resp2)}else{RespEsc.html(Resp2+" ou "+Resp)};RespEsc.position(20, windowHeight/4 - windowHeight/8);;RespEsc.class("greeting")})
ChooseButton.mousePressed(() => {D = new Dif()})
RealButton.mousePressed(() => {if(n==0){;background(200);n=1;a=0;Perg.input.remove();Perg.greeting.remove();Pergs=[];preload()}})
InteiroButton.mousePressed(() => {if(n==1){;background(200);n=0;a=0;Perg.input.remove();Perg.greeting.remove();Pergs=[];preload()}})
EnterButton.mousePressed(() => {if(D==0){Perg.read()} else{D.read()}})

    }
    