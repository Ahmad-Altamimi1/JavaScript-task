let color =document.getElementById("color")
let back =color.value
console.log(back)
console.log( color.value)
color.addEventListener('change',change_color)

if(sessionStorage.length>0){
    document.body.style.backgroundColor=`${sessionStorage.getItem("colorr")}`
    color.value=`${sessionStorage.getItem("colorr")}`
}
function change_color(){
  sessionStorage.setItem("colorr",color.value)
document.body.style.backgroundColor=`${sessionStorage.getItem("colorr")}`
}

