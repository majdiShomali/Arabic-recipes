let vegetables_name=['potato','onion','garlic','Broccoli','Cabbage','Bean','Arugula','Carrot','Cauliflower','Celery','Cherry Tomato','Common Beans','Cucumbers','Eggplant','Ginger','Lemon','Lettuce','Mulukhiyah','Mushrooms','Okra','Parsley','pea','radish','red pepper','Spinach','sweet pepper','tomato'];
let fruit_name=['apple','Apricot', "Avocado", "Banana" ,"Blackberries" , "Blueberries" ,"Cherry", "Date Palm" ,"Grape", "Guava" , "Kiwi" ,"Lime", "Mango" ,"Melon" ,"Nectarines", "Olives" ,"Orange"  ,"Pear" , "Pineapple", "Pomegranate", "Pomelo", "Raspberry" ,"Strawberry" ,"watermelon"];

//-------------------initialize array and object for my lsit ------------------------------//
let my_list=[];
let my_list_obj=[];
 width = JSON.parse(localStorage.getItem("width"))
//------------------------initialize vegetables name,type and image ------------------------------//

  let vegetables_img=[];
  let vegetables_type=[];
  arraytoimage('Images/vegetables/',vegetables_name,vegetables_img,vegetables_type,'vegetables');
  let vegetables_obj=[];
  arraytoobject(vegetables_name,vegetables_img,vegetables_type,vegetables_obj,'vegetables');
  addtocontainer(vegetables_name,'ingredient_class',vegetables_obj,'vegetables_container','vegetables');  //---add vegetables icons to vegetables container--

  let vegetables_listed_item;
  let p_vegetables;
  collectinfo(vegetables_listed_item,'vegetables',vegetables_name,'Images/vegetables/');
  let vmore_ID_vegetables="vmorevegetables";
  showGrid_(vmore_ID_vegetables ,'vegetables_container');

//-----------------------initialize fruit name,type and image -------------------------------//

let fruit_img=[];
let fruit_type=[];
arraytoimage('Images/fruits/',fruit_name,fruit_img,fruit_type,'fruit');
let fruit_obj=[];
arraytoobject(fruit_name,fruit_img,fruit_type,fruit_obj,'fruit');
addtocontainer(fruit_name,'ingredient_class',fruit_obj,'fruit_container',"fruits");  //---add fruit icons to fruit container--
let fruit_listed_item_;
let p_fruit;
collectinfo(fruit_listed_item_,'fruits',fruit_name,'Images/fruits/');
let vmore_ID_fruit="vmorefruits";
showGrid_(vmore_ID_fruit ,'fruit_container');

//------------------------function to make items' array for type and image--------------------------//

function arraytoimage(fruit_name0,item_name,item_img,item_type,type){

    for(let i=0;i<item_name.length;i++){
      item_img[i]=fruit_name0+item_name[i]+'.png';
      }
  for(let i=0;i<item_name.length;i++){
    item_type[i]=type;
       }
   
  }


  function arraytoobject(item_name,item_img,item_type,items_obj,type){

    for(let i=0;i<item_name.length;i++){
      let item_obj={
          name:'name',
          img:'img',
          type:type
          }
          item_obj.name=item_name[i];
          item_obj.img=item_img[i];
          item_obj.type=item_type[i];
    items_obj.push(item_obj);
    }

  }


//---------------------------function to add icons to the containers-----------------------------------//

function addtocontainer(item_name,class_,item_obj,container,class0){

    for(let i=0;i<item_name.length;i++){   
      let _listed_item=document.createElement("div");
      _listed_item.classList.add(class_);
      _listed_item.classList.add(class0);    
      _listed_item.id=item_name[i];
      _listed_item.dataset.target=`${item_obj[i].name}`;
      let img1=document.createElement('img');
      img1.classList.add(`${class0}img`);
      img1.src=item_obj[i].img
      _listed_item.appendChild(img1);
      let _icon=document.createElement("div");
      _listed_item.appendChild(_icon);
      let h4el=document.createElement("h4");
      let h4el_text=document.createTextNode(item_obj[i].name);
      h4el.appendChild(h4el_text);
      _icon.appendChild(h4el);
      let pel=document.createElement("p");
      pel.classList.add(class0+'p');
      let pel_text= document.createTextNode('Click to add');

      pel.appendChild(pel_text);
      _icon.appendChild(pel);
      let _container_el =document.getElementsByClassName(container);
      _container_el[0].appendChild(_listed_item);
    
    
      }
    
    }

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
      vcontainer[0].style.gridAutoRows="minmax(5rem,5rem)";
      vcontainer[0].style.gridTemplateColumns="repeat(5,1fr)";
    } else {
      vcontainer[0].style.gridAutoRows="minmax(5rem,5rem)";
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
      button_vmore.style.boxShadow="5px 5px 5px 0 rgb(32, 8, 8)";
    
    }
    
    
    })
    
    
    }


    //-----------------search by function----------------//

 function searchData(value){
 let item = document.querySelectorAll(".ingredient_class");
 
 let all_obj=vegetables_obj.concat(fruit_obj)
     for(let i=0;i<all_obj.length;i++){
      item[i].style.display="none";
      if(all_obj[i].name.toLowerCase().includes(value.toLowerCase())){
        item[i].style.display="flex";
        item[i].style.padding="0.2rem"
      }
     }
  
    }
  
  
  //---------collect info about item selected array  and send it to a function ----------------//

