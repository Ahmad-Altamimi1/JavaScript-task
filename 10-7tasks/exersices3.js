// 1. Write a JS code to print numbers from 1 to 10

for(i=1  ;  i<=10 ; i++){
// document.write(i)
}
/*2. Write a JS code to print Even numbers in arr :
   var arr = [13,23,12,45,22,48,66,100]
*/
let arr;
 arr = [13,23,12,45,22,48,66,100];
 for (i = 0; i < arr.length; i++){
   if(arr[i] % 2 ==0){
      console.log(arr[i]);
   }
 }

/* 
3. Write a JS code to print a pattern using for loop

   1 
   1 2 
   1 2 3 
   1 2 3 4 
   1 2 3 4 5 
   1 2 3 4 5 6 
   1 2 3 4 5 6 7 
   1 2 3 4 5 6 7 8 

*/
let arrr ,  pattern;
pattern=" ";
arrr =[1, 2, 3, 4 ,5 ,6 ,7 ,8 ];
for (let i = 0; i < arrr.length; i++){
   pattern += ` ${arrr[i].toString()}        `
      document.write(  pattern);
   document.write("<br>");

}

 /* 
 Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
let x = "don’t know why"
*/
 let x= "don’t know why"

    if(x.includes("y")){
console.log("yes")
    }else{
console.log("NO")

    }
    
//  }}
//  if(typeof x[i] === 'string'){
//    if(x[i].includes("y")){
// console.log("yes")
//    }else{
// console.log("no")

//    }
   
// }}

 