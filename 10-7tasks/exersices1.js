/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/
// const arry1=[3,4.2,7,4.6,9];

//   if(arry1)
let num1 = prompt("enter First number");
 let num2=prompt("enter seconde");
alert(Math.max(num1,num2));
 /******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/
let sign1=3 , sign2=-7 , sign3=2;
if(sign1 >0 && sign2 >0 && sign3 >0){
  alert('The sign is +')
}else {
  alert("The sign is -")
}


 /******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/

let x21 =0;
let y=-1;
 z=4;
let outPut=[];
if( x21>y &&  x21>z){
  outPut.unshift( x21);
  if(y>z){
    outPut.unshift(y);
    outPut.unshift(z);

  } else{ 
    outPut.unshift(z);
    outPut.unshift(y);

  }
 

}else if (y< x21 && y>z){
  outPut.unshift(y);
  if(z> x21){
    outPut.unshift(z);
    outPut.unshift( x21);

  } else{ 
    outPut.unshift( x21);
    outPut.unshift(z);

  }

}else if (z> x21 && z>y){
  outPut.unshift(z);
  if(y> x21){
    outPut.unshift(y);
    outPut.unshift( x21);

  } else{ 
    outPut.unshift( x21);
    outPut.unshift(y);

  }
  }


console.log(outPut)

// for(i=0;i<arry3.length;i++){ 
//      if(arry3[i]<0){
// arry3_new.push(arry3[i])
//   } else if(arry3[i]>0){
// arry3_new.unshift(arry3[i])
  
//   }else{
// arry3_new.splice(parseInt(arry3_new.length / 2),0, arry3[i])
    
// }
// }
// console.log(arry3_new)

 /******* End Your Code ********* */


/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/
 let arr4;
 let q=-5, q2=-2 , q3=-6 , q4=0, q5=-1
 arr4=[-5, -2, -6, 0 , -1];
 let max = q;
 if(q2>max){
  max = q2;
 }
 if(q3>max){
  max = q3;
 }
 if( q4>max){
  max = q4;
 }
 if( q5>max){
  max = q5;
 }
 console.log(max)



// for (let i=0; i<arr4.length; i++){
//   if(arr4[i]>max){
//     max = arr4[i];
//   } 
// }
   /******* End Your Code ********* */

 /* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/
let x1 =34
let y1 =12
  if(x1>y1){
    console.log ("Hello World")
  }else{
    console.log("Goodbye");
  }
 /******* End Your Code ********* */
