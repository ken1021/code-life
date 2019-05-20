
document.getElementById("btn").addEventListener("click",load)

function load(){


var x = 1
var time= setInterval(getpic,300)

function getpic(){
if(x<35){document.getElementById("a"+x).style ="background-image:url(../image/a"+x+".jpg);background-size:100% 100%;background-repeat:no-repeat;border:2px solid white"
x++
}
else{
    clearInterval(time);
}
}

var div
function pic(x){

div= document.getElementById("a"+x).addEventListener("mouseover",a)

    function a(){document.getElementById("a1pic").style="background-image:url(image/a"+x+".jpg);background-size:cover;background-repeat:no-repeat;background-position:center; border:2px solid white;border-radius:15px;"}
}

for (i=1;i<35;i++){
    pic(i)
}
}

