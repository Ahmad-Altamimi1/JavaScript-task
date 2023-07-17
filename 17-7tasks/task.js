let button = document.getElementById("button")
let tbody=document.getElementById("tbody")
let td=tbody.value
let htt = new XMLHttpRequest();
htt.open("GET","task.json")
button.onclick = function(){
    let ahmad = "";
    const httjs =JSON.parse(htt.responseText);
    for (let i = 0; i<3; i++) {
 ahmad +=`
  <tr >
   <td>${httjs.names[i]}</td>
   <td>${httjs.Age[i]}</td>
   <td>${httjs.major[i]} </td>
   <td>${httjs.unvirsity[i]}</td>
   <td>
<img src="${httjs.images[i]}" alt="">
   </td>
 </tr>
 <br>`
 
 
}
tbody.innerHTML=ahmad;

}
htt.send();

