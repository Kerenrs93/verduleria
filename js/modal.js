var array=[]
function vegetablesValidation() 
{
    var reg = new RegExp('^\\d+$');
    var quantity= document.getElementById("cant");
    if (reg.test(quantity.value)) 
    {
        //console.log("valor inicial "+quantity.value);
        validateQuantity()
    }else{
        var element = document.createElement('p');
        element.setAttribute("color","red");
        var content=element.appendChild(document.createTextNode('Solo se permiten números'));
        var ref = document.getElementById('cant').getElementsByTagName('input')[0];
        document.getElementById('check').insertBefore(content,ref);
        setTimeout(()=>document.getElementById('check').removeChild(content), 10000); 
        //quantity.focus();
    }
}


function validateQuantity() 
{
    let quantity= new Number (document.getElementById("cant").value);
    let data = document.querySelector(".info");
    let quantityTotal=new Number (data.getAttribute('data-quantity'));
    let description=data.getAttribute('data-description');
    let price=data.getAttribute('data-price');
    if(quantity < quantityTotal){
        console.log("reservado");
        var object={
            quantity:`${quantity}`,
            description:`${description}`,
            price:`${price}`,
            subtotal: "",
            descuento: "",
            IVA: "",
            total:""
        };
        array.push(object);
    }else{
        
        console.log("no se puede reservar");
        console.log(`cantidad que esta reservando ${quantity}`);
        console.log(`cantidad que tenemos ${quantityTotal}`);
    }
}


function loadTable()
{
    var descuento=0;
    var precioDescuento=0;
    var priceIva=0;
    var iva=0;
    var cantProdut=array.length;
    let bill= document.getElementById("bill");
    bill.style.display = "block";//abre la tabla
    let column=document.querySelector('#product');
    console.log(array["quantity"]);
    array.forEach(function(data) {
        let subtotal=data.quantity*data.price;
        if(cantProdut> 4 || data.quantity>4 ){
            descuento=subtotal*(0.05);
            precioDescuento=subtotal-descuento;
            iva=precioDescuento*(0.13);
            console.log(precioDescuento);
            priceIva=precioDescuento+iva;
        }else{
            iva=subtotal*(0.13);
            priceIva=subtotal+iva;
        }
        
        column.innerHTML+=`
            <tr >
                <td>${data.quantity}</td>
                <td> ${data.description}</td>
                <td>${data.price}</td>
                <td>${subtotal}</td>
                <td>${precioDescuento}</td>
                <td>${priceIva}</td>
            </tr>
        `;
    });
}

//   function checkForm(form)
//   {
//    var reg = new RegExp('^\\d+$');  //Expresion regular solo numeros

//     // Si está vacío
//     if(form.inputfield.value == "") {
//      var div=document.querySelector('#validar');
//      div.innerHTML+=`<p id='myp'style='color:red'> No se permite vacíos </p>`;
//      setTimeout(function(){ document.getElementById("myp").innerHTML = "";}, 2000);

//      form.inputfield.focus();    //Enfocando el input
//       return false;
//     } else{

//     }
//     if(!reg.test(form.inputfield.value)) {  // Si no cumple con la expresion regular
//      var div=document.querySelector('#validar');
//      div.innerHTML+=`<p id='myp' style='color:red'> Solo se permiten números </p> `;
//      setTimeout(function(){ document.getElementById("myp").innerHTML = "";}, 2000);
    
//      form.inputfield.focus();
//      return false;
//     }
//     // Si cumple con todo
//       alert("Bienvenido!!");
//       return true;
//   }

