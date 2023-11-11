let formulario = document.querySelector(".contact")
let mascara = document.querySelector(".formMask")


function showForm() {
    formulario.style.left = "45%"
    mascara.style.visibility = "visible"
}

function hideForm() {
    formulario.style.left = "-320px"
    mascara.style.visibility = "hidden"
}