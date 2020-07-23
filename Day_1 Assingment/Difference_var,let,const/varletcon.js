// var - container
var name = "yasar"; //string
var age = 17;       // number
var doing = true;   // boolen
var friends = ['arikaran','praveen']; //array

console.log(name,age,doing,friends);

var object = {
    name : "yasar",
    hobby : "using mobile"
}                   //object
console.log(object);

var a; //undefined

//-------------------------------------------------------------------------------

//let - same as var but it is local variable
{
    let name = "yasar";
    console.log("let variable "+name);
}

console.log(name); //it shows a global variable only
//--------------------------------------------------------------------------------
//const
const wash = "dress";
// const wash = "car"  this will show you an error because const is unmountable 
