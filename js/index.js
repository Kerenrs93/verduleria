function validation(){

    var numCedula= document.getElementById('ced'),
        format = /^[1-9]-\d{4}-\d{4}$/;
        // Creamos el elemento p, dinámicamente, para colocar el mensaje de error de cedula invalida
    var element = document.createElement('p');
    var content=element.appendChild(document.createTextNode('Cédula con formato inválido'));

    if (format.test(numCedula.value)) 
    {
        location.href="./view/products.html";
    } else 
    {
        numCedula.style.cssText='border: 2px solid red;border-radius: 5px;padding: 5px;';

        // Div de referencia para saber debajo de cual elemento se va a agreagar
        var ref = document.getElementById('ced').getElementsByTagName('input')[0];
        // Y ahora lo agregamos al DOM
        document.getElementById('opt').insertBefore(content,ref);
        setTimeout(()=>document.getElementById('opt').removeChild(content), 10000); // Elimina el elemento despues de 10 segundos
    }
}