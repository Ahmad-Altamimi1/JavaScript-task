/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/
// const arry1=[3,4.2,7,4.6,9];

//   if(arry1)
let num1 = prompt("enter your code");
 let num2=prompt("enter your code");
alert(Math.max(num1,num2));

 /******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/
let arry2;
arry2=[3,-7,2];
for(i=0 ;i<arry2.length ;i++){
if(arry2[i]<0){
   console.log("The sign is -")
}}
// else{
//     alert("The sign is +")
// }
// }


 /******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/
let arry3, arry3_new;
arry3 = [0,-1,4];
arry3_new=[]
for(i=0;i<arry3.length;i++){ 
     if(arry3[i]<0){
arry3_new.push(arry3[i])
  } else if(arry3[i]>0){
arry3_new.unshift(arry3[i])

  }else{
arry3_new.splice(parseInt(arry3_new.length / 2),0, arry3[i])
    
}
}
console.log(arry3_new)

 /******* End Your Code ********* */


/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/
 let arr4;
 arr4=[-5, -2, -6, 0, -1];
 for (let i=0; i<arr4.length; i++){
  for(w=0 ; w<arr4.length ; w++){
  if(arr4[i]>arr4[w]){

  } else{
    break ;
  }
}
}
console.log(arr4[i])
 /******* End Your Code ********* */

 /* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/
  if("x">"y"){
    console.log ("Hello World")
  }else{
    console.log("Goodbye");
  }
 /******* End Your Code ********* */



