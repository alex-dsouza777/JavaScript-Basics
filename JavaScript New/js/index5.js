const name = 'Root';
const greeting = 'Hello';
console.log(greeting + ' ' + name)

let html;
html = "<h1> Headding </h1>" +
        "<p> This is paragraph </p>";

html = html.concat('this', 'str2');

// console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());

let fruit1 = 'Orange';
let fruit2 = 'Apple';
let myHtml = `Hello ${name}
            <h1> Heading </h1>
            <p> I like ${fruit1} and ${fruit2}
            `;

document.body.innerHTML = myHtml;
 