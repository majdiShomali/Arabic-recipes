  let meals55=[];
  let my_object_m = [];
  let all_mealsAR = meals55;
  let path00="images/All/"
  // let meals55 = [
  //   {
  //     name: "aa",
  //     img: "aa.png",
  //     linkname: ["a"],
  //     link: ["https://www.youtube.com/embed/w847J61wAcI"],
  //     ingr: ["بطاطة"],
  //     category: "cook_now_container",
  //     ingr_obj: [
  //       {
  //         name: "بطاطة",
  //         img: "بطاطة.png",
  //         type: "خضراوات",
  //       },
  //     ],
  //   },
  //   {
  //     name: "bb",
  //     img: "bb.png",
  //     linkname: ["b"],
  //     link: ["https://www.youtube.com/embed/pk53LeUYJAg"],
  //     ingr: ["بصل"],
  //     category: "cook_now_container2",
  //     ingr_obj: [
  //       {
  //         name: "بصل",
  //         img: "بصل.png",
  //         type: "خضراوات",
  //       },
  //     ],
  //   },
  //   {
  //     name: "cc",
  //     img: "cc.png",
  //     linkname: ["c"],
  //     link: ["https://www.youtube.com/embed/7xIbnwKzRGw"],
  //     ingr: ["ثوم"],
  //     category: "cook_now_container3",
  //     ingr_obj: [
  //       {
  //         name: "ثوم",
  //         img: "ثوم.png",
  //         type: "خضراوات",
  //       },
  //     ],
  //   },
  // ];

  // let my_object_m = [
  //   {
  //     name: "aa",
  //     img: "aa.png",
  //     linkname: ["a"],
  //     link: ["https://www.youtube.com/embed/w847J61wAcI"],
  //     ingr: ["potato"],
  //     category: "cook_now_container",
  //     ingr_obj: [
  //       {
  //         name: "potato",
  //         img: "potato.png",
  //         type: "vegetables",
  //       },
  //     ],
  //   },
  //   {
  //     name: "bb",
  //     img: "bb.png",
  //     linkname: ["b"],
  //     link: ["https://www.youtube.com/embed/pk53LeUYJAg"],
  //     ingr: ["onion"],
  //     category: "cook_now_container2",
  //     ingr_obj: [
  //       {
  //         name: "onion",
  //         img: "onion.png",
  //         type: "vegetables",
  //       },
  //     ],
  //   },
  //   {
  //     name: "cc",
  //     img: "cc.png",
  //     linkname: ["c"],
  //     link: ["https://www.youtube.com/embed/7xIbnwKzRGw"],
  //     ingr: ["garlic"],
  //     category: "cook_now_container3",
  //     ingr_obj: [
  //       {
  //         name: "garlic",
  //         img: "garlic.png",
  //         type: "vegetables",
  //       },
  //     ],
  //   },
  // ];

  // all_mealsAR = meals55;
  if (
    localStorage.all_mealsAR == null ||
    localStorage.all_mealsAR == "[]" ||
    localStorage.all_mealsAR == ""
  ) {
    localStorage.all_mealsAR = JSON.stringify(meals55);
    localStorage.all_meals = JSON.stringify(my_object_m);
  }

  //--------------------change--language-------------//

  var _lang_ = "AR";

  let tem;
  let st = "create";
  if (_lang_ == "EN") {
    // localStorage._lang_=JSON.stringify(_lang_);
    var lang_ = "en";
  } else if (_lang_ == "AR") {
    //localStorage._lang_=JSON.stringify(_lang_);
    var lang_ = "ar";
  }

  //-------------------initialize array and object for my lsit ------------------------------//

  var my_list = [];
  var my_list_obj = [];

  var my_listAR = [];
  var my_list_objAR = [];

  var my_listEN = [];
  var my_list_objEN = [];
  var vegetables_nameAR = [
    "بطاطة",
    "بصل",
    "ثوم",
    "بروكلي",
    "ملفوف",
    "فول",
    "جرجير",
    "جزر",
    "زهرا",
    "كرفس",
    "طماطم صغيرة",
    "فاصوليا",
    "خيار",
    "بانجان",
    "زنجبيل",
    "ليمون",
    "خس",
    "ملوخية",
    "فطر",
    "بامية",
    "بقدونس",
    "بازلاء",
    "فجل",
    "فلفل حار",
    "سبانخ",
    "فلفل حلو",
    "طماطم",
  ];
  var vegetables_nameEN = [
    "potato",
    "onion",
    "garlic",
    "Broccoli",
    "Cabbage",
    "Bean",
    "Arugula",
    "Carrot",
    "Cauliflower",
    "Celery",
    "Cherry Tomato",
    "Common Beans",
    "Cucumbers",
    "Eggplant",
    "Ginger",
    "Lemon",
    "Lettuce",
    "Mulukhiyah",
    "Mushrooms",
    "Okra",
    "Parsley",
    "pea",
    "radish",
    "red pepper",
    "Spinach",
    "sweet pepper",
    "tomato",
  ];
  //------------------------------------------------------------------------------------------------//

  var fruit_nameEN = [
    "apple",
    "Apricot",
    "Avocado",
    "Banana",
    "Blackberries",
    "Blueberries",
    "Cherry",
    "Date Palm",
    "Grape",
    "Guava",
    "Kiwi",
    "Lime",
    "Mango",
    "Melon",
    "Nectarines",
    "Olives",
    "Orange",
    "Pear",
    "Pineapple",
    "Pomegranate",
    "Pomelo",
    "Raspberry",
    "Strawberry",
    "watermelon",
  ];
  var fruit_nameAR = [
    "تفاح",
    "خوخ",
    "افاجادو",
    "موز",
    "توت اسود",
    "توت ازرق",
    "كرز",
    "تمر",
    "عنب",
    "جوافة",
    "كيوي",
    "ليمون اخضر",
    "منجا",
    "شمام",
    "دراق",
    "زيتون",
    "برتقال",
    "نجاص",
    "اناناس",
    "رمان",
    "بوملي",
    "توت",
    "فراولة",
    "بطيخ",
  ];

  var seasoning_nameEN = ["salt"];
  var seasoning_nameAR = ["ملح"];

  //------------------------initialize all_items name,type and image ------------------------------//
  var all_items_nameEN = vegetables_nameEN.concat(fruit_nameEN, seasoning_nameEN);

  if (lang_ == "en") {
    var all_items_name = vegetables_nameEN.concat(fruit_nameEN, seasoning_nameEN);
  } else if (lang_ == "ar") {
    var all_items_name = vegetables_nameAR.concat(fruit_nameAR, seasoning_nameAR);
  }
  var all_items_img = [];
  var all_items_type = [];
  arraytoimage(
    all_items_name,
    all_items_img,
    all_items_type,
    "all_items",
    "images/All/"
  );
  var all_items_obj = [];
  arraytoobject(
    all_items_name,
    all_items_img,
    all_items_type,
    all_items_obj,
    "all_items",
  );
  addtocontainer(
    all_items_name,
    "all_items_class",
    all_items_obj,
    "all_items_container"
  ); //---add all_items icons to all_items container--

  let all_items_listed_item;
  let p_all_items;
  collectinfo(
    all_items_listed_item,
    "all_items_class",
    all_items_name,
    p_all_items,
    "all_items",
  );
  let vmore_ID_all_items = "vmoreall_items";
  showGrid_(vmore_ID_all_items, "all_items_container");
  showGrid_("vmoreMyList_", "my_list_container");

  //------------------------function to make items' array for type and image--------------------------//

  function arraytoimage(item_name, item_img, item_type, type) {
    for (let i = 0; i < item_name.length; i++) {
      item_img[i] = "images/All/" + item_name[i] + ".png";
    }
    for (let i = 0; i < item_name.length; i++) {
      item_type[i] = type;
    }
  }

  //------------------------ function to initialize  objects for each items ----------------------------//

  function arraytoobject(item_name, item_img, item_type, items_obj, type) {
    for (let i = 0; i < item_name.length; i++) {
      let item_obj = {
        name: "name",
        img: "img",
        type: type,
      };
      item_obj.name = item_name[i];
      item_obj.img = item_img[i];
      item_obj.type = item_type[i];
      items_obj.push(item_obj);
    }
  }

  //---------------------------function to add icons to the containers-----------------------------------//

  function addtocontainer(item_name, class_, item_obj, container) {
    for (let i = 0; i < item_name.length; i++) {
      let _listed_item = document.createElement("div");
      _listed_item.classList.add(class_);
      if (lang_ == "en") {
        _listed_item.style.textAlign = "left";
      } else if (lang_ == "ar") {
        _listed_item.style.textAlign = "right";
      }

      _listed_item.id = item_name[i];
      _listed_item.dataset.target = `${item_obj[i].name}`;
      let img1 = document.createElement("img");
      img1.classList.add(`${class_}img`);
      img1.src = item_obj[i].img;
      _listed_item.appendChild(img1);
      let _icon = document.createElement("div");
      _listed_item.appendChild(_icon);
      let h4el = document.createElement("h4");
      let h4el_text = document.createTextNode(item_obj[i].name);
      h4el.appendChild(h4el_text);
      _icon.appendChild(h4el);
      let pel = document.createElement("p");
      pel.classList.add(class_ + "p");
      let pel_text;
      if (lang_ == "en") {
        pel_text = document.createTextNode("Click to add");
      } else if (lang_ == "ar") {
        pel_text = document.createTextNode("اضف الى قائمتي");
      }

      pel.appendChild(pel_text);
      _icon.appendChild(pel);
      let _container_el = document.getElementsByClassName(container);
      _container_el[0].appendChild(_listed_item);
    }
  }

  //---------collect info about item selected array  and send it to a function ----------------//

  function collectinfo(_listed_item_, class_name, item_name, p_, _type_) {
    _listed_item_ = document.getElementsByClassName(class_name);

    for (let i = 0; i < item_name.length; i++) {
      //_listed_item_[i].addEventListener('mouseover',function(){   _listed_item_[i].style="cursor:pointer"  ;     });

      _listed_item_[i].onclick = function () {
        let _listed_item_ = document.getElementsByClassName(class_name);
        _listed_item_[i].style.background = "#1abc9c";

        let _listed_item__img = document.getElementsByClassName(
          class_name + "img"
        );
        _listed_item__img[i].style.boxShadow = "0px 0px 5px 1px rgb(5, 7, 5)";

        _listed_item_[i].style.boxShadow = "0px 0px 5px 1px rgb(5, 7, 5)";
        let p_ = document.getElementsByClassName(class_name + "p");

        if (lang_ == "en") {
          p_[i].textContent = "added to my list";
        } else if (lang_ == "ar") {
          p_[i].textContent = "تمت الاضافة ";
        }

        let item_name = _listed_item_[i].getAttribute("data-target");
        if (my_list.indexOf(item_name) == -1) {
          my_list.push(item_name);
          let item_list_ = {
            name: item_name,
            img: `${path00}${item_name + ".png"}`,
            type: _type_,
          };

          my_list_obj.push(item_list_);

          add_to_my_list_f(
            i,
            item_list_.name,
            item_list_.img,
            item_list_.type,
            class_name,
           
          );

          let newAdd = document.getElementById("sub1");

          if (lang_ == "en") {
            newAdd.value = "add to my list";
          } else if (lang_ == "ar") {
            newAdd.value = "اضف الى قائمتي";
          }
        } else {
          _listed_item_[i].style.background = "gray";

          let _listed_item__img = document.getElementsByClassName(
            class_name + "img"
          );
          _listed_item__img[i].style.boxShadow = "4px 4px 10px rgb(5, 7, 5)";

          _listed_item_[i].style.boxShadow = "4px 4px 10px rgb(5, 7, 5)";

          if (lang_ == "en") {
            p_[i].textContent = "click to add";
          } else if (lang_ == "ar") {
            p_[i].textContent = "اضف الى قائمتي";
          }

          deletenn(item_name);
          let newAdd = document.getElementById("sub1");

          if (lang_ == "en") {
            newAdd.value = "add to my list";
          } else if (lang_ == "ar") {
            newAdd.value = "اضف الى قائمتي";
          }
        }
      };
    }
  }

  //-----------------------button show grid------------------//
  function showGrid_(vmore_ID_, items_container_) {
    var toggvbutton = true;
    let button_vmore = document.getElementById(vmore_ID_);
    button_vmore.addEventListener("click", function () {
      if (toggvbutton == true) {
        let button_vmore = document.getElementById(vmore_ID_);
        button_vmore.innerHTML = "..";
        let vcontainer = document.getElementsByClassName(items_container_);
        vcontainer[0].style.display = "grid";
        vcontainer[0].style.gridTemplateColumns = "320px 320px 320px 320px";
        vcontainer[0].style.rowGap = "20px";
        toggvbutton = false;
        button_vmore.style.boxShadow = "0px 0px 5px 0 rgb(32, 8, 8)";
      } else if (toggvbutton == false) {
        let button_vmore = document.getElementById(vmore_ID_);
        button_vmore.innerHTML = ": :";

        let vcontainer = document.getElementsByClassName(items_container_);

        vcontainer[0].style.display = "flex";
        toggvbutton = true;
        button_vmore.style.boxShadow = "5px 5px 5px 0 rgb(32, 8, 8)";
      }
    });
  }

  //-----------function to delete icons by name--------//
  function deletenn(name_of) {
    let unselected_item = my_list.indexOf(name_of);
    my_list.splice(unselected_item, 1);
    my_list_obj.splice(unselected_item, 1);

    let deleted_item = document.getElementsByClassName("my_list_class");
    let my_list_unselected_items =
      document.getElementsByClassName("my_list_container");

    my_list_unselected_items[0].removeChild(deleted_item[unselected_item]);

    let newAdd = document.getElementById("sub1");

    if (lang_ == "en") {
      newAdd.value = "add to my list";
    } else if (lang_ == "ar") {
      newAdd.value = "اضف الى قائمتي";
    }
  }

  //----------------------------creat icon -function- to my list-----------------------------------//

  let add_to_my_list_f = function (i, name, img, type_, _class) {
    let add_item_to_my_list = document.createElement("div");
    add_item_to_my_list.classList.add("my_list_class");

    if (lang_ == "en") {
      add_item_to_my_list.style.textAlign = "left";
    } else if (lang_ == "ar") {
      add_item_to_my_list.style.textAlign = "right";
    }

    add_item_to_my_list.addEventListener("click", function () {
      add_item_to_my_list.id = name;
      let _listed_item_ = document.getElementsByClassName(_class);

      _listed_item_[i].style.background = "gray";

      let _listed_item__img = document.getElementsByClassName(_class + "img");
      _listed_item__img[i].style.boxShadow = "4px 4px 10px rgb(5, 7, 5)";

      _listed_item_[i].style.boxShadow = "4px 4px 10px rgb(5, 7, 5)";
      let p_c = document.getElementsByClassName(_class + "p");

      if (lang_ == "en") {
        p_c[i].textContent = "click to add";
      } else if (lang_ == "ar") {
        p_c[i].textContent = "اضف الى قائمتي";
      }

      deletenn(add_item_to_my_list.id);

      let newAdd = document.getElementById("sub1");

      if (lang_ == "en") {
        newAdd.value = "add to my list";
      } else if (lang_ == "ar") {
        newAdd.value = "اضف الى قائمتي";
      }
    });
    add_item_to_my_list.dataset.target = `${name}`;
    let img1 = document.createElement("img");
    img1.src = img;
    add_item_to_my_list.appendChild(img1);
    let my_list_icon = document.createElement("div");
    add_item_to_my_list.appendChild(my_list_icon);
    let h4el = document.createElement("h4");
    let h4el_text = document.createTextNode(name);
    h4el.appendChild(h4el_text);
    my_list_icon.appendChild(h4el);
    let pel = document.createElement("p");
    let pel_text;

    if (lang_ == "en") {
      pel_text = document.createTextNode(" click to remove");
    } else if (lang_ == "ar") {
      pel_text = document.createTextNode("حذف من قائمتي");
    }

    pel.appendChild(pel_text);
    my_list_icon.appendChild(pel);
    let my_list_container_el =
      document.getElementsByClassName("my_list_container");
    my_list_container_el[0].appendChild(add_item_to_my_list);
  };

  //---------------------------search-------------------------------------------------//
  /*An array containing all the  names in the world:*/
  let search1 = all_items_name; //vegetables_name.concat(fruit_name,seasoning_name);
  /*initiate the autocomplete function on the "myInput" element, and pass along the  array as possible autocomplete values:*/
  autocomplete(document.getElementById("myInput"), search1);
  let search12 = document.getElementById("myInput");
  let sub_s = document.getElementById("sub1");
  sub_s.addEventListener("click", function () {
    let searched_div = document.getElementById(search12.value);
    let searched_div_container = searched_div.parentNode;
    let searched_div_index = Array.prototype.indexOf.call(
      searched_div_container.children,
      searched_div
    );
    let type_e = searched_div.className.slice(
      0,
      searched_div.className.indexOf("_")
    );
    collectinfo_search(
      searched_div_index,
      searched_div.className,
      search12.value,
      type_e,
      searched_div
    );

    if (lang_ == "en") {
      sub_s.value = ` added to my list`;
    } else if (lang_ == "ar") {
      sub_s.value = ` تمت الاضافة`;
    }

    //localStorage.my_list=JSON.stringify(my_list);
    //localStorage.my_list_obj=JSON.stringify(my_list_obj);

    let sear__1 = document.getElementById("myInput");
    sear__1.value = "";
  });

  //------------------collectinfo_search function--------------------------//
  function collectinfo_search(i, class_name, item_name1, _type_, searched_div1) {
    let _listed_item_ = searched_div1;

    _listed_item_.style.background = "#1abc9c";

    let _listed_item__img = document.getElementsByClassName(class_name + "img");

    _listed_item__img[i].style.boxShadow = "0px 0px 5px 1px rgb(5, 7, 5)";

    _listed_item_.style.boxShadow = "0px 0px 5px 1px rgb(5, 7, 5)";

    let p_1 = document.getElementsByClassName(class_name + "p");

    if (lang_ == "en") {
      p_1[i].textContent = "added to my list";
    } else if (lang_ == "ar") {
      p_1[i].textContent = "تمت الاضافة";
    }

    if (my_list.indexOf(item_name1) == -1) {
      my_list.push(item_name1);
      let item_list_ = {
        name: item_name1,
        img: `${path00}${item_name1 + ".png"}`,
        type: _type_,
      };

      my_list_obj.push(item_list_);

      add_to_my_list_f(
        i,
        item_list_.name,
        item_list_.img,
        item_list_.type,
        class_name,
        
              );
    } else {
    }
    let newAdd = document.getElementById("sub1");

    if (lang_ == "en") {
      newAdd.value = "add to my list";
    } else if (lang_ == "ar") {
      newAdd.value = "اضف الى قائمتي";
    }
  }

  //------------------_search function--------------------------//
  function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
      the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function (e) {
      var a,
        b,
        i,
        val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) {
        return false;
      }
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function (e) {
            /*insert the value for the autocomplete text field:*/
            inp.value = this.getElementsByTagName("input")[0].value;
            /*close the list of autocompleted values,
                  (or any other open lists of autocompleted values:*/
            closeAllLists();
          });
          a.appendChild(b);
        }
      }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function (e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) {
        //up
        /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = x.length - 1;
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
      closeAllLists(e.target);
      //console.log(e.target.textContent);
      var searched_item = e.target.textContent;
      //let search123=document.getElementById("myInput");
      //search123.value=searched_item;
      let sear__ = document.getElementById("myInput");
      if (search1.includes(searched_item)) {
        let newAdd = document.getElementById("sub1");

        if (lang_ == "en") {
          newAdd.value = "add to my list";
        } else if (lang_ == "ar") {
          newAdd.value = "اضف الى قائمتي";
        }

        if (lang_ == "en") {
          newAdd.value = "add to my list";

          if (sear__.value != "") {
            newAdd.value = ` add ${searched_item} to my list `;
          }
        } else if (lang_ == "ar") {
          newAdd.value = "اضف الى قائمتي";

          if (sear__.value != "") {
            newAdd.value = ` اضف ${searched_item} الى قائمتي  `;
          }
        }
      }
    });
  }

  var array_obj_meals;
  var array_obj_mealsAR = [];
  if (localStorage.all_meals != null) {
    array_obj_meals = JSON.parse(localStorage.all_meals);
  } else {
    var array_obj_meals = [];
  }

  if (localStorage.all_mealsAR != null) {
    array_obj_mealsAR = JSON.parse(localStorage.all_mealsAR);
  } else {
    var array_obj_mealsAR = [];
  }

  let name_link001 = document.getElementById("name_link0");
  let name_link002 = document.getElementById("name_link1");
  let name_link003 = document.getElementById("name_link2");
  let name_link004 = document.getElementById("name_link3");
  let name_link005 = document.getElementById("name_link4");

  let link_name001 = document.getElementById("link_add_0");
  let link_name002 = document.getElementById("link_add_1");
  let link_name003 = document.getElementById("link_add_2");
  let link_name004 = document.getElementById("link_add_3");
  let link_name005 = document.getElementById("link_add_4");
  let meal_input_name = document.getElementById("meal_name_in");

  let new_cook_obj_0 = document.getElementById("createnew_obj");
  let category00 = document.getElementById("usermajor");

  let linkn_name001;
  let linkn_name002;
  let linkn_name003;
  let linkn_name004;
  let linkn_name005;

  new_cook_obj_0.addEventListener("click", function () {
    if (link_name001.value != "") {
      linkn_name001 = "https://www.youtube.com/embed/".concat(
        link_name001.value.replace("https://youtu.be/", "")
      );
    } else {
      linkn_name001 = link_name001.value;
    }
    if (link_name002.value != "") {
      linkn_name002 = "https://www.youtube.com/embed/".concat(
        link_name002.value.replace("https://youtu.be/", "")
      );
    } else {
      linkn_name002 = link_name002.value;
    }

    if (link_name003.value != "") {
      linkn_name003 = "https://www.youtube.com/embed/".concat(
        link_name003.value.replace("https://youtu.be/", "")
      );
    } else {
      linkn_name003 = link_name003.value;
    }

    if (link_name004.value != "") {
      linkn_name004 = "https://www.youtube.com/embed/".concat(
        link_name004.value.replace("https://youtu.be/", "")
      );
    } else {
      linkn_name004 = link_name004.value;
    }

    if (link_name005.value != "") {
      linkn_name005 = "https://www.youtube.com/embed/".concat(
        link_name005.value.replace("https://youtu.be/", "")
      );
    } else {
      linkn_name005 = link_name005.value;
    }

    let link_0 = [
      linkn_name001,
      linkn_name002,
      linkn_name003,
      linkn_name004,
      linkn_name005,
    ];
    let name_0 = [
      name_link001.value,
      name_link002.value,
      name_link003.value,
      name_link004.value,
      name_link005.value,
    ];

    let link_f;
    let name_f;

    // if (st=="create"){
    //    link_f=link_0.filter((str)=> str !=="");
    //    name_f=name_0.filter((str)=> str !=="");
    //  } else if(st=="update"){
    //    link_f=link_0.filter((str)=> str !=="undefined");
    //   name_f=name_0.filter((str)=> str !=="undefined");
    //  }
    link_f = link_0.filter((str) => str !== "");
    name_f = name_0.filter((str) => str !== "");
    link_f = link_f.filter((str) => str !== "undefined");
    name_f = name_f.filter((str) => str !== "undefined");

    let category00n = category00.value.toLowerCase();

    if (lang_ == "ar") {
      for (let i = 0; i < my_list.length; i++) {
        let j = all_items_name.indexOf(my_list[i]);
        my_listEN[i] = all_items_nameEN[j];

        if (j < vegetables_nameEN.length) {
          var _type0_ = "vegetables";
          var _type0_AR = "خضراوات";
        } else if (j < vegetables_nameEN.length + fruit_nameEN.length) {
          var _type0_ = "fruits";
          var _type0_AR = "فواكه";
        } else if (
          j <
          vegetables_nameEN.length + fruit_nameEN.length + seasoning_nameEN.length
        ) {
          var _type0_ = "seasoning";
          var _type0_AR = "بهارات";
        }
        let item_listEN_ = {
          name: my_listEN[i],
          img: `${my_listEN[i] + ".png"}`,
          type: _type0_,
        };

        let item_listAR_ = {
          name: my_list[i],
          img: `${my_list[i] + ".png"}`,
          type: _type0_AR,
        };

        my_list_objEN.push(item_listEN_);
        my_list_objAR.push(item_listAR_);
        my_list_obj.push(item_listAR_);
      }

      var meal = {
        name: meal_input_name.value.toLowerCase(),
        img: meal_input_name.value.toLowerCase() + ".png",
        linkname: name_f,
        link: link_f,
        ingr: my_listEN,
        category: category00n,
        ingr_obj: my_list_objEN,
      };

      if (st == "create") {
        array_obj_meals.push(meal);
      } else if (st == "update") {
        array_obj_meals[tem] = meal;
      }

      localStorage.setItem("all_meals", JSON.stringify(array_obj_meals));
    }

    var mealar = {
      name: meal_input_name.value,
      img: meal_input_name.value + ".png",
      linkname: name_f,
      link: link_f,
      ingr: my_list,
      category: category00n,
      ingr_obj: my_list_objAR,
    };

    if (st == "create") {
      array_obj_mealsAR.push(mealar);
    } else if (st == "update") {
      array_obj_mealsAR[tem] = mealar;
      new_cook_obj_0.innerHTML = "create";
      st = "create";
    }

    localStorage.setItem("all_mealsAR", JSON.stringify(array_obj_mealsAR));
    showData();

    //location.reload();
    clearData();
    location.reload();
  });

  showData();

  //-------------read or show data-----------------//
  function showData() {
    let table = "";

    for (let i = 0; i < array_obj_mealsAR.length; i++) {
      table += `
  <tr>
  <td>${i}</td>
  <td>${array_obj_mealsAR[i].name}</td>
  <td>${array_obj_mealsAR[i].category}</td>
  <td><button onclick="view_data(${i})" id="view">view</td>
  <td><button onclick="update_data(${i})" id="update">update</td>
  <td><button onclick="delete_data(${i})" id="delete">delete</td>

  </tr>`;
    }

    document.getElementById("tbody").innerHTML = table;
  }

  function delete_data(i) {
    array_obj_mealsAR.splice(i, 1);
    array_obj_meals.splice(i, 1);
    localStorage.all_mealsAR = JSON.stringify(array_obj_mealsAR);
    localStorage.all_meals = JSON.stringify(array_obj_meals);

    // localStorage.my_list_objEN=JSON.stringify(my_list_objEN) ;
    // localStorage.my_list_objAR=JSON.stringify(my_list_objAR) ;
    // localStorage.my_list_obj=JSON.stringify(my_list_obj) ;
    showData();
  }

  //-----------update data-----------------------//
  function update_data(i) {
    name_link001.value = "";
    name_link002.value = "";
    name_link003.value = "";
    name_link004.value = "";
    name_link005.value = "";

    link_name001.value = "";
    link_name002.value = "";
    link_name003.value = "";
    link_name004.value = "";
    link_name005.value = "";

    meal_input_name.value = "";
    category00.value = "";

    let unselected_meals_my_list =
      document.getElementsByClassName("my_list_container");
    while (unselected_meals_my_list[0].hasChildNodes()) {
      unselected_meals_my_list[0].removeChild(
        unselected_meals_my_list[0].firstChild
      );
    }

    //-------------
    let l_listed_item_ = document.getElementsByClassName("all_items_class");

    let p_ = document.getElementsByClassName("all_items_class" + "p");
    for (let kk = 0; kk < l_listed_item_.length; kk++) {
      l_listed_item_[kk].style.background = "gray";

      let l_listed_item__img = document.getElementsByClassName(
        "all_items_class" + "img"
      );
      l_listed_item__img[kk].style.boxShadow = "4px 4px 10px rgb(5, 7, 5)";

      l_listed_item_[kk].style.boxShadow = "4px 4px 10px rgb(5, 7, 5)";

      if (lang_ == "en") {
        p_[kk].textContent = "click to add";
      } else if (lang_ == "ar") {
        p_[kk].textContent = "اضف الى قائمتي";
      }
    }
    //---------------

    name_link001.value =
      array_obj_mealsAR[i].linkname[0] !== undefined
        ? array_obj_mealsAR[i].linkname[0]
        : "";
    name_link002.value =
      array_obj_mealsAR[i].linkname[1] !== undefined
        ? array_obj_mealsAR[i].linkname[1]
        : "";
    name_link003.value =
      array_obj_mealsAR[i].linkname[2] !== undefined
        ? array_obj_mealsAR[i].linkname[2]
        : "";
    name_link004.value =
      array_obj_mealsAR[i].linkname[3] !== undefined
        ? array_obj_mealsAR[i].linkname[3]
        : "";
    name_link005.value =
      array_obj_mealsAR[i].linkname[4] !== undefined
        ? array_obj_mealsAR[i].linkname[4]
        : "";

    if (link_name001.value === "" && array_obj_mealsAR[i].link[0] !== undefined) {
      link_name001.value = "https://youtu.be/".concat(
        array_obj_mealsAR[i].link[0].replace("https://www.youtube.com/embed/", "")
      );
    } else {
      link_name001.value = "";
    }

    if (link_name002.value === "" && array_obj_mealsAR[i].link[1] !== undefined) {
      link_name002.value = "https://youtu.be/".concat(
        array_obj_mealsAR[i].link[1].replace("https://www.youtube.com/embed/", "")
      );
    } else {
      link_name002.value = "";
    }

    if (link_name003.value === "" && array_obj_mealsAR[i].link[2] !== undefined) {
      link_name003.value = "https://youtu.be/".concat(
        array_obj_mealsAR[i].link[2].replace("https://www.youtube.com/embed/", "")
      );
    } else {
      link_name003.value = "";
    }

    if (link_name004.value === "" && array_obj_mealsAR[i].link[3] !== undefined) {
      link_name004.value = "https://youtu.be/".concat(
        array_obj_mealsAR[i].link[3].replace("https://www.youtube.com/embed/", "")
      );
    } else {
      link_name004.value = "";
    }

    if (link_name005.value === "" && array_obj_mealsAR[i].link[4] !== undefined) {
      link_name005.value = "https://youtu.be/".concat(
        array_obj_mealsAR[i].link[4].replace("https://www.youtube.com/embed/", "")
      );
    } else {
      link_name005.value = "";
    }

    meal_input_name.value = array_obj_mealsAR[i].name;
    category00.value = array_obj_mealsAR[i].category;

    //-----------------------------

    new_cook_obj_0.innerHTML = "update";

    st = "update";
    tem = i;
    array_obj_mealsAR[i].ingr;

    let jj;

    my_list = array_obj_mealsAR[i].ingr;
    for (let k = 0; k < array_obj_mealsAR[i].ingr.length; k++) {
      let item_list_1 = {
        name: array_obj_mealsAR[i].ingr[k],
        img: `${array_obj_mealsAR[i].ingr[k] + ".png"}`,
        type: array_obj_mealsAR[i].ingr_obj[k].type,
      };

      my_list_obj.push(item_list_1);
      jj = all_items_name.indexOf(array_obj_mealsAR[i].ingr[k]);

      add_to_my_list_f(
        jj,
        array_obj_mealsAR[i].ingr[k],
        `${path00}${array_obj_mealsEN[i].ingr[k] + ".png"}`,
        array_obj_mealsAR[i].ingr_obj[k].type,
        "all_items_class"
      );

      let _listed_item_ = document.getElementsByClassName("all_items_class");
      _listed_item_[jj].style.background = "#1abc9c";

      let _listed_item__img = document.getElementsByClassName(
        "all_items_class" + "img"
      );
      _listed_item__img[jj].style.boxShadow = "0px 0px 5px 1px rgb(5, 7, 5)";

      _listed_item_[jj].style.boxShadow = "0px 0px 5px 1px rgb(5, 7, 5)";
      let p_ = document.getElementsByClassName("all_items_class" + "p");

      if (lang_ == "en") {
        p_[jj].textContent = "added to my list";
      } else if (lang_ == "ar") {
        p_[jj].textContent = "تمت الاضافة ";
      }
    }
  }

  //--------------clear Data function------------/
  function clearData() {
    name_link001.value = "";
    name_link002.value = "";
    name_link003.value = "";
    name_link004.value = "";
    name_link005.value = "";
    link_name001.value = "";
    link_name002.value = "";
    link_name003.value = "";
    link_name004.value = "";
    link_name005.value = "";
    meal_input_name.value = "";
    category00.value = "";
  }

  //--------------get search mood function------------/
  let search_mood = "title";
  function get_search_mood(id) {
    let searchby = document.getElementById("searchby");
    searchby.focus();
    if (id == "searchbytitle") {
      search_mood = "title";
      searchby.placeholder = "search by title";
    } else if (id == "searchbycategory") {
      search_mood = "category";
      searchby.placeholder = "search by category";
    }
    searchby.value = "";
    showData();
  }

  //-----------------search by function----------------//

  function searchData(value) {
    let table = "";
    //let array_obj_meals_search=JSON.parse(localStorage.all_meals);

    if (search_mood == "title") {
      for (let i = 0; i < array_obj_meals.length; i++) {
        if (array_obj_meals[i].name.includes(value.toLowerCase())) {
          table += `
          <tr>
          <td>${i}</td>
          <td>${array_obj_mealsAR[i].name}</td>
          <td>${array_obj_mealsAR[i].category}</td>
          <td><button onclick="view_data(${i})" id="view">view</td>
          <td><button onclick="update_data(${i})" id="update">update</td>
          <td><button onclick="delete_data(${i})" id="delete">delete</td>  
          </tr>`;
        }
      }
    } else if (search_mood == "category") {
      search_mood = "category";

      for (let i = 0; i < array_obj_meals.length; i++) {
        if (array_obj_meals[i].category.includes(value.toLowerCase())) {
          table += `
          <tr>
          <td>${i}</td>
          <td>${array_obj_mealsAR[i].name}</td>
          <td>${array_obj_mealsAR[i].category}</td>
          <td><button onclick="view_data(${i})" id="view">view</td>
          <td><button onclick="update_data(${i})" id="update">update</td>
          <td><button onclick="delete_data(${i})" id="delete">delete</td>
          
          </tr>`;
        }
      }
    }

    document.getElementById("tbody").innerHTML = table;
  }

  let div_video_2 = document.getElementsByClassName("cook_now_videos");
  let table556 = document.getElementById("table_div");
  div_video_2[0].style.display = "none";
  function view_data(i) {
    div_video_2[0].style.display = "flex";
    let meals = array_obj_mealsAR;

    video_maker(
      meals[i].link,
      meals[i].name,
      meals[i].ingr,
      meals[i].linkname,
      meals[i].ingr
    );

    table556.style.display = "none";
  }

  //---------------function to creat video list-----------//
  function video_maker(link_i, name_, info_, linkNName, Ingr) {
    let vvva = document.getElementsByClassName("video-list");
    vvva[0].style.display = "block";
    while (vvva[0].hasChildNodes()) {
      vvva[0].removeChild(vvva[0].firstChild);
    }

    let cancel_button = document.createElement("button");
    cancel_button.id = "video_list_cancel";
    cancel_button.classList.add("cancel_button");
    cancel_button.innerHTML = "x";

    cancel_button.addEventListener("click", function () {
      table556.style.display = "block";
      div_video_2[0].style.display = "none";

      let vvv = document.getElementsByClassName("video-list");
      while (vvv[0].hasChildNodes()) {
        vvv[0].removeChild(vvv[0].firstChild);
      }
    });
    vvva[0].appendChild(cancel_button);

    for (let i = 0; i < link_i.length; i++) {
      let h3_ingn = document.createElement("h4");
      h3_ingn.style.margin = "10px";

      let viddiv = document.createElement("div");
      viddiv.classList.add("vid");
      let vidd = document.createElement("iframe");
      vidd.style.width = "560px";
      vidd.style.height = "315px";
      vidd.setAttribute("allowfullscreen", "");
      vidd.src = link_i[i];
      vidd.title = "YouTube video player";
      let vvv = document.getElementsByClassName("video-list");
      let h3_ch_n = document.createElement("h3");

      h3_ch_n.innerHTML = linkNName[i];
      h3_ch_n.style.color = "#1abc9c";

      h3_ch_n.classList.add("titlev");

      if (lang_ == "en") {
        h3_ingn.innerHTML = `ingredents.. ${Ingr.join(" ,  ")}`;
        h3_ingn.style.color = "#1abc9c";
      } else if (lang_ == "ar") {
        h3_ingn.innerHTML = ` المكونات ... ${Ingr.join(" ,  ")} `;
        h3_ingn.style.color = "#1abc9c";
      }

      viddiv.appendChild(h3_ch_n);
      viddiv.appendChild(h3_ingn);
      viddiv.appendChild(vidd);
      vvv[0].appendChild(viddiv);
    }
  }
