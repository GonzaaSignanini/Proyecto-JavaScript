

class Seguro {

    constructor(marca, modelo, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }
}

const seguro1 = new Seguro("Peugeot", "208", 11500);
const seguro2 = new Seguro("Volkswagen", "Gol Trend", 8000);
const seguro3 = new Seguro("Chevrolet", "Cruze", 13000);
const seguro4 = new Seguro("Ford", "Focus", 12300);

const seguroAutos = [seguro1, seguro2, seguro3, seguro4];

const marcaAuto = document.querySelector('.marca-auto');
const modeloAuto = document.querySelector('.modelo-auto');
const botonCotizador = document.querySelector('button.btn-cotizador');

botonCotizador.addEventListener('click', clickCotizar);

localStorage.setItem('seguroAutos', JSON.stringify(seguroAutos));
const seguroTotal = JSON.parse(localStorage.getItem('seguroAutos'));



function clickCotizar(e) {
    e.preventDefault();

    const autoSeleccionado = seguroAutos.find( s => s.marca.toLowerCase() == marcaAuto.value.toLowerCase() && s.modelo.toLowerCase() === modeloAuto.value.toLowerCase());
    
    if (autoSeleccionado == undefined){
        const parrafoDos = document.createElement('p');
        parrafoDos.textContent = ('No podemos asegurar tu auto.'); 
        const cotizador = document.querySelector('.cotizador');
        cotizador.insertBefore(parrafoDos, document.querySelector('cotizador h1'));
    }else{
        const parrafo = document.createElement('p');
        parrafo.setAttribute('class', 'seguro');
        parrafo.textContent = (`El seguro de tu vehículo ${autoSeleccionado.marca} ${autoSeleccionado.modelo} cuesta $${autoSeleccionado.precio} pesos argentinos.`);
        const cotizador = document.querySelector('.cotizador');
        cotizador.insertBefore(parrafo, document.querySelector('cotizador h1'));
    }

}


const inputNombre = document.querySelector('#nombre');
const inputApellido = document.querySelector('#apellido');
const inputEmail = document.querySelector('#email');
const inputMsj = document.querySelector('#msj');
const boton = document.querySelector('button.boton');
boton.addEventListener("click", clickSubmit);


function clickSubmit(e){
    e.preventDefault();
    valueNombre = inputNombre.value;
    valueApellido = inputApellido.value;
    valueEmail = inputEmail.value;
    valueMsj = inputMsj.value;


    if(!valueNombre){
        inputNombre.value = "*El nombre es obligatorio"
        inputNombre.setAttribute('id', 'values')
    }

    if(!valueApellido){
        inputApellido.value = "*El apellido es obligatorio"
        inputApellido.setAttribute('id', 'values')
    }

    if (!valueEmail.includes('@')) {
        inputEmail.value = "*El email ingresado no es válido"
        inputEmail.setAttribute('id', 'values')
    }

    if (!valueMsj) {
        inputMsj.value = "*La casilla de mensaje debe contener algo"
        inputMsj.setAttribute('id', 'values')
    }
            

}
