
let navDiv=document.getElementById("navbar");
let ul0=document.getElementsByTagName("ul")[0];
let query_= document.querySelectorAll("ul li")
let query_0= document.querySelectorAll("ul a")
let ulDiv=document.getElementsByClassName("ulDiv")[0];

let buttonnav_status = true; 
let body = document.getElementsByTagName("BODY")[0];
    let width = body.offsetWidth;
    if (window.addEventListener) {  // all browsers except IE before version 9
      window.addEventListener ("resize", onResizeEvent);
    } 
    function onResizeEvent() {
      bodyElement = document.getElementsByTagName("BODY")[0];
      newWidth = bodyElement.offsetWidth;
      if(newWidth != width){
        width = newWidth;
        console.log(width);
      }
if(width>=768){
  ulDiv.appendChild(ul0);
  ul0.style.display="flex";
}else{
  ul0.style.display="none";
  buttonnav_status = true; 
}
    }
        let burgermenue=document.getElementById("buttonnav");
        burgermenue.addEventListener("click", navclick);


        function navclick(){
          {
            ul0.style.display="block";
            if(buttonnav_status){
             for(let i=0;i<query_.length;i++){
               query_[i].style.display="block";
               query_0[i].style.justifyContent="start";
                }
                navDiv.appendChild(ul0);
            }else(
             ul0.style.display="none"
            )
           buttonnav_status=!buttonnav_status;
           }
        }

      