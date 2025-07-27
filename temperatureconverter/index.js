const userinput=document.getElementById("userinput");
const cf=document.getElementById("cf");
const fc=document.getElementById("fc");
const submitbtn=document.getElementById("submitbtn");
const finaltemp=document.getElementById("finaltemp");

submitbtn.onclick=function(){

    let x=userinput.value;
    x=Number(x);
    if(isNaN(x)||userinput.value===""){
        window.alert("Enter valid temperature!");
    }
    else if(cf.checked){
        x=9/5*x+32;
        finaltemp.textContent=x.toFixed(2)+" Deg F";

    }
    else if(fc.checked){
        x=5/9*(x-32);
         finaltemp.textContent=x.toFixed(2)+" Deg C";
    }
    else{
        window.alert("Choose Atleast one option!!")
    }

}