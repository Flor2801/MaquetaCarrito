const carro = document.getElementById("carrito")

const tarjetaCel = document.getElementById("tarjeta-cel")
const botonCel = document.getElementById("compra-cel")
const eliminarCel = document.getElementById("trashCel")
const celularesTotales = document.getElementById("total-cel")
const selectorCel = document.getElementById("value-cel")

const tarjetaPC = document.getElementById("tarjeta-pc")
const botonPc = document.getElementById("compra-pc")
const eliminarPc = document.getElementById("trashPc")
const pcsTotales = document.getElementById("total-pcs")
const selectorPcs = document.getElementById("value-pc")

let tarjetasTotales = document.getElementsByClassName("tarjeta").length
let NOVISIBLES = document.getElementsByClassName("hidden").length
let tarjetasVisibles = document.getElementsByClassName("selected").length
const prodTotales = document.getElementById("productosTotales")
const prodVisibles = document.getElementById("productosVisibles")

prodTotales.textContent = tarjetasTotales



console.log(tarjetasTotales)
console.log(tarjetasVisibles)
console.log(prodTotales)
console.log(prodVisibles)


//////////////////////   AGREGAR PRODUCTOS DESDE EL CATALOGO  /////////////////////////

actualizarVista = () => {
    tarjetasVisibles = document.getElementsByClassName("selected").length
    prodVisibles.textContent = tarjetasVisibles
}


botonCel.onclick = () => {
    const tarjetaCel = document.getElementById("tarjeta-cel")
    tarjetaCel.classList.remove("hidden")
    tarjetaCel.classList.add("selected") 
    carro.appendChild(tarjetaCel)
    actualizarVista()
}

botonPc.onclick = () => {
    const tarjetaPC = document.getElementById("tarjeta-pc")
    tarjetaPC.classList.remove("hidden")
    tarjetaPC.classList.add("selected")
    carro.appendChild(tarjetaPC)
    actualizarVista()
}





//////////////////////   BOTON ELIMINAR DE LA TARJETA  /////////////////////////


eliminarCel.onclick = () => {
    const tarjetaCel = document.getElementById("tarjeta-cel")
    tarjetaCel.classList.add("hidden")
    tarjetaCel.classList.remove("selected") 
    celularesTotales.textContent = 0
    selectorCel.value = 0

    actualizarSubtotal()
    actualizarVista()
}

eliminarPc.onclick = () => {
    const tarjetaPc = document.getElementById("tarjeta-pc")
    tarjetaPc.classList.add("hidden")
    tarjetaPC.classList.remove("selected")
    pcsTotales.textContent = 0
    selectorPcs.value = 0

    actualizarSubtotal()
    actualizarVista()

}


//////////////////////   SELECCION CANTIDAD DE PRODUCTOS  /////////////////////////

selectorCel.onclick = () => {
    const precioCel = document.getElementById("precio-cel")
    const subtotal = document.getElementById("subtotal")
celularesTotales.textContent = selectorCel.value*5000
subtotal.textContent = celularesTotales.textContent

actualizarSubtotal()

}



selectorPcs.onclick = () => {
    const precioPc = document.getElementById("precio-pc")
    const subtotal = document.getElementById("subtotal")
    const pcsTotales = document.getElementById("total-pcs")
pcsTotales.textContent = selectorPcs.value*30000
subtotal.textContent = pcsTotales.textContent

actualizarSubtotal()

}


//////////////////////   SUBTOTAL CARRITO   /////////////////////////

actualizarSubtotal = () => {
    subtotal.textContent = selectorCel.value*5000 + selectorPcs.value*30000
     
}



//////////////////////   SUBTOTAL CHECKOUT   /////////////////////////


const subCheck  = document.getElementById("subtotal-checkout")
const totalCheck = document.getElementById("total-checkout")
const pasarAlcheckout = document.getElementById("finalizar")
const agregaEnvio = document.getElementById("envio")



pasarAlcheckout.onclick = () => {
    subCheck.textContent = subtotal.textContent
    totalCheck.textContent = subtotal.textContent
}


//////////////////////////////////////////////////////////////////

const checkRecargo = document.getElementById("tc")
const checkDescuento = document.getElementById("desc")

const recargoTexto = document.getElementById("text-tc")
const descuentoTexto = document.getElementById("text-desc")


let valorSubtotal = Number(subCheck.textContent)

let valorRecargo = Number(recargoTexto.textContent)



checkRecargo.onclick = () => {
    if (checkRecargo.checked) {
        subtotalConRecargo = valorSubtotal * 0.10
        recargoTexto.textContent = subtotalConRecargo
    }
    else {
        recargoTexto.textContent = "0"
    }
    mostrarTotal()
}

const mostrarTotal = () => {
    let valorTotal = Number(totalCheck.textContent)
    let final = valorTotal + subtotalConRecargo
    totalCheck.textContent = final
}

/////////////////////////////////////////////////////////
/*
actualizarVista = () => {
    prodVisibles.textContent = tarjetasVisibles
    }



/*

const mostrarTotal = () => {
    const valorTotal = Number(totalCheck)
    let precioTotal = valorTotal +  totalRecargo
    totalCheck.textContent = precioTotal
}



/*

agregaTc.onclick = () => {
    recargoEnPantalla()
    mostrarTotal()
}





  

/*
agregaDesc.onclick = () => {
    const total = document.getElementById("totalText")
    var newItem = document.createElement("span");       
    var textnode = document.createTextNode("recargo por usar tc");  
    newItem.appendChild(textnode);  
    total.insertBefore(newItem, total.childNodes[0]);  
}
*/







