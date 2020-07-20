let user = prompt("enter a number :");
let user2 = prompt("Enter a number :");
let user3 = prompt("Enter a number :");
let user4 = prompt("Enter a number :");
let user5 = prompt("Enter a number :");
let user6 = prompt("Enter a number :");

let arr = [user,user2,user3,user4,user5,user6];
let odd = arr.filter(num=>num%2!=0).map(num=>num**3);
console.log(odd);
