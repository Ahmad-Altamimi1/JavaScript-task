// let text_bar = document.getElementById("text");
// let add_button = document.getElementById("add");
// let par = document.getElementById("par");
// let par1 = document.getElementById("par1");
// let search = document.getElementById("search");
// function loocaal() {
//   let local = [];
//   par.childNodes.forEach(function (el) {
//     local.push(el.childNodes[1].innerHTML);
//   });
//   localStorage.setItem("do", JSON.stringify(local));
// }
// if (localStorage.getItem("do") != null) {
//   get = localStorage.getItem("do");
//   JSON.parse(get).forEach(function (ele) {
//     let alwai = document.createElement("div");
//     alwai.setAttribute("class", "alawi");
//     alwai.innerHTML = `
    
//     <span  id="span">${ele}</span> 
//     <button id="edit">edit</button>
//     <button id="clear">clear</button> `;
//     par.appendChild(alwai);
//   });
// }
// search.addEventListener("keyup", function (e) {
//   par.childNodes.forEach((el) => {
//     el.style.display = "none";

//     if (el.childNodes[1].innerHTML.toLowerCase().startsWith(search.value)) {
//       el.style.display = "flex";
//     }
//   });
// });
// add_button.onclick = function () {
//   let alwai = document.createElement("div");
//   alwai.innerHTML = `
//     <span  id="span">${text_bar.value}</span> 
//     <button id="edit">edit</button>
//     <button id="clear">clear</button>`;
//   par.appendChild(alwai);
//   text_bar.value = "";
//   loocaal();
// };
// par.addEventListener("click", function (e) {
//   if (e.target.id == "clear") {
//     e.target.parentElement.remove();
//     loocaal();
//   } else if (e.target.id == "edit") {
//     e.target.parentElement.childNodes[1].innerHTML = prompt("edit");
//   }
// });

let text_bar = document.getElementById("text");
let add_button = document.getElementById("add");
let par = document.getElementById("par");
let par1 = document.getElementById("par1");
let search = document.getElementById("search");
function loocaal() {
  let local = [];
  par.childNodes.forEach(function (el) {
    local.push(el.childNodes[1].innerHTML);
  });
  localStorage.setItem("do", JSON.stringify(local));
}
if (localStorage.getItem("do") != null) {
  get = localStorage.getItem("do");
  JSON.parse(get).forEach(function (ele) {
    let alwai = document.createElement("div");
    alwai.setAttribute("class", "alawi");
    alwai.innerHTML = `
    
    <span  id="span">${ele}</span> 
    <button id="edit">edit</button>
    <button id="clear">clear</button> `;
    par.appendChild(alwai);
  });
}
search.addEventListener("keyup", function (e) {
  par.childNodes.forEach((el) => {
    el.style.display = "none";

    if (el.childNodes[1].innerHTML.toLowerCase().startsWith(search.value)) {
      el.style.display = "flex";
    }
  });
});
add_button.onclick = function () {
  let alwai = document.createElement("div");
  alwai.innerHTML = `
    <span  id="span">${text_bar.value}</span> 
    <button id="edit">edit</button>
    <button id="clear">clear</button>`;
  par.appendChild(alwai);
  text_bar.value = "";
  loocaal();
};
par.addEventListener("click", function (e) {
  if (e.target.id == "clear") {
    e.target.parentElement.remove();
    loocaal();
  } else if (e.target.id == "edit") {
    e.target.parentElement.childNodes[1].innerHTML = prompt("edit");
  }
});

