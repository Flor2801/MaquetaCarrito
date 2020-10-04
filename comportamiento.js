
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


console.log(carro)
console.log(tarjetaCel)
console.log(botonCel)

//////////////////////   AGREGAR PRODUCTOS DESDE EL CATALOGO  /////////////////////////

botonCel.onclick = () => {
    const tarjetaCel = document.getElementById("tarjeta-cel")
    tarjetaCel.classList.remove("hidden")
    carro.appendChild(tarjetaCel)
}

botonPc.onclick = () => {
    const tarjetaPC = document.getElementById("tarjeta-pc")
    tarjetaPC.classList.remove("hidden")
    carro.appendChild(tarjetaPC)
}

/*
botonCam.onclick = () => {
    const tarjetaCAM = document.getElementById("tarjeta-cam")
    tarjetaCAM.classList.remove("hidden")
    carro.appendChild(tarjetaCAM)
}

botonPlay.onclick = () => {
    const tarjetaPLAY = document.getElementById("tarjeta-play")
    tarjetaPLAY.classList.remove("hidden")
    carro.appendChild(tarjetaPLAY)
}
*/
//////////////////////   BOTON ELIMINAR DE LA TARJETA  /////////////////////////


eliminarCel.onclick = () => {
    const tarjetaCel = document.getElementById("tarjeta-cel")
    tarjetaCel.classList.add("hidden")
    celularesTotales.textContent = 0
    selectorCel.value = 0

    actualizarSubtotal()
}

eliminarPc.onclick = () => {
    const tarjetaPc = document.getElementById("tarjeta-pc")
    tarjetaPc.classList.add("hidden")
    pcsTotales.textContent = 0
    selectorPcs.value = 0

    actualizarSubtotal()

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













