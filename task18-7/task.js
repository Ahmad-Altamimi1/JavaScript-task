 let all = document.getElementById("all")
 let inner = document.getElementById("inner")
 let imageleft=document.getElementById("left")
 let imageright=document.getElementById("right")
 async function get() {
    let http=await fetch("https://reqres.in/api/users?page=2");
    let httpp= await http.json()
    let contnt1 =" " 
    let i = -1
    imageright.onclick=function rightfun() {
        ++i
        if (i>3) {
            i =0
       }
        console.log(httpp.data[1].id)
     contnt1 =`
           <p> id: ${httpp.data[i].id} </p>
          <img src= "${httpp.data[i].avatar}" > 
            <p> Name: ${httpp.data[i].first_name}  ${httpp.data[i].last_name}</p>
         <p>  Email: ${httpp.data[i].email} </p>
            `
            inner.innerHTML=contnt1
          
             }
             imageleft.onclick=function leftfun() {
                 --i
                 if (i<0) {
                     i =5
                }
                let contnt1 =" " 
             contnt1 =`
                   <p> ${httpp.data[i].id} </p>
                  <img src= "${httpp.data[i].avatar}" > 
                    <p>${httpp.data[i].first_name}  ${httpp.data[i].last_name}</p>
                 <p>   ${httpp.data[i].email} </p>
                    `
                    inner.innerHTML=contnt1
                  
                }
                // console.log(httpp.data[1].id[1])
                    }
        
    // }
// }
 
 get()
