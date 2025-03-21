const sidebar = document.getElementById("sidebar");
const resizer = document.getElementById("resizer");
let x, w;
function msDown (e){
   
    x = e.clientX;
    let countWidth = window.getComputedStyle(sidebar).width;
//    w = sidebar.offsetWidth;
    
    w = parseInt(countWidth);
  
    document.addEventListener("mousemove", msMove);
    document.addEventListener("mouseup", msUp);
   
}

function msMove(e){
    let mx = e.clientX - x;
    let newW = w + mx;
    if(newW > 200 && newW < 700){
        sidebar.style.width = newW + "px";
    }
   
 }
 
 function msUp(){
   document.removeEventListener("mousemove", msMove);
   document.removeEventListener("mouseup", msUp);
 }

resizer.addEventListener("mousedown", msDown)
