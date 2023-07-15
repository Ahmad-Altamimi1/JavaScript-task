let main_div= document.createElement("div");
main_div.setAttribute("id", "main_div");
man_con=document.createTextNode(card())
function card (){
let namee =["ahmad","mohammad","murad","Sami"]
let age=["24","30","31","32"];
for(var i = 0; i <4; i++) {
let elemant1=document.createElement("div");
let p1 = document.createElement("p");
let p1_content= document.createTextNode(namee[i]);
p1.appendChild(p1_content)
 elemant1.appendChild(p1);
let p2 = document.createElement("p");
p2_content= document.createTextNode(age[i])
p2.appendChild(p2_content)
elemant1.appendChild(p2)
let img = document.createElement("img")
img.setAttribute("src", "img/ahmad-name-arabic-diwani-calligraphy-art_587453-440.avif")
elemant1.appendChild(img)
document.body.appendChild(elemant1)
elemant1.style.cssText = `
border:2px solid red;
margin:10px ;
width:400px;
height:250px;
text-align:center;
font-size:20px;
display:inline-block;
font-weight:bold;
`
img.style.width="150px"

}}
// elemant1.appendChild(par)
// `<p>${namee[i]}</p>
// <p>${age[i]}</p>
// <img src="../../../smiley.gif" alt="">`
// let par = document.createTextNode();

