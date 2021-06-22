// Type Conversion 

let myVar;
myVar = String(77);
console.log(myVar, typeof myVar);

let booleanVar = String(true);
console.log(booleanVar, typeof booleanVar);

let date = new Date();
console.log(date, typeof date)

let arr = String([1, 3, 4, 7]);
console.log(arr, typeof arr);
console.log(arr.length, typeof arr);

let i = 8;
console.log(i.toString());

let stri = Number("1344");
console.log(stri, typeof stri);

let number = parseInt("1344");
console.log(number, typeof number);

let number1 = parseFloat('77.0707');
console.log(number1.toFixed(2), typeof number1);


// Type Corecion

let mystr = Number("343");
let mynum = 77;
console.log(mystr + mynum);

