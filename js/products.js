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
    console.log(json)
    var element = document.createElement("div").appendChild(document.createTextNode('prueba'));
    var ref = document.getElementById('vegetales');
    element.className = "vegetable";
    document.getElementById('productos').insertBefore(element,ref);

    // Creamos el nuevo párrafo
    var nuevo_parrafo = document.createElement("p").appendChild(document.createTextNode('Nuevo párrafo.'));
    
    // Recojemos en una variable el segundo párrafo
    var segundo_p = document.getElementById("padre").getElementsByTagName("p")[1];
    
    // Y ahora lo insertamos
    document.getElementById("padre").insertBefore(nuevo_parrafo,segundo_p);
}