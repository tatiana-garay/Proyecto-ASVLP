
let nombre = prompt("Ingrese su Nombre")

const btnCookie = document.getElementById("btnCookie");
btnCookie.addEventListener('click', (e) => {
    btnCookie.parentElement.remove();
    alert( "Bienvenido " + nombre )
})

