/* 1. Write a JavaScript program that returns rate as text
less than 50 return ==> Fail
equal or between 50 and 59 ===> E
equal or between 60 and 69 ===> D
equal or between 70 and 79 ===> C
equal or between 80 and 89 ===> B
equal or between 90 and 100 ===> A
*/
// 56,61,73,84,99,34
let mark;
 mark = window.prompt("input your mark","0 t0 100")
if(mark >=50 && mark<=59){
    alert("E")
} else if(mark >=60 && mark<=69){
    alert("D")

}else if(mark >=70 && mark<=79){
    alert("C")

}else if(mark >=80 && mark<=89){
    alert("B")

}else if(mark >=90 && mark<=100){
    alert("A")

}else if(mark < 50){
    alert("Fail")
}else(
    alert("YOU Dont put mark")
)


