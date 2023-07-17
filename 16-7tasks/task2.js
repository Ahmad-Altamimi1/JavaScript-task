let form1= document.getElementById("form1")
 let input_form1 =form1.getElementsByTagName("input")
if(localStorage.length-1>0){
    for (let j = 0; j < input_form1.length-1; j++) {

        input_form1[j].value=localStorage.getItem(`${input_form1[j].name}`)
     }
}
console.log(localStorage.getItem("Age"))
form1.addEventListener("change",formone)
function formone(){
for (let i = 0; i < input_form1.length-1; i++) {
localStorage.setItem(`${input_form1[i].name}`,`${input_form1[i].value}`)
}}
let cheack= document.getElementsByClassName("cheack")
for (let q= 0; q < cheack.length; q++) {
if (cheack){

}
}
let divs =form1.getElementsByTagName("div")
console.log(divs)
for(let i =0; i<3; i++){
      let input1 =divs[i].getElementsByTagName("input")
for (let j = 0; j < input1.length; j++) {
  let card= divs[i].getElementsByTagName("input")[j].value;
    document.write(card)
    document.write("<br>")
}
document.write(`<hr>`)
  }
 


