// /*
//   Fetch API
//   - Return A Representation Of the Entire HTTP Response
// */
// async function get(){
//   const response = await fetch('https://api.github.com/users/Ahmad-Altamimi1/repos');
//   const data = await response.json();
//   console.log(data);

// }

// let all = "ahmad23ALI%$@"
// let num = /[0-9]/g;
// console.log(all.match(num))
// let character=/[^A-Z]/g
// console.log(all.match(character))
// SPICIFC =/[ah]/g
// console.log(all.match(SPICIFC))
// let allcharacters=/[a-zA-Z]/g
// console.log(all.match(allcharacters))
// let spichial=/[^a-zA-Z0-9]/g
// console.log(all.match(spichial))
// let spichial2=/\S/g
// console.log(all.match(spichial2))

// let Email="   %d@y.comahoo.com  1df@yree.comahoo.com d@y.comahoo.com d@yahoo.net"
// let emailreg=/\b[^0-9]\w{1,}@\w{1,}.(com|net)/g
// console.log(Email.match(emailreg))


//  let Name ="AHmEd"
//  let Name1=Name.split("")
//  let name2=Name1.map((el)=>{ return el.toUpperCase()==el? el.toLowerCase(): el= el.toUpperCase()} )

 
//  console.log(name2)
//  let number="mur563a3643d"
//  let number1=number.split("")
// let number3 = number1.map( function elem(el,index,arr){
//   console.log(el)
//   // console.log(typeof +el)
//     if ( isNaN(+el) ) {
//       return el

//     } else {
//       return ""
//     }
// }).join("")

// console.log(number3)
// console.log( parseInt("m"))
// console.log( +"m")
// let filtter=number1.filter(function(el) {
//   return isNaN(+el) 
    


  
// })
// console.log(filtter )
// let sentence = "I Love Foood Code Too Playing Much";
// let  sentence1=sentence.split(" ")
// let filttter = sentence1.filter(function (ele){
//   if (ele.length<=4) {
//     return ele
//   }
// }).join("")
// console.log(filttter)

// let mix = "A13BS2ZX";
// let mixx=mix.split("")
// let fill=mixx.filter(function (elem) {
//  return !(isNaN(elem))
// }).map(function (ele) {
//   return ele*2
// })
// console.log(fill)
// let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "#", "O"];
// let remove = removeChars.filter(function (ele) {
// //  arr=/\w/
// //   return ele.match(arr)
//   return /\w/.test(ele)
// }).reduce(function (ACC,CR) {
//   return ACC+CR
  
// })
// console.log(remove)
// /*
//   Higher Order Functions Challenges

//   You Can Use
//   - ,
//   - _
//   - Space
//   - True => 1 => One Time Only In The Code

//   You Cannot Use
//   - Numbers
//   - Letters

//   - You Must Use [Filter + Map + Reduce + Your Knowledge]
//   - Order Is Not Important
//   - All In One Chain

// */

// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

// let solution = '?????';

// console.log(solution); // Elzero Web School
// let chalinge=myString.split(",").map(function (ele ,index,arr) {
//   if ( index==arr.length - +true) {
//         ele=" "
//       }
//     if(ele.length>1){
// let elemant=ele.split("")
// ele=elemant[+true]
// }
 
//     else{ele=ele}
//     return ele})
//     .filter(function (ele,index,arr) {
// return isNaN(+ele) 

// }).map(function (ele) {
//   if(ele=="_") {
//     ele =" "
//   }
//   return ele
// }).reduce(function (ele ,ele2) {
//  return ele +ele2
// })
// console.log(chalinge)

// console.log(isNaN("_"))

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
const array1 = ['a', 'b', 'c'];
for (const element of array1) {
  console.log(element);
}
// console.log("##################");
// const object = { a: 1, b: 2, c: 3 };

// for (const property in object) {
//   console.log(`${property}: ${object[property]}`);
// }