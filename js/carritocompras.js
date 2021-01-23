const licores = [
    {
    "id": "Cer001",
    "name": "Cerveza Cristal",
    "description": "Pack 6 un. 355 cc. c/u",
    "price": 2700,
    "image":"img/CervezaCristal.jpg",
    "amount":0,
    "avaliable":true
},{
    "id": "cer002",
    "name": "Cerveza Escudo",
    "description": "Pack 6 un. 470 cc. c/u",
    "price": 3200,
    "image":"img/CervezaEscudo.jpg",
    "amount":0,
    "avaliable":true
},{
    "id": "cer003",
    "name": "Cerveza Royal",
    "description": "Pack 6 un. 355 cc. c/u",
    "price": 4000,
    "image":"img/CervezaRoyal.jpg",
    "amount":0,
    "avaliable":true
},{
    "id": "ron001",
    "name": "Ron Barcelo",
    "description": "Ron añejo Barceló 750ml.",
    "price": 8750,
    "image":"img/ron-barcelo.jpg",
    "amount":0,
    "avaliable":true
},{
    "id": "ron002",
    "name": "Ron Abuelo",
    "description": "Ron Añejado 1Lt.",
    "price": 8990,
    "image":"img/Ron-Abuelo.jpg",
    "amount":0,
    "avaliable":true
},{
    "id": "ron003",
    "name": "Ron Bacardi",
    "description": "Razz, 35°, 750 cc.",
    "price": 8500,
    "image":"img/Ron-Bacardi.png",
    "amount":0,
    "avaliable":true
 },{
    "id": "wis001",
    "name": "Whisky Chivas Regals",
    "description": "Whisky 12 años botella 40° 750cc.",
    "price": 32500,
    "image":"img/Wisky-ChivasRegals.jpg",
    "amount":0,
    "avaliable":true
},{
   "id": "wis002",
   "name": "JhoniWakers",
   "description": "Whisky Johnnie Walker 750 cc 40° Red Label",
   "price": 21230,
   "image":"img/Wisky-JhoniWakers.jpg",
   "amount":0,
   "avaliable":true
},{
   "id": "wis003",
   "name": "JacksDaniels",
   "description": "Whisky etiqueta negra 40° 750 cc.",
   "price": 32500,
   "image":"img/Wisky-JacksDaniels.jpg",
   "amount":0,
   "avaliable":true
},{
    "id": "vod001",
    "name": "Skyy",
    "description": "Vodka Skyy 750 cc. raspberry infusión",
    "price": 9390,
    "image":"img/Vodka-Skyy.jpg",
    "amount":0,
    "avaliable":true  
},{
    "id": "vod002",
    "name": "Eristoff",
    "description": "Vodka Eristoff Black 18° 750 cc.",
    "price": 11200,
    "image":"img/Vodka-Eristof.jpg",
    "amount":0,
    "avaliable":true  
},{
    "id": "vod003",
    "name": "Absolut",
    "description": "Vodka Absolut Kurant  750 cc.",
    "price": 10990,
    "image":"img/Vodka-Absolut.jpg",
    "amount":0,
    "avaliable":true  
},{
    "id": "pis001",
    "name": "Mistral",
    "description": "Pisco Mistral 46° 750 cc.",
    "price": 8390,
    "image":"img/Pisco-Mistral.jpg",
    "amount":0,
    "avaliable":true  
},{
    "id": "pis002",
    "name": "Tresr Erres",
    "description": "Pisco Tres Erres 40° 700 cc.",
    "price": 8250,
    "image":"img/Pisco-TresErres.jpg",
    "amount":0,
    "avaliable":true  

},{
    "id": "pis003",
    "name": "Alto del Carmen",
    "description": "Pisco 35° 750 cc",
    "price": 10990,
    "image":"img/Pisco-AltodelCarmen.jpg",
    "amount":12990,
    "avaliable":true
}]

const contenedorProductos= document.querySelector('#contenedor-productos')
MaquetarProductos(licores);
BotonSeleccionado(licores);

//MAQUETAR HTML CON TEMPLATE, FRAGMENT Y JSOM
function MaquetarProductos(licores) {
    const template = document.querySelector('#template-productos').content
    let fragment = document.createDocumentFragment()
    licores.forEach(producto => {
        //console.log(producto)
        template.querySelector('img').setAttribute('src', producto.image);
        template.querySelector('h5').textContent = producto.name;
        template.querySelector('p').textContent = producto.description;
        template.querySelector('p span').textContent = producto.price;
        template.querySelector('button').dataset.id = producto.id;
        const clone = template.cloneNode(true)
        fragment.appendChild(clone)
        
    })
    contenedorProductos.appendChild(fragment)
}

//DETECTAR ARTICULO SELECCIONADO AL REALIZAR CLICK EN ALGUN BOTON
function BotonSeleccionado(licores) {
    const TodosLosBotones = document.querySelectorAll('.card button')
    TodosLosBotones.forEach(btn => {
        btn.addEventListener('click', () => {
           console.log(btn.dataset.id)
        })
    })
}   