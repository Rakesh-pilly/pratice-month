
//getting the element 
let smallCardDiv = document.getElementById("small_card");


let cardDiv = document.createElement("div");
cardDiv.className = "card-first"


let imgCardDiv = document.createElement("div");
imgCardDiv.className = "img-card";

let cardImg = document.createElement("img");
    cardImg.src = './images/pokemon.jpg';
imgCardDiv.appendChild(cardImg);



let btmCard = document.createElement("div");
btmCard.className = "btm-card"

let p1 = document.createElement("p");
p1.className = "card-title";
p1.innerText = "Pokemon";

let p2 = document.createElement("p");
p2.className = "card-sub";
p2.innerText = "Featured 53,200 posts"

btmCard.append(p1,p2)

cardDiv.appendChild(imgCardDiv);
cardDiv.appendChild(btmCard);


smallCardDiv.appendChild(cardDiv);



let smallImageData = [
    { title: "Halloween", 
        sub: "46,493 Posts",
        img : "./images/hallow.jpeg",
        color: "#3A2845"
    },
    { title: "Extra Life",  
    sub: "453 Posts",
    img: "./images/extra.jpeg",
    color: "#4946B0"
        
    },
    { title: "Pumpkin",  
    sub: "3,654 Posts",
    img: "./images/pumpkin.jpeg",
    color: "#FF7000"
        
    },
    { title: "Funny",  
    sub: "2,697,0173 Posts",
    img: "./images/funny.jpeg",
    color: "#633875"
        
    },
    { title: "Oc",  
    sub: "37,000 Posts",
    img: "./images/oc.jpeg",
    color: "#633875"

        
    },
    { title: "Coronavirus",  
    sub: "35,286 Posts",
    img: "./images/corona.jpeg",
    color: "#51535A"
        
    },
    { title: "Aww",  
    sub: "761,312 Posts",
    img: "./images/gaming.jpeg",
    color: "#60AEBB"
        
    },

];


smallImageData.map(i => {

    let smallCardDiv = document.getElementById("small_card");


let cardDiv = document.createElement("div");
cardDiv.className = "card"


let imgCardDiv = document.createElement("div");
imgCardDiv.className = "img-card";

let cardImg = document.createElement("img");
    cardImg.src = `${i.img}`;
imgCardDiv.appendChild(cardImg);



let btmCard = document.createElement("div");
btmCard.className = "btm-card"
btmCard.style.backgroundColor = `${i.color}`

let p1 = document.createElement("p");
p1.className = "card-title";
p1.innerText = `${i.title}`;

let p2 = document.createElement("p");
p2.className = "card-sub";
p2.innerText = `${i.sub}`;

btmCard.append(p1,p2)

cardDiv.appendChild(imgCardDiv);
cardDiv.appendChild(btmCard);


smallCardDiv.appendChild(cardDiv);

    
})







 fetch("https://pixabay.com/api/?key=23822788-2ef43f026eee1c6166026c6ff&page=1&image_type=photo&pretty=true&per_page=20").then(
    resp => resp.json()
).then(
   function(data){

        let imgsData = data.hits

        imgsData.map( i=>{

            let root = document.getElementById("padds");

            let mainBox = document.createElement("div");
            mainBox.className = "mainBox";
            
            let imgBox = document.createElement("div");
                imgBox.className  = "imgBox";
            
            let imgBoximg = document.createElement("img");
                imgBoximg.src = `${i.previewURL}`

            imgBox.appendChild(imgBoximg); 

            mainBox.appendChild(imgBox);

            //imgbox is completed

            let info_box = document.createElement("div");
                info_box.className = "info_box";
            
            let mainTitle = document.createElement("div");
                mainTitle.className = "main_title";
            let para = document.createElement("p");
                para.innerText = `${i.tags}`

            mainTitle.appendChild(para);
            info_box.appendChild(mainTitle);
           //completed th title 


           let icons = document.createElement("div");
           icons.classList.add("flex");
           icons.classList.add("icons");

           let icon_div = document.createElement("div");
                icon_div.classList = "icon_div";

            let sDiv = document.createElement("div");

            let iconImg = document.createElement("img");
                iconImg.src = "./images/up.svg";
                iconImg.classList = "icons_img";

                sDiv.appendChild(iconImg);
                
                let span1 = document.createElement("span");
                span1.classList = "leter"
                span1.innerText = `${i.likes}`
                
                sDiv.appendChild(span1);
                
             icon_div.appendChild(sDiv);

//for 2 icons incions

let sDiv2 = document.createElement("div");

let iconImg2 = document.createElement("img");
    iconImg2.src = "./images/chat.svg";
    iconImg2.classList = "icons_img";

    sDiv2.appendChild(iconImg2);
    
    let span2 = document.createElement("span");
    span2.classList = "leter"
    span2.innerText = `${i.likes}`
    
    sDiv2.appendChild(span2);
    
 icon_div.appendChild(sDiv2);

 //for the thrid icons_img


 let sDiv3 = document.createElement("div");

let iconImg3 = document.createElement("img");
    iconImg3.src = "./images/look.svg";
    iconImg3.classList = "icons_img";

    sDiv3.appendChild(iconImg3);
    
    let span3 = document.createElement("span");
    span3.classList = "leter"
    span3.innerText = `${i.likes}`
    
    sDiv3.appendChild(span3);
    
 icon_div.appendChild(sDiv3);











            icons.appendChild(icon_div);



           info_box.appendChild(icons);


            mainBox.appendChild(info_box);
            root.appendChild(mainBox);
            
            
            // need to append the mainBox to root
        })

    




   }
).catch( err => console.error(err))



