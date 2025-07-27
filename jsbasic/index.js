//console.log('hellooo');
//console.log('welcome!!');
//window.alert('This is an alert!!');
//window.alert('I like pizza!!');
//comment
document.getElementById("myh1").textContent="Welcome!!";

//variable -contgainer storing a value
//declaration let x;
//assignment x=10;

let x=125;
console.log(x);

let age=25;
let price=10.99;
let gpa=2.1;
console.log(`you are ${age} years old`);//placeholder for variable
console.log(price);
console.log(`Your gpa is ${gpa} out of 5`);
console.log(typeof(age));

let firstname="Uday"
console.log(typeof firstname);
console.log(`your name is ${firstname}`);
//boolean variable
let online=true;
//arithmetic operators
let students=30;
console.log(`The no of students:${students}`);
students+=1;
console.log(`The new no of students:${students}`);
//user input 1->window prompt 2->using input and button
//let username=window.prompt("Enter your name:")
//window prompt
// let username;

// document.getElementById("submitbutton").onclick=function(){
//     username=document.getElementById("mytext").value;
//     console.log(username);
//     document.getElementById("myh1").textContent=`Helloo ${username}`;
// }

//type conversion

let umar=Number(window.prompt("enter age"));
 
umar+=20;
console.log(umar);

//constant var that cant be changed
const PI=3.14;

//Math module similar to java
//Math.truc(x) eliminates decimal portion 