{/* <p id="display">00:00:00</p>
        <div class="buttons">
             <button id="startbtn">Start</button>
            <button id="stopbtn">Stop</button>
            <button id="resetbtn">Reset</button> */}

const display=document.getElementById("display");
const start=document.getElementById("startbtn");
const stop=document.getElementById("stopbtn");
const reset=document.getElementById("resetbtn");
    const currtime=new Date();
 let currhrs=currtime.getHours();
  let currmins=currtime.getMinutes();
   let currs=currtime.getSeconds();
    let currms=currtime.getMilliseconds();
    let timer;
    let starttime=0;
    let timeelapsed=0;
    let running=false;


start.onclick=function(){

    if(running===false){
        starttime=Date.now()-timeelapsed;
        timer=setInterval(()=>{
            timeelapsed=Date.now()-starttime;
            display.textContent=`${Math.floor(timeelapsed/(1000*60*60)).toString().padStart(2,0)}:${Math.floor(timeelapsed/(1000*60)%60).toString().padStart(2,0)}:${Math.floor((timeelapsed/1000)%60).toString().padStart(2,0)}:${Math.floor((timeelapsed%100)).toString().padStart(2,0)}`;
        },1);
        running=true;

    }
}
stop.onclick=function(){
    clearInterval(timer);
    running=false;
}
reset.onclick=function(){
    if(running===false){
        starttime=0;
     timeelapsed=0;
    display.textContent=`00:00:00:00`;
    }
     
}
