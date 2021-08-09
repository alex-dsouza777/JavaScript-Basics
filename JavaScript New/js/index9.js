function greet(name, thank) {
  console.log(`Hello ${name} and ${thank}!`);
}

let name = "Root";
let name2 = "Groot";

// console.log(`Hello ${name}!`);
console.log(`Hello ${name2}!`);

greet(name, "thank you");


arr = ['a', 'veg', 'b', 'c'];

arr.forEach(function (element, index, array) {
    console.log(element, index, array);
    
});