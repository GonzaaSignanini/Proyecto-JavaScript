

let seguroAutos = [];

$.ajax({
    url: "js/autos.json",
    method: "GET",
    dataType: "JSON",
    success: function(result){
        seguroAutos = result;
          

        seguroAutos.sort(function (a, b){
            if ( a.marca < b.marca )
              return -1;
            if ( a.marca > b.marca )
            return 1;
            return 0;
        })

        seguroAutos.forEach(autos => {

            const option = document.createElement('option');
            option.textContent = `${autos.marca}`;
        
            const optionDos = document.createElement('option');
            optionDos.textContent = `${autos.modelo}`;
        
            
            selectUno.appendChild(option);
            selectDos.appendChild(optionDos);
        });
    },
});




 

const marcaAuto = document.querySelector('.marca-auto');
const modeloAuto = document.querySelector('.modelo-auto');
const botonCotizador = document.querySelector('button.btn-cotizador');

$('button.btn-cotizador').on('click', clickCotizar);

let contador = 0;
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
        parrafo.textContent = (`El seguro de tu vehículo ${autoSeleccionado.marca} ${autoSeleccionado.modelo} cuesta $${autoSeleccionado.precio} por mes.`);
        const cotizador = document.querySelector('.cotizador');
        cotizador.insertBefore(parrafo, document.querySelector('cotizador h1'));
    }

    if(contador === 0){
        botonCotizador.disabled = true;
    }
    contador++;

}


const inputNombre = document.querySelector('#nombre');
const inputApellido = document.querySelector('#apellido');
const inputEmail = document.querySelector('#email');
const inputMsj = document.querySelector('#msj');
const boton = document.querySelector('button.boton');
$('button.boton').on('click', clickSubmit);


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
};


$('.cotizador').css('display', 'none');
$('.cotizador').fadeIn(1000);

$('.logo').animate({
    'margin-left': 320
}, 2000, () =>{
    $('.logo').animate({
        'margin-left': 13.33
    }, 3000)
});


// for (let i = 0; i < seguroAutos.length; i++) {
//     const selectUno = document.querySelector('select.marca-auto');
//     const option = document.createElement('option');
//     option.textContent = seguroAutos[i].marca;
    
//     selectUno.appendChild(option);
// }

const selectUno = document.querySelector('select.marca-auto');
const selectDos = document.querySelector('select.modelo-auto');

