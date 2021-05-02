// 1. JavaScript Console API
// console.log("Hello World");
// alert("Me");
// document.write("A Document")
// console.warn("Warnning");
// console.error("Error Occured");

// 2. JavaScript Variables
// What are variables? --> Containers to store data values
var number1 = 33;
var number2 = 55;
//console.log(number1 + number2); 

// 3. Data types in JavaScript
//Number
var num1 = 444;

//String
var str1 = "This is a string";
var str2 = 'This is a string';

//Objects
var marks = {
    root: 34,
    groot: 55,
    stark: 77
}
//console.log(marks);

//Boolean
a = true
b = false
//console.log(a, b)

//Undefined
var und = undefined;
//console.log(undefined);

//Null;
var n = null;
//console.log(n);

/*
At a very high level there are two types of data types in JavaScript
1. Primitive data types: undefined, null, number, string, boolean, symbol
2. Reference data types: Arrays and Objects
*/

//Arrays
var arr = [1, 2, 3, "String", 4, 5]

// 4. Operators In JavaScript
// Arithemetic Operators
var a = 100;
var b = 10;
// console.log("The Value of a + b is:",a + b);
// console.log("The Value of a - b is:",a - b);
// console.log("The Value of a * b is:",a * b);
// console.log("The Value of a / b is:",a / b);

//Assignment Operators
var c =b;
// c +=2;
// c -= 2; // c = c - 2
// c *= 2; // c = c * 2
// c /= 2; // c = c / 2
// console.log(c);

//Comparison Operators
var x = 33;
var y =56;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x < y);
// console.log(x > y);

//Logical Operators
// Logical AND
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// Logical OR
// console.log(true || true);
// console.log(true ||false);
// console.log(false || true);
// console.log(false || false);

// Logical NOT
// console.log(!false);
// console.log(!true);

// 5. Functions in JavaScript
function avg(a, b){
    c = (a + b)/ 2;
    return c;
}
// DRY principal --> Do Not Repate Yourself
c1 = avg(4, 6);
c2 = avg(14, 16);
//console.log(c1, c2) 

// 6. Conditionals in JavaScript
/*
// Single if statement
var age = 41;
if(age > 8){
    console.log('You are not a Kid');
}

// if-else statement
// if(age > 8){
//     console.log('You are not a Kid');
// }
// else{
//     console.log('You are a Kid');
// }

age = 22;
// if-else Ladder
if(age > 32){
    console.log("You are not a Kid");
}
else if(age > 26){
    console.log("Not a Kid Anymore");
}
else if(age > 22){
    console.log("Yes Not a Kid Anymore");
}
else if(age > 18){
    console.log("You are 18+ and Not a Kid Anymore");
}
else{
    console.log("You are a Kid");
}
console.log("End of Ladder");
*/

// 7. Loops in JavaScript
// FOR Loop
//var arr = [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(arr);
// for(var i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

// arr.forEach(function(element){
//     console.log(element);
// })

//WHILE Loop
// const ac = 0; // Assignment to constant variable ERROR.
// ac = ac + 1;

let j = 0; 
// while(j < arr.length){
//     console.log(arr[j]);
//     j++
// }

// DOWHILE Loop
// do{
//     console.log(arr[j]);
//     j++
// }while(j < arr.length);

// 8. Break And Continue in JavaScript
var arr = [1, 2, 3, 4, 5, 6, 7, 8]
//console.log(arr);
for(var i = 0; i < arr.length; i++){
    if(i == 2){
        //break;
        continue;
    }
    //console.log(arr[i]);
}

// 9. Array Methods in JavaScript.
let myArr = ["Fan", "Camera", 34, null, true];
// console.log(myArr.length);
myArr.pop(); //Will remove last element from the given Array
myArr.push('Root') //Will Add an element at the end in the given Array
myArr.shift() //Removes the first element from the Array
myArr.unshift("Root")  // Add element at the beginning Array
const newLen = myArr.unshift("Root")
// console.log(newLen);
myArr.toString() 
// console.log(myArr);

// 10. String Methods in JavaScript.
let myString = "Root is a computer";
// console.log(myString.length);
// console.log(myString.indexOf("is"));
// console.log(myString.lastIndexOf("a"));

//console.log(myString.slice(1,5));
d = myString.replace("Root", "Groot");
//d = d.replace("is", "not")
//console.log(d, myString)

// 11. Dates
let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());

// 12. DOM Manipulation
let elem = document.getElementById('click');
// console.log(elem);

let elemClass = document.getElementsByClassName('container');
// console.log(elemClass);
//elemClass[0].style.background = "yellow";
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-success");
// console.log(elem.innerHTML);
// console.log(elem.innerText);
// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);

tn = document.getElementsByTagName('div')
// console.log(tn)
createdElement = document.createElement('p')
createdElement.innerText = "This is a para"
tn[0].appendChild(createdElement);
createdElement2 = document.createElement('b')
createdElement2.innerText = "This is bold"
tn[0].replaceChild(createdElement2, createdElement);
//removeChild(element); --> removes an element 

// Selecting Using Query
sel = document.querySelector('.container')
// console.log(sel)

sel = document.querySelectorAll('.container')
// console.log(sel)

function clicked(){
    // console.log("Button Clicked")
}
window.onload = function(){
    //  console.log("Document Was Loaded")
}

// 13. Events in JavaScript

firstContainer.addEventListener('click', function(){
    // console.log("Clicked on Container");
})

firstContainer.addEventListener('click', function(){
    document.querySelectorAll('.container')[1].innerHTML = "<b> We Have Clicked </b>"
    // console.log("Clicked on Container");
})

firstContainer.addEventListener('mouseover', function(){
    // console.log("Mouse on Container");
})

firstContainer.addEventListener('mouseout', function(){
    // console.log("Mouse Out of Container");
})

firstContainer.addEventListener('mouseup', function(){
    // console.log("Mouse up when clicked on Container");
})

firstContainer.addEventListener('mousedown', function(){
    // console.log("Mouse down when clicked on Container");
})
let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
firstContainer.addEventListener('mouseup', function(){
    document.querySelectorAll('.container')[1].innerHTML = prevHTML;
    // console.log("Mouse up when clicked on Container");
})

firstContainer.addEventListener('mousedown', function(){
    document.querySelectorAll('.container')[1].innerHTML = "<b> We Have Clicked </b>"
    // console.log("Mouse down when clicked on Container");
})


//Arrow Function
function summ(a, b){
    return a + b;
}

sum = (a, b)=>{
    return a + b;
}

// 14. SetTimeout and SetInterval
login = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b> Set interval fired </b>"
    //console.log("Logged In")
}
// setTimeout(login, 2000);

//clr = setInterval(login, 5000); // --> // Use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout

// 15. JavaScript LocalStorage
/*
localStorage.setItem('name', 'root')
localStorage.clear()
localStorage
localStorage.getItem('name')
localStorage.removeItem('name')
*/

// 16. About JSON
obj = {name: "Root", length: 1, a: {this: "that"}}
jso = JSON.stringify(obj);
//console.log(typeof jso);
//console.log(jso);

parsed = JSON.parse(`{"name":"Root","length":1,"a":{"this":"that"}}`)
//console.log(parsed);


// Template Literals - Backticks
a =35;
console.log(`This is my ${a}`)