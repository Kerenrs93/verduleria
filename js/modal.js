var array=[]
function vegetablesValidation() 
{
    var reg = new RegExp('^\\d+$');
    var quantity= document.getElementById("cant");
    if (reg.test(quantity.value)) 
    {
        validateQuantity(quantity.value)
    }else{
        var element = document.createElement('p');
        element.setAttribute("color","red");
        var content=element.appendChild(document.createTextNode('Solo se permiten números'));
        var ref = document.getElementById('cant').getElementsByTagName('input')[0];
        document.getElementById('check').insertBefore(content,ref);
        setTimeout(()=>document.getElementById('check').removeChild(content), 10000); 
        quantity.focus();
    }
}


function validateQuantity(quantity) 
{
    var total = document.querySelector(".info");
    id=total.getAttribute('id');
    description=total.getAttribute('data-description');
    price=total.getAttribute('data-price');
    quantityTotal=total.getAttribute('data-quantity');

    if(quantityTotal > quantity){
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
        console.log(array);
        // var bill=document.getElementsByClassName("bill");
        // bill.style.display = "block";//abre la tabla
        console.log("Comprado");
    }else{
        
        console.log("no tenemos esa cantidad");
        console.log(`cantidad que esta comprando ${quantity}`);
        console.log(`cantidad que tenemos ${quantityTotal}`);
        
    }
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

