

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
        });

        seguroAutos.forEach(autos => {
            selectMarca.innerHTML += ` <option class="select-modelo" value="${autos.marca}">${autos.marca}</option>`;

            // autos.modelos.forEach(modelo => {
                // selectModelo.innerHTML += ` <option class="select-modelo" value="${modelo.modelo}">${modelo.modelo}</option>`;
            // });
        });
    },
});

const selectMarca = document.querySelector('.marca-auto');
const selectModelo = document.querySelector('.modelo-auto');
const botonCotizador = document.querySelector('button.btn-cotizador');
$('button.btn-cotizador').on('click', clickCotizar);

$('.marca-auto').on('change', clickSelect);



function limpiar(){
    while(selectModelo.options.length > 0){                
        selectModelo.remove(0);
        } 
    }


function clickSelect(e){
    e.preventDefault()

    limpiar();

    const marca = seguroAutos.find( s => s.marca  === selectMarca.value);

    marca.modelos.forEach(modelo => {
        selectModelo.innerHTML += ` <option class="select-modelo" value="${modelo.modelo}">${modelo.modelo}</option>`;
    });


}


let contador = 0;
localStorage.setItem('seguroAutos', JSON.stringify(seguroAutos));
const seguroTotal = JSON.parse(localStorage.getItem('seguroAutos'));

function clickCotizar(e) {
    e.preventDefault();

    const marca = seguroAutos.find( s => s.marca  === selectMarca.value);

    const modelo = marca.modelos.find(m => m.modelo === selectModelo.value);
     
    if (marca && modelo == undefined){
        const parrafoDos = document.createElement('p');
        parrafoDos.textContent = ('No podemos asegurar tu auto.'); 
        const cotizador = document.querySelector('.cotizador');
        cotizador.insertBefore(parrafoDos, document.querySelector('cotizador h1'));
    }else{
        const parrafo = document.createElement('p');
        parrafo.setAttribute('class', 'seguro');
        parrafo.textContent = (`El seguro de tu vehículo ${marca.marca} ${modelo.modelo} cuesta $${modelo.precio} por mes.`);
        const cotizador = document.querySelector('.cotizador');
        cotizador.insertBefore(parrafo, document.querySelector('cotizador h1'));
    }

    if(contador === 0){
        botonCotizador.disabled = true;
    }
    contador++;

};

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


let timer = 4000;

let i = 0;
let max = $('#c > li').length;
 
$("#c > li").eq(i).addClass('active').css('left','0');
$("#c > li").eq(i + 1).addClass('active').css('left','25%');
$("#c > li").eq(i + 2).addClass('active').css('left','50%');
$("#c > li").eq(i + 3).addClass('active').css('left','75%');
 
setInterval(function(){ 

	$("#c > li").removeClass('active');

	$("#c > li").eq(i).css('transition-delay','0.25s');
	$("#c > li").eq(i + 1).css('transition-delay','0.5s');
	$("#c > li").eq(i + 2).css('transition-delay','0.75s');
	$("#c > li").eq(i + 3).css('transition-delay','1s');

	if (i < max-4) {
		i = i+4; 
	}else { 
		i = 0; 
	}  

	$("#c > li").eq(i).css('left','0').addClass('active').css('transition-delay','1.25s');
	$("#c > li").eq(i + 1).css('left','25%').addClass('active').css('transition-delay','1.5s');
	$("#c > li").eq(i + 2).css('left','50%').addClass('active').css('transition-delay','1.75s');
	$("#c > li").eq(i + 3).css('left','75%').addClass('active').css('transition-delay','2s');
	
}, timer);
 