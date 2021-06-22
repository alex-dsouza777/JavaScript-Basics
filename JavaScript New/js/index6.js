const marks = [33, 87, 77, 98];
const fruits = ['Apple', 'Banana', 'Orange'];
const mixed = ['str', 77, [7, 5]];

const arr = new Array(1, 2, 5, 7, 'Apple');
console.log(arr);
console.log(marks);
console.log(fruits[2]);
console.log(mixed);

let value = marks.indexOf(77);
console.log(value);

marks.push(55);
console.log(marks);

marks.unshift(7);
console.log(marks);

marks.pop()
console.log(marks);

marks.shift()
console.log(marks);

marks.splice(1, 2)
console.log(marks);

let myobj = {
    name: 'Root',
    isActive: true,
    marks: [1, 7, 5]
}

console.log(myobj);
console.log(myobj.marks);
console.log(myobj.isActive);
