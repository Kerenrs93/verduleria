var array=[];
load();

function vegetablesValidation() 
{
    let reg = new RegExp('^\\d+$');
    let quantity= document.getElementById("cant");
    let pedido = document.getElementById("check");
    if (reg.test(quantity.value)) 
    {
        validateQuantity();
    }else{
        // let ref = document.getElementById( 'cant' );
        // let content = document.createElement( 'p' ); 
        // content.textContent = "Solo se permiten números";
        // content.style.color="red";
        // ref.parentNode.insertBefore( content, ref.nextSibling );
        // setTimeout(()=>ref.parentNode.removeChild(content),5000);
        let active=pedido.getAttribute("data-active");
        let msj="Solo se permiten números";
        msjError(pedido,active,msj);
    }
}



function validateQuantity() 
{
    let quantity= new Number (document.getElementById("cant").value);
    let data = document.querySelector(".info");
    let id=data.getAttribute("id");
    let quantityTotal=new Number (data.getAttribute('data-quantity'));
    let description=data.getAttribute('data-description');
    let price=data.getAttribute('data-price');
    let color = quantity > 4 ? "green" : "blue";
    if(quantity < quantityTotal){
        
        var object={
            id:`id${id}`,
            quantity:`${quantity}`,
            description:`${description}`,
            price:`${price}`,
            subtotal: "",
            descuento: "",
            IVA: "",
            total:"",
            color:color
        };
        array.push(object);
        document.getElementById("loadTable").disabled = false;
    }else{
        
        console.log("no se puede reservar");
        console.log(`cantidad que esta reservando ${quantity}`);
        console.log(`cantidad que tenemos ${quantityTotal}`);
    }
}


function load() {
    var pedido = document.getElementById("check");


    pedido.addEventListener("focus", function( event ) {
    event.target.style.background = "white";    
    }, true);
    
    pedido.addEventListener("blur", function( event ) {
        let quantity= new Number (document.getElementById("cant").value);
        let data = document.querySelector(".info");
        let quantityTotal=new Number (data.getAttribute('data-quantity'));

        if(quantity > quantityTotal)
        {
            let active=pedido.getAttribute("data-active");
            event.target.style.background = "red"; 
            let msj="No contamos con la cantidad del producto que requiere";
            msjError(pedido,active,msj);
        }
    }, true);
  }


function loadTable()
{
    let descuento=0;
    let precioDescuento=0;
    let priceIva=0;
    let iva=0;
    let montoTotal=0;
    let cantProdut=array.length;
    let cont=0;
    let bill= document.getElementById("bill");

    bill.style.display = "block";//abre la tabla

    let row="";

    array.forEach(function(data) {
        let subtotal=data.quantity*data.price;
        if(cantProdut> 4 || data.quantity>4 ){
            descuento=subtotal*(0.05);
            precioDescuento=subtotal-descuento;
            iva=precioDescuento*(0.13);
            priceIva=precioDescuento+iva;
        }else{
            iva=subtotal*(0.13);
            priceIva=subtotal+iva;
        }
        
        row +=`
            <tr>
                <td>${data.quantity}</td>
                <td>${data.description}</td>
                <td>${data.price}</td>
                <td>${subtotal}</td>
                <td style="color:${data.color};">${precioDescuento}</td>
                <td style='color:${data.color}'>${priceIva}</td>
            </tr>
        `;
        console.log(data.color);
        document.getElementById('product').innerHTML=row;
        montoTotal=priceIva+montoTotal;
    });

    let end=document.getElementById("end");
    end.setAttribute("data-total",montoTotal);
    document.getElementById("loadTable").disabled = true;
}

function total() {
    let end=document.getElementById("end");
    let montoTotal= end.getAttribute("data-total");
    alert(`el monto total a cancelar es ${montoTotal}`);
}

function msjError(pedido,active,msj) {
    if(active=="true"){
        pedido.setAttribute('data-active', "false");
        let ref = document.getElementById( 'cant' );
        let content = document.createElement( 'p' ); 
        content.textContent = msj;
        content.style.color="red";
        ref.parentNode.insertBefore( content, ref.nextSibling );
        setTimeout(()=>{ref.parentNode.removeChild(content);pedido.setAttribute('data-active', "true")}, 5000);// elimar despues de 10 segundos
    } 
}