function collectinfo(_listed_item_,class_name,item_name,path){
  _listed_item_=document.getElementsByClassName(class_name);

for(let i=(0);i<(item_name.length);i++){

//_listed_item_[i].addEventListener('mouseover',function(){   _listed_item_[i].style="cursor:pointer"  ;     });

_listed_item_[i].onclick=function(){
let _listed_item_=document.getElementsByClassName(class_name);
_listed_item_[i].style.background='#1abc9c';

let _listed_item__img=document.getElementsByClassName(class_name+'img');
_listed_item__img[i].style.boxShadow="0px 0px 5px 1px rgb(5, 7, 5)";

_listed_item_[i].style.boxShadow="0px 0px 5px 1px rgb(5, 7, 5)";
 let p_=document.getElementsByClassName(class_name+'p');

 

p_[i].textContent='added to my list';


let item_name = _listed_item_[i].getAttribute('data-target');
if((my_list.indexOf(item_name)) ==-1){

  my_list.push(item_name);
  let item_list_={
      name: item_name,
      img:`${path+item_name+'.png'}`,
      type:class_name
      }

      my_list_obj.push(item_list_);



      localStorage.my_list=JSON.stringify(my_list);
      localStorage.my_list_obj=JSON.stringify(my_list_obj);

 add_to_my_list_f(i,item_list_.name, item_list_.img,class_name);

}
else{
  _listed_item_[i].style.background='blanchedalmond';

  let _listed_item__img=document.getElementsByClassName(class_name+'img');
  _listed_item__img[i].style.boxShadow="4px 4px 10px rgb(5, 7, 5)";
  _listed_item_[i].style.boxShadow="4px 4px 10px rgb(5, 7, 5)";
    p_[i].textContent='click to add';
  deletenn(item_name);
 
}}
}}



//-----------function to delete icons by name--------//
function deletenn(name_of){
  let unselected_item=(my_list.indexOf(name_of));
  my_list.splice(unselected_item,1);
  my_list_obj.splice(unselected_item,1);

  localStorage.my_list=JSON.stringify(my_list);
  localStorage.my_list_obj=JSON.stringify(my_list_obj);

  let deleted_item=document.getElementsByClassName('my_list_class')
  let my_list_unselected_items=document.getElementsByClassName('my_list_container');
  
  my_list_unselected_items[0].removeChild(deleted_item[unselected_item]);
  
}

//----------------------------creat icon -function- to my list-----------------------------------//

let add_to_my_list_f=function(i,name,img,_class){
  
  let add_item_to_my_list=document.createElement("div");
    add_item_to_my_list.classList.add('ingredient_class');
    add_item_to_my_list.classList.add('my_list_class');
 
    add_item_to_my_list.style.textAlign='left';
  
    add_item_to_my_list.addEventListener('click',function(){
   
    add_item_to_my_list.id=name;
    let _listed_item_=document.getElementsByClassName(_class);
   
    _listed_item_[i].style.background='blanchedalmond';
  
    let _listed_item__img=document.getElementsByClassName(_class+'img');
    _listed_item__img[i].style.boxShadow="4px 4px 10px rgb(5, 7, 5)";
  
    _listed_item_[i].style.boxShadow="4px 4px 10px rgb(5, 7, 5)";
    let p_c=document.getElementsByClassName(_class+'p');
  

       p_c[i].textContent='click to add';
    
       deletenn(add_item_to_my_list.id);
  
  });
  add_item_to_my_list.dataset.target=`${name}`;
  let img1=document.createElement('img');
  img1.src=img;
  add_item_to_my_list.appendChild(img1);
  let my_list_icon=document.createElement("div");
  add_item_to_my_list.appendChild(my_list_icon);
  let h4el=document.createElement("h4");
  let h4el_text=document.createTextNode(name);
  h4el.appendChild(h4el_text);
  my_list_icon.appendChild(h4el);
  let pel=document.createElement("p");
  let pel_text;
  
  pel_text=document.createTextNode(" click to remove");
  
  pel.appendChild(pel_text);
  my_list_icon.appendChild(pel);
  let my_list_container_el =document.getElementsByClassName("my_list_container");
  my_list_container_el[0].appendChild(add_item_to_my_list);
  
  }


  //------------------restore my list from local storage--------------------------//

if(localStorage.my_list != null){

  my_list=JSON.parse(localStorage.getItem('my_list'));
  my_list_obj=JSON.parse(localStorage.getItem('my_list_obj'));
  
  let j;
  for(let i=0;i<my_list.length;i++){
  j=check_contain(i);
  
     
    let _listed_item_l=document.getElementsByClassName(`${my_list_obj[i].type}`);
  _listed_item_l[j].style.background='#1abc9c';
  
  let _listed_item__img=document.getElementsByClassName(`${my_list_obj[i].type}`+'img');
  _listed_item__img[j].style.boxShadow="0px 0px 5px 1px rgb(5, 7, 5)";
  
  _listed_item_l[j].style.boxShadow="0px 0px 5px 1px rgb(5, 7, 5)";
   let p_l=document.getElementsByClassName(`${my_list_obj[i].type}`+'p');

    p_l[j].textContent='added to my list';



  add_to_my_list_f(j,my_list_obj[i].name,my_list_obj[i].img,`${my_list_obj[i].type}`);
  
  }
    
  }


  //-------------------------function check local storege------------------------------------//
function check_contain(i){
  let jj;
  if(vegetables_name.indexOf(my_list[i])!=-1){
    jj=vegetables_name.indexOf(my_list[i]);
    }
    else if(fruit_name.indexOf(my_list[i])!=-1){
      jj=fruit_name.indexOf(my_list[i]);
      }
     

return jj
}