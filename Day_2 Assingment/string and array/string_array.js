let str = "yasar_arafath"; // string
let str2 = "yasar";
console.log(str.startsWith("y")); //check the string if the string has what we give in the input
console.log(str.trim()); // remove the white spaces starting and ending point of the string
console.log(str.valueOf()); //returns the primitive value of the string object
console.log(str.small()); // it returns the html element of the string
console.log(str.repeat(2)); // repeat the string again how many times we want to do
console.log(str.localeCompare(str2)); //compare the two strings 
console.log(str.includes("yasar")); //check the string if it has the given element and returns a boolean
console.log(str.search("arafath")); //search a string and display the position of the match

console.log("this is array section -->");
let arr = ["i","am","yasar","arafath"];

console.log(arr.copyWithin(2,0)); //copy the first two array elements to the last two array elements

let arr2 = ["i","am","yasar","arafath"];

let arr3 = Array.from("hi hello")
console.log(arr3); //Create an Array from a String 
console.log(arr2.join()); //join the array elements into a string
console.log(arr3.sort()); //sort method can do the arrange the by ascending order
console.log(arr3.reverse()); // reverse is used to reverse the element be descending order
