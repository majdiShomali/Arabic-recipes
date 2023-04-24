let meals=[
    {
      "name": "meal1",
      "img": "meal1.png",
      "linkname": [
        "majdi"
      ],
      "link": [
        "https://www.youtube.com/embed/9ajeqj7H5VE"
      ],
      "ingr": [
        "potato"
      ],
      "category": "cook_now_container",
      "ingr_obj": [
        {
          "name": "potato",
          "img": "potato.png",
          "type": "vegetables"
        }
      ]
    },
    {
      "name": "meal2",
      "img": "meal2.png",
      "linkname": [
        "iron",
        "steel"
      ],
      "link": [
        "https://www.youtube.com/embed/wtc1N5YIQu4",
        "https://www.youtube.com/embed/wqGhI48T9as"
      ],
      "ingr": [
        "apple",
        "garlic"
      ],
      "category": "cook_now_container",
      "ingr_obj": [
        {
          "name": "apple",
          "img": "apple.png",
          "type": "fruits"
        },
        {
          "name": "garlic",
          "img": "garlic.png",
          "type": "vegetables"
        },
        {
          "name": "potato",
          "img": "potato.png",
          "type": "vegetables"
        },
        {
          "name": "onion",
          "img": "onion.png",
          "type": "vegetables"
        }
        ,
        {
          "name": "Broccoli",
          "img": "Broccoli.png",
          "type": "vegetables"
        }
        ,
        {
          "name": "Arugula",
          "img": "Arugula.png",
          "type": "vegetables"
        }
      ]
    }
  ]



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

//-----------------------------------------------------------------

  let cook_now_container_el =document.getElementsByClassName(meals[i].category);
 let card = document.createElement("div");
 card.classList.add("card");
 cook_now_container_el[0].appendChild(card);

 let image = document.createElement("img");
 image.src ="Images/card.jpg";
 card.appendChild(image);

 let div0 = document.createElement("div");
 div0.classList.add("cardContent");
 card.appendChild(div0);

 let p1 = document.createElement("p");
 p1.textContent= meals[i].name ;
 div0.appendChild(p1);

 let div1 = document.createElement("div");
 div1.classList.add("cardMain1");
 div0.appendChild(div1);

 let p2 = document.createElement("p");
 p2.textContent= "Lorem ipsum";
 div1.appendChild(p2);

 let div2 = document.createElement("div");
 div2.classList.add("cardRating");
 div1.appendChild(div2);

 let image0 = document.createElement("img");
 image0.src ="Images/star.png";
 let image1 = document.createElement("img");
 image1.src ="Images/star.png";
 let image2 = document.createElement("img");
 image2.src ="Images/star.png";
 let image3 = document.createElement("img");
 image3.src ="Images/star.png";
 let image4 = document.createElement("img");
 image4.src ="Images/star.png";

 div2.appendChild(image0);
 div2.appendChild(image1);
 div2.appendChild(image2);
 div2.appendChild(image3);
 div2.appendChild(image4);

 let div3 = document.createElement("div");
 div3.classList.add("cardMain2");
 div0.appendChild(div3);

 let image5 = document.createElement("img");
 image5.src ="Images/fire.png";
 div3.appendChild(image5);

 let p3 = document.createElement("p");
 p3.textContent= "Lorem";
 div3.appendChild(p3);

 let div4 = document.createElement("div");
 div4.classList.add("cardButtons");
 card.appendChild(div4);

 let button1 = document.createElement("button");
 button1.textContent = "Show recipe";
 div4.appendChild(button1);



//-------------------------------------------------------------

button1.addEventListener(   'click' ,function(){

//--------------------change----------------------------------------
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
//--------------------------------------------------------------
  video_maker(meals[i].link,meals[i].name,meals[i].info,meals[i].linkname,meals[i].ingr,i)
 
 })


//---------------------------//
  } 

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
      let _listed_item=document.createElement("div");
      _listed_item.classList.add(class_);
      _listed_item.classList.add(class0);    
      _listed_item.id=meals[i].ingr_obj[j].name;
      _listed_item.dataset.target=`${meals[i].ingr_obj[j].name}`;
      let img1=document.createElement('img');
      img1.classList.add(`${class0}img`);
      img1.src=`Images/${meals[i].ingr_obj[j].type}/${meals[i].ingr_obj[j].img}`
      _listed_item.appendChild(img1);
      let _icon=document.createElement("div");
      _listed_item.appendChild(_icon);
      let h4el=document.createElement("h4");
      let h4el_text=document.createTextNode(meals[i].ingr_obj[j].name);
      h4el.appendChild(h4el_text);
      _icon.appendChild(h4el);
      let _container_el =document.getElementsByClassName(container);
      _container_el[0].appendChild(_listed_item);
    
    
      } 
    
    }