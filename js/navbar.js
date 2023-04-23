let navDiv=document.getElementById("navbar");
let navLinksUl=document.getElementById("NavLinksUl");
let navLinksUi= document.querySelectorAll("ul li");
let navLinksA= document.querySelectorAll("ul a");
let navLinksUlDiv=document.getElementById("NavLinksUlDiv");

let buttonnav_status = true; 
let body = document.getElementsByTagName("BODY")[0];
let width = body.offsetWidth;

    if (window.addEventListener) {  // all browsers except IE before version 9
      window.addEventListener ("resize", onResizeEvent);
    } 

    function onResizeEvent() {

      bodyElement = document.getElementsByTagName("BODY")[0];
      let newWidth = bodyElement.offsetWidth;
      if(newWidth != width){
        width = newWidth;
        console.log(width);
        localStorage.setItem("width",JSON.stringify(width));
       }
       if(width>=768){
          navLinksUlDiv.appendChild(navLinksUl);
          navLinksUl.style.display="flex";
       }else{
          navLinksUl.style.display="none";
          buttonnav_status = true; 
        }

    }
        let burgermenue=document.getElementById("buttonnav");
        burgermenue.addEventListener("click", navclick);


        function navclick(){

          {
            navLinksUl.style.display="block";
            if(buttonnav_status){
             for(let i=0;i<navLinksUi.length;i++){
              navLinksUi[i].style.display="block";
              navLinksA[i].style.justifyContent="start"; 
                }
                navDiv.appendChild(navLinksUl);
            }else(
              navLinksUl.style.display="none"
            )
              buttonnav_status=!buttonnav_status;
           }

        }