console.log ('Estás ejecutando la versión de jQuery:' + $ .fn.jquery);
let jsonLicores = {};
$.ajax({
    url: "json/api.json",
    type: "GET",
    datatype: "json",
    success: function(respuesta){
       jsonLicores = respuesta
       console.log("Acceso A JSON Listo")
       console.log(jsonLicores)

    },
    error: function(){
        console.log("No se ha podido obtener la informacion")
    }
})
$( document ).ready(function() {
        MaquetarProductos(jsonLicores);
        ObtenerDatosLocalStorage();
        MostrarDatosCarrito();
        BotonSeleccionado(jsonLicores);
        $(".loader-container").fadeOut(1000);
  });


//Dibujar HTM con Template, Fragmen y Json
function MaquetarProductos(arrayElementos) {
    const template = document.querySelector('#template-productos').content;
    let fragment = document.createDocumentFragment();
    arrayElementos.forEach(x => {
        template.querySelector('img').setAttribute('src', x.image);
        template.querySelector('h5').textContent = x.name;
        template.querySelector('p').textContent = x.description;
        template.querySelector('p span').textContent = number_format(x.price);
        template.querySelector('button').dataset.id = x.id;
        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
        
    })
    contenedorProductos.appendChild(fragment);
}


//Detectar Producto Seleccionado al realizar Click en algun boton
function BotonSeleccionado(jsonLicores) {
    const TodosLosBotones = document.querySelectorAll('.btn-danger');
    TodosLosBotones.forEach(btn => {
        btn.addEventListener('click', () => {
           const xencontrado = jsonLicores.find(item => item.id == btn.dataset.id); //Extraer los Datos del Producto Seleccionado, si existe en BD Jason
           xencontrado.cantidad = 1; //Agregar campo cantidad a xproducto con valor 1
           if (CarritoCompras.hasOwnProperty(xencontrado.id)){  //Verificar si el producto seleccionado ya existe en el carrito
                 xencontrado.cantidad= CarritoCompras[xencontrado.id].cantidad + 1; //Si existe en carrito aumentar en 1;
           }
           CarritoCompras[xencontrado.id] = { ...xencontrado}; //Reemplazar registro producto seleccionado en carrito con xproducto
           localStorage.setItem("datosCarrito",JSON.stringify(CarritoCompras))
           MostrarDatosCarrito();
           
         
        })
    })
}   

function MostrarDatosCarrito(){
    items.innerHTML =''
    const template = document.querySelector('#template-carrito').content
    const fragment = document.createDocumentFragment()

    Object.values(CarritoCompras).forEach(producto => {
        template.querySelector('img').setAttribute('src', producto.image);
        template.querySelectorAll('td')[0].textContent = producto.description;
        template.querySelectorAll('td')[1].textContent = producto.cantidad;
        template.querySelectorAll('td')[2].textContent = "$" + number_format(producto.price).toString()
        template.querySelector('span').textContent = number_format(producto.price * producto.cantidad);
        template.querySelector('.btn-info').dataset.id = producto.id;
        template.querySelector('.btn-danger').dataset.id = producto.id;
        template.querySelector('.btn-warning').dataset.id = producto.id;
        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
    })
    items.appendChild(fragment);
    MostrarFooterCarrito();
    AumentarDisminuir(CarritoCompras);
}

const footer= document.querySelector('#footer-carrito')
function MostrarFooterCarrito(){
    footer.innerHTML= '';
    if (Object.values(CarritoCompras).length === 0){
        footer.innerHTML = '<th scope="row" colspan=5">Carrito sin Productos</th>';
        return
    }
    const template=document.querySelector('#template-footer').content;
    const fragment=document.createDocumentFragment();

    //Sumar Totales por Producto
    const xtotal = Object.values(CarritoCompras).reduce((xsuma,{cantidad,price}) => xsuma+(cantidad * price),0);
    template.querySelector('span').textContent = number_format(xtotal,0);
    const clone = template.cloneNode(true);
    fragment.appendChild(clone);
    footer.appendChild(fragment);
    const boton= document.querySelector('#vaciar-carrito')
    boton.addEventListener('click', () => {
            CarritoCompras = {};
            localStorage.removeItem("datosCarrito")
            MostrarDatosCarrito();
    })
    
}

function AumentarDisminuir(CarritoCompras){
    const BotonAumentar= document.querySelectorAll('#items .btn-info');
    const BotonDisminuir = document.querySelectorAll('#items .btn-danger');
    const BotonEliminar = document.querySelectorAll('#items .btn-warning');
    BotonAumentar.forEach(btn => {
        btn.addEventListener('click', () =>{
            const xproducto = CarritoCompras[btn.dataset.id];
            xproducto.cantidad ++;
            CarritoCompras[btn.dataset.id] = { ...xproducto};
            localStorage.setItem("datosCarrito",JSON.stringify(CarritoCompras))
            MostrarDatosCarrito();
        })
    })

    BotonDisminuir.forEach(btn => {
        btn.addEventListener('click', () =>{
            const xproducto = CarritoCompras[btn.dataset.id];
            xproducto.cantidad --; 
            if (xproducto.cantidad === 0){
                delete CarritoCompras[btn.dataset.id];
            }else{
                CarritoCompras[btn.dataset.id] = { ...xproducto};
            }
            localStorage.setItem("datosCarrito",JSON.stringify(CarritoCompras))
            MostrarDatosCarrito();
        })
    }) 

    BotonEliminar.forEach(btn => {
        btn.addEventListener('click', () =>{
            const xproducto = CarritoCompras[btn.dataset.id];
            if (CarritoCompras.hasOwnProperty(xproducto.id)){
                delete CarritoCompras[btn.dataset.id];
            }
            localStorage.setItem("datosCarrito",JSON.stringify(CarritoCompras))
             MostrarDatosCarrito();
        })
    }) 
}

function ObtenerDatosLocalStorage(){
    if(localStorage.getItem('datosCarrito')===null){
        CarritoCompras={};
        console.log('No existen Datos en Local Storage')
    }else{
        CarritoCompras = JSON.parse(localStorage.getItem('datosCarrito'));
    }
}

function finalizarCompra(){
   	alert("Gracias Por su Compra....");
    CarritoCompras = {};
    localStorage.removeItem("datosCarrito");
    MostrarDatosCarrito();
}