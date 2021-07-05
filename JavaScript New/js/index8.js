// Loops

// let a = 34;
// a += 1;
// a ++;

// console.log(a);
// for(let i=0; i<100; i++)
// {
//     console.log(i);
// }

// let j = 0;
// while(j < 100){
//     console.log(j+1);
//     j += 1;
// }

// let k = 0;
//  do{
//      console.log(k+1);
//      k += 1;
//  } while (k < 10);

// let arr = [2, 4, 5, 2, 7, 8];
// arr.forEach(function(element){
//     console.log(element)
// })

let obj = {
    name: "Root",
    age: 22,
    type: "Programmer",
    os: "Windows"
}

for(let key in obj)
{
    console.log(`${key} of object is ${obj[key]}`)
}