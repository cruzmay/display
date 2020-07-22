function controlModal() {
    let modal = document.getElementById('modal')

    if (modal.style.display === "block") {
        modal.style.display = "none"
        modal.classList.remove("modal__animacion--entrada")
        modal.classList.add("modal__animacion--salida")
    }
    else {
        modal.style.display = "block"
    }
}



