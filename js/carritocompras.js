const licores = [
    {
    "id": "Cer001",
    "name": "Cerveza Crital",
    "description": "Pack 6 un. 355 cc. c/u",
    "price": 2700,
    "image":"CervezaCristal.jpg",
    "amount":0,
    "avaliable":true
},{
    "id": "cer002",
    "name": "Cerveza Escudo",
    "description": "Pack 6 un. 470 cc. c/u",
    "price": 3200,
    "image":"CervezaEscudo.jpg",
    "amount":0,
    "avaliable":true
},{
    "id": "cer003",
    "name": "Cerveza Royal",
    "description": "Pack 6 un. 355 cc. c/u",
    "price": 4000,
    "image":"CervezaRoyal.jpg",
    "amount":0,
    "avaliable":true
},{
    "id": "ron001",
    "name": "Ron Barcelo",
    "description": "Ron añejo Barceló 750ml.",
    "price": 8750,
    "image":"ron-barcelo.jpg",
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
    "image":"Ron-Bacardi",
    "amount":0,
    "avaliable":true
 },{
    "id": "wis001",
    "name": "Whisky Chivas Regals",
    "description": "Whisky 12 años botella 40° 750cc.",
    "price": 32500,
    "image":"Wiski-ChivasRegals.jpg",
    "amount":0,
    "avaliable":true
},{
   "id": "wis002",
   "name": "JacksDaniels",
   "description": "Whisky JacksDaniels 40° 375 cc.",
   "price": 21230,
   "image":"Wisky-JacksDaniels.jpeg",
   "amount":0,
   "avaliable":true
},{
   "id": "wis003",
   "name": "JacksDaniels",
   "description": "Whisky etiqueta negra 40° 750 cc.",
   "price": 32500,
   "image":"Wisky-JhoniWakers.jpeg",
   "amount":0,
   "avaliable":true
},{
    "id": "vod001",
    "name": "Skyy",
    "description": "Vodka Skyy 750 cc. raspberry infusión",
    "price": 9390,
    "image":"Wisky-JhoniWakers.jpeg",
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
    "image":"Vodka-Eristof.jpg",
    "amount":0,
    "avaliable":true  
},{
    "id": "pis001",
    "name": "Mistral",
    "description": "Pisco Mistral 46° 750 cc.",
    "price": 8390,
    "image":"Pisco-Mistral.jpg",
    "amount":0,
    "avaliable":true  
},{
    "id": "pis002",
    "name": "Tresr Erres",
    "description": "Pisco Tres Erres 40° 700 cc.",
    "price": 8250,
    "image":"Pisco-TresErres.jpeg",
    "amount":0,
    "avaliable":true  

},{
    "id": "pis003",
    "name": "Absolut",
    "description": "Vodka Absolut Kurant 750 cc.",
    "price": 10990,
    "image":"Vodka-Absolut.jpeg",
    "amount":0,
    "avaliable":true
}]
MaquetarProductos(licores)
const contenedorProductos= document.querySelector('#contenedor-productos')

const MaquetarProductos = function (licores) {
    const template = document.querySelector('#template-productos').content
    const fragment = document.createDocumentFragment()
    licores.forEach(producto => {
        console.log(producto)
        template.querySelector('img').setAttribute('src', producto.image)

        const clone = template.cloneNode(true)
        fragment.appendChild(clone)
    })
    contenedorProductos.appendChild(fragment)
}