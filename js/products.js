loadJSON()



function loadJSON() {   //busca el archivo json 

    var object = new XMLHttpRequest();
    object.overrideMimeType("application/json");
    object.open('GET', 'products.json', true); // 
    object.onreadystatechange = function () {
    if (object.readyState == 4 && object.status == "200") //verifica que este completa y que no hubo erroes
    {
       loadProducts(object.responseText);
    }
    };
    object.send(null);  
 }


function loadProducts(products) 
{
    var json = JSON.parse(products);
    var div=document.querySelector('#productos');
    json.products.forEach(function(data, index) {
        div.innerHTML+=
        `<div class="vegetable" id="vegetales">
            <img src="${data.image}" alt="${data.description}">
            <div class="texto">
                <p>
                    Id : ${data.id},</p>
                    Descripcion: ${data.description},</p>
                    Precio: ${data.price},</p>
                    Cantidad: ${data.quantity},</p>
                    Fecha: ${data.date},
                </p>
            </div> 
            <div class="cart"  id="carrito" onclick="buy()">
                <img src="../img/carrito2.png" alt="Carrito de COmpra">
            </div>
        </div>`
    });
 }

 function buy() 
 {
    var modal = document.getElementById("myModal");
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
 }