let task4 =document.getElementById("task4")
let task4_1 =document.getElementById("fonts")
let text =document.getElementById("text")

task4.addEventListener("change",lines_a)
task4_1.addEventListener("change",fontss)
function lines_a(){
if(task4.value=="Courier"){
text.style.fontFamily=`'Courier New', Courier, monospace`
} 
else if (task4.value=="Arial"){

text.style.fontFamily=`Arial, Helvetica, sans-serif`
}
}
function fontss(){
    if(task4_1.value=="ten"){
        text.style.fontSize ="10px"
        } 
        else if (task4_1.value=="fiften"){
            text.style.fontSize=`25px`
        
        }
}
let italic = document.querySelector("#italic");

italic.addEventListener("click", () => {
  if (italic.checked) {
    text.style.fontStyle = "italic";
  } else {
    text.style.fontStyle = "normal";
  }
});

let bold = document.querySelector("#bold");

bold.addEventListener("click", () => {
  if (bold.checked) {
    text.style.fontWeight = "bold";
  } else {
    text.style.fontWeight = "normal";
  }
});

let underline = document.querySelector("#underline");

underline.addEventListener("click", () => {
  if (underline.checked) {
    text.style.textDecoration = "underline";
  } else {
    text.style.textDecoration = "none";
  }
});