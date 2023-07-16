// window.localStorage.setItem("Name", "Ahmad")
// let name1 = localStorage.getItem("Name")
// console.log(name1)
// let name2 = window.localStorage.removeItem("Name"  )
// console.log(name1)
// localStorage.clear()
// /**
//  * Click "Cal" on expiry date
//  */
// // Example 1: Matching a pattern in a string
// const string = "Hello, World!";
// const pattern = /Hello/;
// const result = pattern.test(string);
// console.log(result); // Output: true

// // Example 2: Extracting matches from a string
// const sentence = "I have 3 cats and 2 dogs.";
// const numberPattern = /\d+/g;
// console.log("this is number pattren" + numberPattern)
// const numbers = sentence.match(numberPattern);
// console.log(numbers); // Output: [ '3', '2' ]

// // Example 3: Replacing matches in a string
// const text = "I love apples and oranges.";
// const fruitPattern = /apples|oranges/;
// const newText = text.replace(fruitPattern, "bananas");
// console.log(newText); // Output: "I love bananas and bananas."

// // Example 4: Splitting a string based on a pattern
// const paragraph = "This is a paragraph.\nIt has multiple lines.\n\nThe end.";
// const lines = paragraph.split(/\n+/);
// console.log(lines); // Output: [ 'This is a paragraph.', 'It has multiple lines.', 'The end.' ]
let name11 = "Ahmad MOHammad Altamimi "
re=/ahmad/i
console.log(name11.match(re))