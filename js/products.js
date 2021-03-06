loadJSON();


function loadJSON() {   //busca el archivo json 
    var products=[
        {
            id : 0,
            description:"Banano",
            price: 20,
            quantity: 300,
            date: "15-07-2019",
            image: "https://cdn.pixabay.com/photo/2015/01/27/18/32/banana-614090_960_720.jpg"
        },
        {
            id : 1,
            description:"Manzanas",
            price:200,
            quantity: 50,
            date: "15-07-2019",
            image: "https://media.istockphoto.com/photos/red-apples-picture-id1141708425?b=1&k=6&m=1141708425&s=170667a&w=0&h=D3ysTwfTmq7Xny5T19Ef4EMOmwGgtYIYUsgiZwnvDHE="
        },
        {
            id : 2,
            description:"Peras",
            price:200,
            quantity:40,
            date: "15-07-2019",
            image: "https://media.istockphoto.com/photos/anjou-pears-picture-id610032764?b=1&k=6&m=610032764&s=170667a&w=0&h=t11ZOno7oPZiKlMDMOysehvXn_7woeEgpTuaV1-AjCw="
        },
        {
            id : 3,
            description:"Sandía",
            price:20,
            quantity:1000,
            date: "15-07-2019",
            image: "https://cdn.pixabay.com/photo/2015/06/19/16/48/watermelon-815072__340.jpg"
        },
        {
            id : 4,
            description:"Papaya",
            price:800,
            quantity:30,
            date: "15-07-2019",
            image: "https://media.istockphoto.com/photos/papaya-with-seed-in-old-wood-picture-id1155972962?b=1&k=6&m=1155972962&s=170667a&w=0&h=Rcohaw41hoHoonyUEk9gHgujYSZpXMA2e0pduB6AVeY="
        },
        {
            id : 5,
            description:"Naranjas",
            price:100,
            quantity:200,
            date: "15-07-2019",
            image: "https://cdn.pixabay.com/photo/2017/12/29/16/34/fruit-3048001_960_720.jpg"
        },
        {
            id : 6,
            description:"Tomate",
            price:150,
            quantity:400,
            date: "15-07-2019",
            image: "https://cdn.pixabay.com/photo/2017/05/03/20/49/tomato-2282101_960_720.jpg"
        },
        {
            id : 7,
            description:"Yuca",
            price:500,
            quantity:75,
            date: "15-07-2019",
            image: "https://cdn.pixabay.com/photo/2016/04/25/21/35/yuca-1353258_960_720.jpg"
        },
        {
            id : 8,
            description:"Chayote",
            price:175,
            quantity:125,
            date: "15-07-2019",
            image: "https://cdn.pixabay.com/photo/2020/06/19/21/42/chayote-5318923_960_720.jpg"
        },
        {
            id : 9,
            description:"Piña",
            price:600,
            quantity:7,
            date: "15-07-2019",
            image: "https://cdn.pixabay.com/photo/2020/06/19/21/46/pineapple-5318954__340.jpg"
        },
        {
            id : 10,
            description:"Tiquisque",
            price:125,
            quantity:85,
            date: "15-07-2019",
            image: "https://cdn.godutchrealty.com/wp-content/uploads/2015/10/How-to-cook-Tico-Vegetables-4.jpg"
        },
        {
            id : 11,
            description:"Melón",
            price:500,
            quantity:17,
            date: "15-07-2019",
            image: "https://cdn.pixabay.com/photo/2018/05/27/16/30/melon-3433835_960_720.jpg"
        },
        {
            id : 12,
            description:"Brocoli",
            price:850,
            quantity:15,
            date: "15-07-2019",
            image: "https://cdn.pixabay.com/photo/2014/10/22/18/34/broccoli-498600_960_720.jpg"
        },
        {
            id : 13,
            description:"Camote",
            price:125,
            quantity:85,
            date: "15-07-2019",
            image: "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2017/10/camotemorado2.jpg"
        },
        {
            id : 14,
            description:"Zanahoria",
            price:80,
            quantity:90,
            date: "15-07-2019",
            image: "https://cdn.pixabay.com/photo/2017/06/09/16/39/carrots-2387394_960_720.jpg"
        },
        {
            id : 15,
            description:"Coliflor",
            price:850,
            quantity:15,
            date: "15-07-2019",
            image: "https://cdn.pixabay.com/photo/2016/06/18/21/56/cauliflower-1465732_960_720.jpg"
        },
        {
            id : 16,
            description:"Fresas",
            price:100,
            quantity:2000,
            date: "15-07-2019",
            image: "https://cdn.pixabay.com/photo/2016/05/16/17/59/strawberries-1396330_960_720.jpg"
        },
        {
            id : 17,
            description:"Moras",
            price:10,
            quantity:3000,
            date: "15-07-2019",
            image: "https://cdn.pixabay.com/photo/2016/07/24/23/35/blackberries-1539540_960_720.jpg"
        },
        {
            id : 18,
            description:"Chile",
            price:125,
            quantity:25,
            date: "15-07-2019",
            image: "https://cdn.pixabay.com/photo/2015/06/22/21/58/chilli-818080_960_720.jpg"
        },
        {
            id : 19,
            description:"Platanos",
            price:200,
            quantity:335,
            date: "15-07-2019",
            image: "https://www.lavanguardia.com/files/content_image_mobile_filter/uploads/2018/09/18/5e997969c9c9a.jpeg"
        },
        {
            id : 20,
            description:"Cebolla",
            price:100,
            quantity:500,
            date: "15-07-2019",
            image: "https://cdn.pixabay.com/photo/2016/05/16/22/47/onions-1397037_960_720.jpg"
        }    
    ];
    loadProducts(products);
 }


function loadProducts(products) 
{
    var div=document.querySelector('#productos');
    products.forEach(function(data) {
        div.innerHTML+=
        `<div class="vegetable" id="vegetales">
            <img src="${data.image}" alt="${data.description}">
            <div class="texto">
                <p>
                    <label>Id : ${data.id}</label>
                    </br>
                    <label>Descripcion: ${data.description}</label>
                    </br>
                    <label>Cantidad: ${data.quantity}</label>
                    </br>
                    <label>Precio unitario: ${data.price} colones</label>
                    </br>
                    <label>Fecha: ${data.date}</label>
                </p>
            </div> 
            <div class="cart"  id="carrito" onclick="buy(${data.id},${data.quantity},'${data.description}',${data.price})">
                <img src="../img/carrito2.png" alt="Carrito de Compra">
            </div>
        </div>`
    });
 }

 function buy(id,quantity,description, price) 
 {
    var modal = document.getElementById("myModal");
    var info=document.querySelector(".info");
    modal.style.display = "block";//abre el modal
    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
    }
    info.setAttribute('id',id);
    info.setAttribute('data-quantity',quantity);
    info.setAttribute('data-description',description);
    info.setAttribute('data-price',price);
    document.getElementById("loadTable").disabled = true;
 }

