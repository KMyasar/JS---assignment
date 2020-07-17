let num = Number(prompt("Enter a number to check Odd or even :"));

let check = function(num){
    if(num %2 == 0){
        console.log('The number entered is '+num+' and Number is even');
    }
    else{
        console.log('The number entered is '+num+' and Number is odd');
    }
}
check(num);
