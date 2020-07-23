console.log("Hi,This is javascript checkin.....")
var Object_trail = {name:"yasar",age:"18",hobby:"nothing else"};

//console.log
console.log(Object_trail);

//console.dir
console.dir(Object_trail);

//console.error
console.error("trail error");

//console.warn
console.warn("Warning message");

//console.tabe
console.table(["apple","banana","cat","dog"]);

//console.time
console.time("Time",1);
var i;
for(i =0;i<100000;i++){
    //none
}
console.timeEnd("Time",2);

//console.info
console.info("Hi!I'm javascript");

//console.trace
function trace(){
    console.trace();
}
trace()
function call(){
    
    console.count("hi "+user);
    console.count("hi "+user);
}

var user = "bob";
console.log(call(user));
