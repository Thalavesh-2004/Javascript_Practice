let counter=0;
document.getElementById("counterdisplay").textContent=counter;
document.getElementById("ibutton").onclick=function(){
    counter++;
    document.getElementById("counterdisplay").textContent=counter;
}
document.getElementById("rbutton").onclick=function(){
    counter=0;
    document.getElementById("counterdisplay").textContent=counter;
}
document.getElementById("dbutton").onclick=function(){
    counter--;
    document.getElementById("counterdisplay").textContent=counter;
}
