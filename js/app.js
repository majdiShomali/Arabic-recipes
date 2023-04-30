
width = JSON.parse(localStorage.getItem("width"))


      
        render()
        render0()
        function render(){

        for(let i=0;i<8;i++){
        let cards = document.getElementById("cardsMeals");
        cards.classList.add("cardContainer");

        cards.innerHTML+=`
        <div class="card">
            <img src="Images/card.jpg" alt="">
            <div class="cardContent">
            <p>Lorem ipsum dolor sit amet.</p>
            <div class="cardMain1">
            <p>Lorem ipsum</p>
            
            <div class="cardRating">
              <img src="Images/star.png" >  
              <img src="Images/star.png" >  
              <img src="Images/star.png" >  
              <img src="Images/star.png" >  
              <img src="Images/star.png" >  
            </div>
            </div>
            
            <div class="cardMain2">
            <img src="Images/fire.png" alt="cal">
            <p>Lorem</p>
            </div>
            
            </div>
            
            <div class="cardButtons">
            <button>Show recipe</button>
            </div>
            
            </div> `
        
        }

      }



      function render0(){
     

        for(let i=0;i<10;i++){
      let cards = document.getElementById("cardsSweets");
      cards.classList.add("cardContainer");
      cards.innerHTML+=`
<div class="card">
    <img src="Images/card.jpg" alt="">
    <div class="cardContent">
    <p>Lorem ipsum dolor sit amet.</p>
    <div class="cardMain1">
    <p>Lorem ipsum</p>
    
    <div class="cardRating">
      <img src="Images/star.png" >  
      <img src="Images/star.png" >  
      <img src="Images/star.png" >  
      <img src="Images/star.png" >  
      <img src="Images/star.png" >  
    </div>
    </div>
    
    <div class="cardMain2">
    <img src="Images/fire.png" alt="cal">
    <p>Lorem</p>
    </div>
    
    </div>
    
    <div class="cardButtons">
    <button>Show recipe</button>
    </div>
    
    </div> `

     
      }

    }


    let vmore_ID_meals="vmoremeals";
    showGrid_(vmore_ID_meals,'cardsMeals');

    let vmore_ID_Sweets="vmoreSweets";
    showGrid_(vmore_ID_Sweets,'cardsSweets');

//-----------------------button show grid------------------//
function showGrid_(vmore_ID_ ,items_container_){
  let toggvbutton=true;
  let button_vmore=document.getElementById(vmore_ID_);
  button_vmore.addEventListener('click',function(){
  if(toggvbutton==true){
    let button_vmore=document.getElementById(vmore_ID_);
    button_vmore.innerHTML="..";
  let vcontainer=document.getElementsByClassName(items_container_);
  vcontainer[0].style.display="grid";
  
  if(width > 600){
    vcontainer[0].style.gridAutoRows="minmax(5rem,21rem)";
    vcontainer[0].style.gridTemplateColumns="repeat(4,1fr)";
  } else {
    vcontainer[0].style.gridAutoRows="minmax(5rem,21rem)";
    vcontainer[0].style.gridTemplateColumns="repeat(2,1fr)";
  }
  
  vcontainer[0].style.gridGap="1rem";
  toggvbutton=false;
  button_vmore.style.boxShadow="0px 0px 5px 0 rgb(32, 8, 8)";
  
  }
  
  else if(toggvbutton==false){
    let button_vmore=document.getElementById(vmore_ID_);
    button_vmore.innerHTML=": :";
    let vcontainer=document.getElementsByClassName(items_container_);
    vcontainer[0].style.display="flex";
    toggvbutton=true;
    button_vmore.style.boxShadow="2px 2px 1px 0 rgb(32, 8, 8)";
  
  }
  
  
  })
  
  
  }


        