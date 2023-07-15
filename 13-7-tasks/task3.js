let main =document.getElementById("select")
main.addEventListener("click",all)
let imagee= document.getElementById("im");
function all(e){
    if(main.value==="om")
{ imagee.src="img/Flag_of_Oman.svg"
}else if(main.value==="jordan"){
    imagee.src="img/علم-الأردن-دلالته-وألوانه-وأكثر.jpg" 
} 
}
