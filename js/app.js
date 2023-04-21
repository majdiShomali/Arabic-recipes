


      
        render()
        render0()
        function render(){

          for(let i=0;i<1;i++){
        let cards = document.getElementById("cards");
        cards.classList.add("cardContainer");

        let card = document.createElement("div");
        card.classList.add("card");
        cards.appendChild(card);

        let image = document.createElement("img");
        image.src ="Images/card.jpg";
        card.appendChild(image);

        let div0 = document.createElement("div");
        div0.classList.add("cardContent");
        card.appendChild(div0);

        let p1 = document.createElement("p");
        p1.textContent= "Lorem ipsum dolor sit amet.";
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
        }

      }



      function render0(){

        for(let i=0;i<1;i++){
      let cards = document.getElementById("cardsSweets");
      cards.classList.add("cardContainer");

      let card = document.createElement("div");
      card.classList.add("card");
      cards.appendChild(card);

      let image = document.createElement("img");
      image.src ="Images/card.jpg";
      card.appendChild(image);

      let div0 = document.createElement("div");
      div0.classList.add("cardContent");
      card.appendChild(div0);

      let p1 = document.createElement("p");
      p1.textContent= "Lorem ipsum dolor sit amet.";
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
      }

    }






        let LeftButton =document.getElementById("mealsLeftButton")
        let RightButton =document.getElementById("mealsRightButton")



        