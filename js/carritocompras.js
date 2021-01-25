const licores = [
    {
    "id": "CER001",
    "name": "Cristal",
    "description": "Cerveza Cristal Pack 6 un. 355 cc. c/u",
    "price": 2700,
    "image":"img/CervezaCristal.jpg",
    "amount":0,
    "avaliable":true
},{
    "id": "CER002",
    "name": "Escudo",
    "description": "Cerveza Escudo Pack 6 un. 470 cc. c/u",
    "price": 3200,
    "image":"img/CervezaEscudo.jpg",
    "amount":0,
    "avaliable":true
},{
    "id": "CER003",
    "name": "Royal",
    "description": "Cerveza Royal Pack 6 un. 355 cc. c/u",
    "price": 4000,
    "image":"img/CervezaRoyal.jpg",
    "amount":0,
    "avaliable":true
},{
    "id": "RON001",
    "name": "Barceló",
    "description": "Ron añejo Barceló 750ml.",
    "price": 8750,
    "image":"img/ron-barcelo.jpg",
    "amount":0,
    "avaliable":true
},{
    "id": "RON002",
    "name": "Abuelo",
    "description": "Ron Añejado 1Lt.",
    "price": 8990,
    "image":"img/Ron-Abuelo.jpg",
    "amount":0,
    "avaliable":true
},{
    "id": "RON003",
    "name": "Bacardi",
    "description": " Ron Bacardi 35°, 750 cc.",
    "price": 8500,
    "image":"img/Ron-Bacardi.png",
    "amount":0,
    "avaliable":true
 },{
    "id": "WIS001",
    "name": "Chivas Regals",
    "description": "Whisky 12 años 40° 750cc.",
    "price": 32500,
    "image":"img/Wisky-ChivasRegals.jpg",
    "amount":0,
    "avaliable":true
},{
   "id": "WIS002",
   "name": "JhoniWakers",
   "description": "Whisky Johnnie Walker 750 cc 40° Red Label",
   "price": 21230,
   "image":"img/Wisky-JhoniWakers.jpg",
   "amount":0,
   "avaliable":true
},{
   "id": "WIS003",
   "name": "JacksDaniels",
   "description": "Whisky etiqueta negra 40° 750 cc.",
   "price": 32500,
   "image":"img/Wisky-JacksDaniels.jpg",
   "amount":0,
   "avaliable":true
},{
    "id": "VOD001",
    "name": "Skyy",
    "description": "Vodka Skyy 750 cc. raspberry infusión",
    "price": 9390,
    "image":"img/Vodka-Skyy.jpg",
    "amount":0,
    "avaliable":true  
},{
    "id": "VOD002",
    "name": "Eristoff",
    "description": "Vodka Eristoff Black 18° 750 cc.",
    "price": 11200,
    "image":"img/Vodka-Eristof.jpg",
    "amount":0,
    "avaliable":true  
},{
    "id": "VOD003",
    "name": "Absolut",
    "description": "Vodka Absolut Kurant  750 cc.",
    "price": 10990,
    "image":"img/Vodka-Absolut.jpg",
    "amount":0,
    "avaliable":true  
},{
    "id": "PIS001",
    "name": "Mistral",
    "description": "Pisco Mistral 46° 750 cc.",
    "price": 8390,
    "image":"img/Pisco-Mistral.jpg",
    "amount":0,
    "avaliable":true  
},{
    "id": "PIS002",
    "name": "Tresr Erres",
    "description": "Pisco Tres Erres 40° 700 cc.",
    "price": 8250,
    "image":"img/Pisco-TresErres.jpg",
    "amount":0,
    "avaliable":true  

},{
    "id": "PIS003",
    "name": "Alto del Carmen",
    "description": "Pisco 35° 750 cc",
    "price": 10990,
    "image":"img/Pisco-AltodelCarmen.jpg",
    "amount":12990,
    "avaliable":true
}]

const contenedorProductos= document.querySelector('#contenedor-productos');
MaquetarProductos(licores);
BotonSeleccionado(licores);

//MAQUETAR HTML CON TEMPLATE, FRAGMENT Y JSOM
function MaquetarProductos(licores) {
    const template = document.querySelector('#template-productos').content;
    let fragment = document.createDocumentFragment();
    licores.forEach(producto => {
        //console.log(producto)
        template.querySelector('img').setAttribute('src', producto.image);
        template.querySelector('h5').textContent = producto.name;
        template.querySelector('p').textContent = producto.description;
        template.querySelector('p span').textContent = number_format(producto.price,0);
        template.querySelector('button').dataset.id = producto.id;
        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
        
    })
    contenedorProductos.appendChild(fragment);
}

// OOBETO DONDE QUEDARAN EL DETALLE DE LOS PRODUCTOS SELECCIONADOS.
 let CarritoCompra = {}

//DETECTAR ARTICULO SELECCIONADO AL REALIZAR CLICK EN ALGUN BOTON
function BotonSeleccionado(licores) {
    const TodosLosBotones = document.querySelectorAll('.card button');
    TodosLosBotones.forEach(btn => {
        btn.addEventListener('click', () => {
          //EXTRAER LOS DATOS DEL PRODUCTO SELECCIONADO SI EXISTE EN BD JASON
           const xproducto = licores.find(item => item.id === btn.dataset.id);
           //AGREGAR CAMPO CANTIDAD A XPRODUCTO
           xproducto.cantidad = 1;
           //VERIFICAR SI EL PRODUCTO SELECCIONADO YA EXISTE EN CARRITO
           if (CarritoCompra.hasOwnProperty(xproducto.id)){
               // SI EXISTE EN CARRITO AUMENTAR CANTIDAD EN 1 
               xproducto.cantidad=  CarritoCompra[xproducto.id].cantidad + 1;
            }
           //REEMPLAZAR REGISTRO DEL PRODUCTO SELECCIONADO EN CARRITO DE COMPRAS CON XPRODUCTO
           CarritoCompra[xproducto.id] = { ...xproducto};
          
           MostrarDatosCarrito();
        })
    })
}   

function MostrarDatosCarrito(){
    items.innerHTML=''
    const template = document.querySelector('#template-carrito').content
    const fragment = document.createDocumentFragment()

    Object.values(CarritoCompra).forEach(producto => {
        template.querySelector('th').textContent = producto.id
        template.querySelectorAll('td')[0].textContent = producto.description
        template.querySelectorAll('td')[1].textContent = producto.cantidad
        template.querySelector('span').textContent = producto.price * producto.cantidad
        const clone = template.cloneNode(true)
        fragment.appendChild(clone)
    })
items.appendChild(fragment)
}

function number_format(amount, decimals) {

    amount += ''; // por si pasan un numero en vez de un string
    amount = parseFloat(amount.replace(/[^0-9\.]/g, '')); // elimino cualquier cosa que no sea numero o punto

    decimals = decimals || 0; // por si la variable no fue fue pasada

    // si no es un numero o es igual a cero retorno el mismo cero
    if (isNaN(amount) || amount === 0) 
        return parseFloat(0).toFixed(decimals);

    // si es mayor o menor que cero retorno el valor formateado como numero
    amount = '' + amount.toFixed(decimals);

    var amount_parts = amount.split('.'),
        regexp = /(\d+)(\d{3})/;

    while (regexp.test(amount_parts[0]))
        amount_parts[0] = amount_parts[0].replace(regexp, '$1' + '.' + '$2');

    return amount_parts.join('.');
}