var fp,fs,sb,vwa;
var w1;
var deform1,deform2,deform3,deform4;
var weight1,weight2,weight3,weight4;
var speed1,speed2,speed3,speed4;

function setup() {
  createCanvas(800,400);
 fp=createSprite(100,50,50, 50);
 fs=createSprite(100,100,50,50);
 sb=createSprite(100,150,50,50);
 vwa=createSprite(100,200,50,50);
 w1=createSprite(750,400,20,400);
 weight1=1.5;
 weight2=2.0;
 weight3=1.7;
 weight4=1.0;
 speed1=100;
 speed2=100;
 speed3=120;
 speed4=140;
}

function draw() {
  background(255,255,255);  

 if(w1.x-fp.x<(w1.width+fp.width)/2){
var deform1=0.5*weight1*speed*speed/22509;
 fp.VelocityX=0;
if(deform1>180){
fp.shapecolour=colour(255,0,0);
}

if(deform1<180 && deform1>100){
  fp.shapecolour=colour(230,230,0);
}

if(deform1<100){
  fp.shapecolour=colour(0,255,0);
}
 }

 if(w1.x-fs.x<(w1.width+fs.width)/2){
  var deform2=0.5*weight2*speed*speed/22509;
  fs.VelocityX=0;
  if(deform2>180){
  fs.shapecolour=colour(255,0,0);
  }
  
  if(deform2<180 && deform1>100){
    fs.shapecolour=colour(230,230,0);
  }
  
  if(deform2<100){
    fs.shapecolour=colour(0,255,0);
  }
   }  

   if(w1.x-sb.x<(w1.width+sb.width)/2){
    var deform3=0.5*weight1*speed*speed/22509;
    sb.VelocityX=0;
    if(deform3>180){
    fp.shapecolour=colour(255,0,0);
    }
    
    if(deform3<180 && deform1>100){
      fp.shapecolour=colour(230,230,0);
    }
    
    if(deform3<100){
      fp.shapecolour=colour(0,255,0);
    }
     }
    
     if(w1.x-vwa.x<(w1.width+vwa.width)/2){
      var deform4=0.5*weight1*speed*speed/22509;
      vwa.VelocityX=0;
      if(deform4>180){
      vwa.shapecolour=colour(255,0,0);
      }
      
      if(deform4<180 && deform1>100){
        vwa.shapecolour=colour(230,230,0);
      }
      
      if(deform4<100){
        vwa.shapecolour=colour(0,255,0);
      }
       }
      




  drawSprites();
}