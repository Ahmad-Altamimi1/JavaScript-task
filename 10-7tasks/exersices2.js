/* 1. Write a JavaScript program that returns rate as text
less than 50 return ==> Fail
equal or between 50 and 59 ===> E
equal or between 60 and 69 ===> D
equal or between 70 and 79 ===> C
equal or between 80 and 89 ===> B
equal or between 90 and 100 ===> A
*/
let arry_num;
arry_num=[56,61,73,84,99];
for(i=0 ;i<arry_num.length ; i++){
if(arry_num[i] >=50 && arry_num[i]<=59){
    console.log("E")
} else if(arry_num[i] >=60 && arry_num[i]<=69){
    console.log("D")

}else if(arry_num[i] >=70 && arry_num[i]<=79){
    console.log("C")

}else if(arry_num[i] >=80 && arry_num[i]<=89){
    console.log("B")

}else if(arry_num[i] >=90 && arry_num[i]<=100){
    console.log("A")

}

}
