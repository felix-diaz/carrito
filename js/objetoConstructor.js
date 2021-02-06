class carritoDeCompras{
    constructor(jsonLicores, idSeleccionado,cantSolicitada){
        let listaLicores = jsonLicores
        this.XidSeleccionado = idSeleccionado
        this.XcantSolicitada = XcantSolicitada
        this.precio = function(){
            let r = listaLicores.find(r => r.id == this.XidSeleccionado) 
            let xprecio = r.price
            return xprecio  
        }
        this.calculoSubtotal = function(){
        let xsubtotal = this.precio() * this.XcantSolicitada
            return xsubtotal
        }
    }
}