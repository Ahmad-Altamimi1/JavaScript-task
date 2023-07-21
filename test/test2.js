console.log("######### FOR OF#########");

const array1 = ['a', 'b', 'c'];
for (const e of array1) {
  console.log(e);
}

console.log("########Arry Of Map##########");

// Pass a function to map
const array_of_map = [1, 4, 9, 16];
const map1 = array_of_map.map(function (elemant ,index ,arr) {
    // console.log(`this is elemant ${elemant}`)
    // console.log(`this is current index ${index}`)
    // console.log(`Arry ${arr}`)
    // console.log("########")
   return elemant+=1
});
console.log( map1 )
// let butoon=document.getElementById("foreach");
// butoon.onclick(function foreachbutton(ele) {
//     array_of_map

// })
console.log("#########for Each#########")
document.addEventListener("DOMContentLoaded", function () {
    // Get all the elements with the class 'custom-button' and convert the NodeList to an array
    const buttons = Array.from(document.querySelectorAll('.custom-button'));
  
    // Add an onclick event to each button using forEach
    buttons.forEach(function (button) {
      button.onclick = function () {
        // Your action for each button click goes here
        console.log("Button clicked: " + button.textContent);
      };
    });
  });

  
  //   array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
  console.log("######### reduce##########")

  
const numberss = [1, 2, 3, 4, 5];

const sum = numberss.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 6); // The initial value of the accumulator is set to 0

console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5)
console.log("#########fillter####")
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,9,9, 10];
const evenNumbers = numbers.filter(function (number) {
  return number!=9
});

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]
// _____________________________

class ahmad {
 static count = 0;
  constructor(id, name, age) {
    this.idaa = id;
    this.namee = name;
    this.agee = age;
    ahmad.count++;
  }
static realmadrid(){
    return `this num of number ${this.count}`
  }

}
let userone = new ahmad(3,"ahmad",22);
console.log(userone)
console.log(userone instanceof ahmad)
console.log(userone.constructor=== ahmad);
console.log(userone.constructor=== ahmad);
console.log(ahmad.realmadrid());
