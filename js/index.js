function validation(){

    let numCedula= document.getElementById('ced');
        
    let identification=document.getElementById("cedula").value;
  
   
        if (identification=="physical") 
        {
            format = /^[1-9]-\d{4}-\d{4}$/;
            if (format.test(numCedula.value)) 
            {
                location.href="./view/products.html";
            } else 
            {
                numCedula.style.cssText='border: 2px solid red;border-radius: 5px;padding: 5px;';
                let data = document.querySelector("#msj");
                let active=data.getAttribute("data-active");
                msjError(data,active);        
            }
        } else if (identification=="legal") 
        {
            format = /^[1-9]-\d{3}-\d{6}$/;
            if (format.test(numCedula.value)) 
            {
                location.href="./view/products.html";
            } else 
            {
                numCedula.style.cssText='border: 2px solid red;border-radius: 5px;padding: 5px;';
                let data = document.querySelector("#msj");
                let active=data.getAttribute("data-active");
                msjError(data,active);        
            }
        } 

        
      
    
}

function msjError(data,active) {
    if(active=="true"){
        data.setAttribute('data-active', "false");
        let ref = document.getElementById( 'msj' );//referencia de donde lo vamos a colocar
        let content = document.createElement( 'p' ); // create etiqueta p
        content.textContent = "Cédula con formato inválido";
        content.style.color="red";
        ref.parentNode.insertBefore( content, ref.nextSibling );// insertar debajo de la etiqueta de referencia
        setTimeout(()=>{ref.parentNode.removeChild(content);data.setAttribute('data-active', "true")}, 5000);// elimar despues de 10 segundos
    }  
}