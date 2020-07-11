function validation(){

    var numCedula= document.getElementById('ced'),
        format = /^[1-9]-\d{4}-\d{4}$/;

    if (format.test(numCedula.value)) 
    {
        location.href="./view/products.html";
    } else 
    {
        numCedula.style.cssText='border: 2px solid red;border-radius: 5px;padding: 5px;';
        let data = document.querySelector("#msj");
        let active=data.getAttribute("data-active");
        
        if(active=="true"){
            console.log(active);
            data.setAttribute('data-active', "false");
            let ref = document.getElementById( 'msj' );//referencia de donde lo vamos a colocar
            let content = document.createElement( 'p' ); // create etiqueta p
            content.textContent = "Cédula con formato inválido";
            content.style.color="red";
            ref.parentNode.insertBefore( content, ref.nextSibling );// insertar debajo de la etiqueta de referencia
            setTimeout(()=>{ref.parentNode.removeChild(content);data.setAttribute('data-active', "true")}, 5000);// elimar despues de 10 segundos
        }else if(active=="false"){
            console.log("TODAVIA NO PUEDE ENTRAR");
        }        
    }
}
