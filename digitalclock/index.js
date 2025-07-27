function updateClock(){
    const now=new Date();
    const hour=now.getHours().toString().padStart(2,0);
    const min=now.getMinutes().toString().padStart(2,0);
    const sec=now.getSeconds().toString().padStart(2,0);
    const str=`${hour}:${min}:${sec}`;
    document.getElementById("clock").textContent=str;

}
updateClock();
setInterval(updateClock,10);