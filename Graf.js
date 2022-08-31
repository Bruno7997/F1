class Graf {
    constructor(A,B) {
        
        Perg.delete()
        this.g=[]
        this.i=1;this.ii=1;this.c;this.a;this.b
        if(A<0){this.a=-A}else{this.a=A}
        if(B<0){this.b=-B}else{this.b=B}
        this.a=this.a*2;this.b=this.b*2
        this.c=this.a*this.b
        for(this.i;this.i<=(this.c);this.ii++){
           createSprite((windowWidth/this.a),(windowHeight/this.b))
           if(this.ii>this.b){this.ii=0;this.i+=1;console.log("a")}
        }
    }
  
 
  
  }