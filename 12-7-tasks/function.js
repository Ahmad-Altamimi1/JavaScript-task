/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/

function tellFortune (X,Y,Z,N){
  console.log (`You will be a ${X} in ${Y}, and married to ${Z} with ${N} kids.`)
}
tellFortune('software engineer', 'Jordan', 'Alice',3)
/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
function calculateDogAge(age ){
 
  let  dog_age =age *7
  return console.log(`Your doggie is ${dog_age} years old in dog years!`)
}
calculateDogAge(2)

/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/
function calculateSupply(x,y){
  if(x<=100){
cup = (100-x) * 365 *3
console.log(cup)
  }else{console.log("you will dai")}
return cup
}
calculateSupply(30,3)

/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/

function greet (name){
 return console.log(`hello ${name}`)
}
 greet('Adam')
/*
5
what is the error:
function double(cat) {
  return 2 * x;
}

function double(7) {
  return 2 * 7;
}

function double('7') {
  return 2 * 'x';
}
*/
function double(cat) {
  return 2 * cat;
}
function double() {
  return 2 * 7;
}
function double(x) {
  return 2 * x;
}
double(7)
/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

function (x) double3 {
  return 2 * x;

*/
function double1(x) {
  return 2 * x ;
}
function double2 (x){
return 2 * x;
}
function  double3 (x) {
  return 2 * x;
}
/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
function cube(cu){
return console.log (cu**3)
}
cube(4)

/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
 function multiply(x ,y){
 return x * y}
console.log(multiply(3,4))
/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> please come back after X years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/
function canIGetADrivingLicense(age){
if (age>=20){
 return "yes you can" 
}else {
  let X = 20- age;
  return `please come back after ${X}years to get one`
}
}
console.log(canIGetADrivingLicense(17));
/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/
function sameLength(same, Leng){
  if( same.length == Leng.length){
    console.log("have the same length")
  }else{
    console.log("False")

  }
}
sameLength("tree","clue")
/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
function largerNubmer(x,y){
return console.log(Math.max(x,y))
}
largerNubmer(5,6)
/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/
function smallerNubmer (x,y,z){
  return console.log(Math.min(x,y,z))
}
smallerNubmer(8,6,7)
/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/
function shorterString(...five){
let re =five[0];
for(let i=0;i<five.length;i++){
if(re.length>five[i].length){
re = five[i]
}

}
console.log(re);
}
shorterString("air","tr","car","github","by")
// console.log(shorterString())
/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/
function longerString(...four){
  let re =four[0];
for(let i=0;i<four.length;i++){
if(re.length<four[i].length){
re = four[i]
}

}
console.log(re)
}
longerString("air","schoo","car","github")
/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
function  isEven(num){
  if(num % 2==0 && typeof num == "number"){
    return console.log("true");
}else{
  return console.log("false");

}
}isEven(4)

/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
function isOdd(num){
  if(!(num % 2==0) && typeof num == "number"){
    return console.log("true");
}else{
  return console.log("false");

}
}
isOdd(3)
/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/

function positive(x){
  if(x>0){
   console.log(x)
}else(
 console.log(-x)

)
}
positive(-5)

/*
18
Write a function called fullName
that accept two parameters, firstName and firstName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
function fullName(firstName ,lastName){
return console.log(`${firstName}  ${lastName}`)
}
fullName("a",'b')
/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.

*/
function average(...x){ 
 let cal=1;
for(let i=1; i<x.length; i++){
cal+=x[i]

}
ava = cal/x.length;
return ava;
}
let a = average(1,2,3,4,5);
console.log(a)
/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
function random(){
return  Math.random()
}
console.log(random())
/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/
function randomBetweenNumbers(x,y){
  return  (Math.random() *y)+x

}
console.log(randomBetweenNumbers(1,8))

/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/

function scoreInUniversty(x){
if(x>=0 && x<=49){
console.log("F")
} else if (x<=69){
  console.log("D")

} else if (x<=69){
  console.log("C")

}else if ( x<=94){
  console.log("B")

} else {
  console.log("A")
}
}
scoreInUniversty(95)
scoreInUniversty(15)
// 23
// Write a function called counter
// that will returns a number bigger
// than the one that returnd before
// and start from 0

// Ex: counter()
// => 1

// Ex: counter()
// => 2

// Ex: counter()
// => 3

// */
let count=0
function counter (){
  ++count
return console.log(count) 
}
counter()
counter()
counter()

/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/
function resetCounter(){
 console.log( count+'and the counter reset now' )
 return count=0
}
resetCounter()  
counter()