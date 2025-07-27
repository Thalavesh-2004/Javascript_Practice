const min=1;
const max=6;
const mybutton=document.getElementById("mybutton");
const para1=document.getElementById("para1");
const para2=document.getElementById("para2");
const para3=document.getElementById("para3");
mybutton.onclick=function(){
let x=Math.floor(Math.random()*(max-min+1))+min;
let y=Math.floor(Math.random()*(max-min+1))+min;
let z=Math.floor(Math.random()*(max-min+1))+min;
para1.textContent=x;
para2.textContent=y;
para3.textContent=z;
}



//this generates nos from 50 to 99 both inclusive
//Math.floor(Math.random())*x) generates a no from 0 to x-1