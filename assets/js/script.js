//pedir los datos por ventana emergente
let nombre = prompt("Ingrese su nombre: ")
let renta = Number(prompt("Ingrese su renta: "))

//console.log(nombre, renta)
//manipulando el dom
let snombre = document.querySelector('#s_nombre')
let srenta = document.querySelector('#s_renta')
let sliquida = document.querySelector('#s_liquida')
let radios = document.getElementsByName("tipo");


snombre.innerHTML = nombre
srenta.innerHTML = renta


function calcular() {
    //let radios = document.getElementsByName("tipo");
    //let sliquida = document.querySelector('#s_liquida')
    let valorRadio = "";
    let total = 0
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            valorRadio = radios[i].value;
            if (valorRadio == "honorario") {
                total = renta * 0.9;
            }
            else {
                total = renta * 0.8;
            }
        }
    }
    sliquida.innerHTML = total
}

function limpiar() { 
    snombre.innerHTML = "";
    srenta.innerHTML = "";
    sliquida.innerHTML = " ";
    //let radios = document.getElementsByName("tipo"); 
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) { 
            radios[i].value = ""; 
            radios[i].checked = false; 
        } 
    } 
}
