
let meals=[]
if(localStorage.all_meals != null){
  meals=JSON.parse(localStorage.getItem('all_meals'));
  
  }
let cook=document.getElementsByClassName('cook_now_container');
let cook2=document.getElementsByClassName('cook_now_container2');
let cook3=document.getElementsByClassName('cook_now_container3');

let h_container=document.getElementsByClassName('h_container');
let h_container2=document.getElementsByClassName('h_container2');
let h_container3=document.getElementsByClassName('h_container3');
  
  
  //------------------restore my list from local storage--------------------------//

  if(localStorage.my_list != null){
    my_list=JSON.parse(localStorage.getItem('my_list'));
    my_list_obj=JSON.parse(localStorage.getItem('my_list_obj')); 
    }



//------------------------function to check meals and my list-------------------------------------//
function checkIfAllExist(meal_c, my_list_c )  {
     return meal_c.filter(h=> !my_list_c.includes(h)).length===0;  }
   //------------------------------------------------------------------------------------------------//
  
   
//----------------meals container change------------------------------------
while(cook[0].hasChildNodes()){
    cook[0].removeChild(cook[0].firstChild);   }
   while(cook2[0].hasChildNodes()){
    cook2[0].removeChild(cook2[0].firstChild);   }
   while(cook3[0].hasChildNodes()){
    cook3[0].removeChild(cook3[0].firstChild);   }
 //------------------------------------------------------  
  for(let i=0;i<meals.length;i++){
  
   if(checkIfAllExist(meals[i].ingr, my_list )){
  
     //----------click on meal to create a video list----------------//

  let cook_now_container_el =document.getElementsByClassName(meals[i].category);

cook_now_container_el[0].innerHTML+=`
      <div class="${"card"}">
          <img src="${"Images/card.jpg"}" alt="">
          <div class="${"cardContent"}">
          <p>Lorem ipsum dolor sit amet.</p>
          <div class="cardMain1">
          <p>${meals[i].name}</p>
          
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
          <button id="${"ShowRecipe"}${i}" onClick="ShowRecipeButton(${i},${"ShowRecipe"}${i}) ">Show recipe"</button>
          </div>
          
          </div> `

//-------------------------------------------------------------




//---------------------------//
  } 

}

function ShowRecipeButton(i,id0){

      cook[0].style.display="none";
      cook2[0].style.display="none";
      cook3[0].style.display="none";
      let vmore =document.getElementsByClassName("showmore")
      for(let i=0;i<vmore.length;i++){
        vmore[i].style.display="none";
      }
      h_container[0].style.display="none";
      h_container2[0].style.display="none";
      h_container3[0].style.display="none";

      video_maker(meals[i].link,meals[i].name,meals[i].info,meals[i].linkname,meals[i].ingr,i)
     
   
}


//---------------function to creat video list-----------//
function video_maker(link_i,name_,info_,linkNName,Ingr,i){
    let vvva=document.getElementsByClassName('video-list');
    vvva[0].style.display="block";
    while(vvva[0].hasChildNodes()){
      vvva[0].removeChild(vvva[0].firstChild);   }
      let cancel_buttonDiv=document.createElement('div');
      cancel_buttonDiv.classList.add('cancel_buttonDiv');

      let cancel_button=document.createElement('button');
      cancel_buttonDiv.appendChild(cancel_button);

      cancel_button.id="video_list_cancel";
      cancel_button.classList.add('cancel_button');
      cancel_button.innerHTML="x";
      
      cancel_button.addEventListener('click',function(){
      
     //-----------------change-------------------------------------------//
 
       h_container[0].style.display="block";
       h_container2[0].style.display="block";
       h_container3[0].style.display="block";

       let vmore =document.getElementsByClassName("showmore")
       for(let i=0;i<vmore.length;i++){
        vmore[i].style.display="flex";
      }

       cook[0].style.display="flex";
       cook2[0].style.display="flex";
       cook3[0].style.display="flex";
       //------------------------------------------------------------------//
        let vvv=document.getElementsByClassName('video-list');
        while(vvv[0].hasChildNodes()){
          vvv[0].removeChild(vvv[0].firstChild);   }
  
      })
      vvva[0].appendChild(cancel_buttonDiv);
  
let k=i;

   for(let i=0;i<link_i.length;i++){

let ingDiv=document.createElement('div');
ingDiv.classList.add('cookNow_container');
ingDiv.classList.add(`cookNow_container${i})`) ;


  let viddiv=document.createElement('div');
  viddiv.classList.add('vid');
  let vidd=document.createElement('iframe');
  vidd.style.width="25rem";
  vidd.style.height="15rem"; 
  vidd.setAttribute('allowfullscreen','');
  vidd.src=link_i[i];
  vidd.title='YouTube video player';
  let vvv=document.getElementsByClassName('video-list');
  let h3_ch_n=document.createElement('h3');
  
  
  h3_ch_n.innerHTML=linkNName[i];
  h3_ch_n.style.color="#1abc9c";
  
  h3_ch_n.classList.add('titlev');

  viddiv.appendChild(h3_ch_n);
  viddiv.appendChild(ingDiv);
  viddiv.appendChild(vidd);
  vvv[0].appendChild(viddiv);


addtocontainer(Ingr,'ingredient_class',my_list_obj,`cookNow_container${i})`,"meals",k);  //---add fruit icons to fruit container--

   }

  }



  function addtocontainer(item_name,class_,item_obj,container,class0,i){
    for(let j=0;j<meals[i].ingr_obj.length;j++){ 
  
            let _container_el =document.getElementsByClassName(container);
            _container_el[0].innerHTML+=`
           <div data-target="${meals[i].ingr_obj[j].name}" id="${meals[i].ingr_obj[j].name}" class="${class_} ${class0}">
          <img class="${class0}img" src="Images/${meals[i].ingr_obj[j].type}/${meals[i].ingr_obj[j].img}" >
          <div >
          <h4>${meals[i].ingr_obj[j].name}</h4>
          </div> 

          </div> `

    
      } 
    
    }

