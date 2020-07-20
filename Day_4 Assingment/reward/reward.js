const income = 10000*12 //monthly

const sales = Number(prompt("Enter a number of sales :"));

let two = income/100 * 2;

let five = income/100 * 5;

let seven = income/100 * 7;

let ten = income/100 * 10;

if(sales === 0){
    console.log("You haven't get any rewards ^-^");
}
else if (sales > 0){
    console.log(`your reward amount is ${two}`);
}
else if(sales > 5000){
    console.log(`your reward amount is ${five}`);
}
else if(sales > 10001){
    console.log(`your reward amount is ${seven}`);
}
else{
    console.log(`your reward amount is ${ten}`);
}