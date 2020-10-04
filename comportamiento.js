
const carro = document.getElementById("carrito")
const tarjetaCel = document.getElementById("tarjeta-cel")
const botonCel = document.getElementById("compra-cel")
const tarjetaPC = document.getElementById("tarjeta-pc")
const botonPc = document.getElementById("compra-pc")
const tarjetaCAM = document.getElementById("tarjeta-cam")
const botonCam = document.getElementById("compra-cam")
const tarjetaPLAY = document.getElementById("tarjeta-play")
const botonPlay = document.getElementById("compra-play")
const eliminarCel = document.getElementById("trash-cel")
const celularesTotales = document.getElementById("total-cel")
const selectorCel = document.getElementById("value-cel")


console.log(carro)
console.log(tarjetaCel)
console.log(botonCel)



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


eliminarCel.onclick = () => {
    const tarjetaCel = document.getElementById("tarjeta-cel")
    tarjetaCel.classList.add("hidden")
    celularesTotales.textContent = 0
    selectorCel.value = 0
    actualizarSubtotal()
}


selectorCel.onclick = () => {
    const precioCel = document.getElementById("precio-cel")
    const subtotal = document.getElementById("subtotal")
celularesTotales.textContent = selectorCel.value*10000
subtotal.textContent = celularesTotales.textContent
}










