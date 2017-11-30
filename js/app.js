/* CREACION DE VARIABLES*/

/* menu desplegable*/
var sede = document.querySelector('.sede');

var pais = document.querySelectorAll('.pais');
/* paises*/
var p1 = document.querySelector('#p1');
var p2 = document.querySelector('#p2');
var p3 = document.querySelector('#p3');

var ciudad = document.querySelectorAll('.ciudad');
var ciudad2 = document.querySelectorAll('.ciudad2');
var ciudad3 = document.querySelectorAll('.ciudad3');
/* ciudades*/
var c1 = document.querySelector('#c1');
var c2 = document.querySelector('#c2');
var c3 = document.querySelector('#c3');
var c4 = document.querySelector('#c4');

var generation = document.querySelectorAll('.generation');
var generation2 = document.querySelectorAll('.generation2');
var generation3 = document.querySelectorAll('.generation3');
var generation4 = document.querySelectorAll('.generation4');
/* generaciones*/
var g1 = document.querySelector('#g1');
var g2 = document.querySelector('#g2');
var g3 = document.querySelector('#g3');
var g4 = document.querySelector('#g4');
var g5 = document.querySelector('#g5');
var g6 = document.querySelector('#g6');
var g7 = document.querySelector('#g7');
var g8 = document.querySelector('#g8');
var g9 = document.querySelector('#g9');
var g10 = document.querySelector('#g10');
/* alumnas*/
var a1 = document.querySelector('#a1');
var a2 = document.querySelector('#a2');
var a3 = document.querySelector('#a3');
var a4 = document.querySelector('#a4');
var a5 = document.querySelector('#a5');
var a6 = document.querySelector('#a6');
var a7 = document.querySelector('#a7');
var a8 = document.querySelector('#a8');
var a9 = document.querySelector('#a9');
var a10 = document.querySelector('#a10');

/* FUNCIONES*/

/* menu desplegable*/
function mostrarPais(event) {
  for (var i = 0; i < pais.length; i++) {
    pais[i].classList.toggle('none');
  }
};

function mostrarCiudad(event) {
  for (var i = 0; i < ciudad.length; i++) {
    ciudad[i].classList.toggle('none');
  }
};
function mostrarCiudad2(event) {
  for (var i = 0; i < ciudad2.length; i++) {
    ciudad2[i].classList.toggle('none');
  }
};
function mostrarCiudad3(event) {
  for (var i = 0; i < ciudad3.length; i++) {
    ciudad3[i].classList.toggle('none');
  }
};

function mostrarGeneration(event) {
  for (var i = 0; i < generation.length; i++) {
    generation[i].classList.toggle('none');
  }
};
function mostrarGeneration2(event) {
  for (var i = 0; i < generation2.length; i++) {
    generation2[i].classList.toggle('none');
  }
};
function mostrarGeneration3(event) {
  for (var i = 0; i < generation3.length; i++) {
    generation3[i].classList.toggle('none');
  }
};
function mostrarGeneration4(event) {
  for (var i = 0; i < generation4.length; i++) {
    generation4[i].classList.toggle('none');
  }
};

function mostrarAlumnas(event) {
  a1.classList.toggle('none');
};
function mostrarAlumnas2(event) {
  a2.classList.toggle('none');
};
function mostrarAlumnas3(event) {
  a3.classList.toggle('none');
};
function mostrarAlumnas4(event) {
  a4.classList.toggle('none');
};
function mostrarAlumnas5(event) {
  a5.classList.toggle('none');
};
function mostrarAlumnas6(event) {
  a6.classList.toggle('none');
};
function mostrarAlumnas7(event) {
  a7.classList.toggle('none');
};
function mostrarAlumnas8(event) {
  a8.classList.toggle('none');
};
function mostrarAlumnas9(event) {
  a9.classList.toggle('none');
};
function mostrarAlumnas10(event) {
  a10.classList.toggle('none');
};

/* botones dentro de generaciones*/
function mostrarOcultarEstadisticasAlumnas(event) {
  var tabSeleccionado = event.target.dataset.tabSeleccionado;
  var estadisticas = document.querySelector('.estadisticas');
  var alumnas = document.querySelector('.alumnas');
  var general = document.querySelector('.general');

  if (tabSeleccionado === 'tabEstadisticas') {
    // ocultar alumnas y general
    alumnas.style.display = 'none';
    general.style.display = 'none';
    // mostrar estadisticas
    estadisticas.style.display = 'block';
  } else if (tabSeleccionado === 'tabAlumnas') {
    // ocultar estadisticas y general
    estadisticas.style.display = 'none';
    general.style.display = 'none';
    // mostrar alumnas
    alumnas.style.display = 'block';
  } else if (tabSeleccionado === 'tabGeneral') {
    // ocultar estadisticas y alumnas
    estadisticas.style.display = 'none';
    alumnas.style.display = 'none';
    // mostrar general
    general.style.display = 'block';
  }
};
function cargarEstadisticasAlumnas() {
  var estadisticas = document.querySelector('.estadisticas');
  var alumnas = document.querySelector('.alumnas');
  var general = document.querySelector('.general');

  estadisticas.style.display = 'none';
  alumnas.style.display = 'none';
  general.style.display = 'none';

  var elementosTab = document.getElementsByClassName('tab');
  for (var i = 0; i < elementosTab.length; i++) {
    elementosTab[i].addEventListener('click', mostrarOcultarEstadisticasAlumnas);
  }
};


/* LLAMADO DE LAS FUNCIONES*/
sede.addEventListener('click', mostrarPais);

p1.addEventListener('click', mostrarCiudad);
p2.addEventListener('click', mostrarCiudad2);
p3.addEventListener('click', mostrarCiudad3);

c1.addEventListener('click', mostrarGeneration);
c2.addEventListener('click', mostrarGeneration2);
c3.addEventListener('click', mostrarGeneration3);
c4.addEventListener('click', mostrarGeneration4);

g1.addEventListener('click', mostrarAlumnas);
g2.addEventListener('click', mostrarAlumnas2);
g3.addEventListener('click', mostrarAlumnas3);
g4.addEventListener('click', mostrarAlumnas4);
g5.addEventListener('click', mostrarAlumnas5);
g6.addEventListener('click', mostrarAlumnas6);
g7.addEventListener('click', mostrarAlumnas7);
g8.addEventListener('click', mostrarAlumnas8);
g9.addEventListener('click', mostrarAlumnas9);
g10.addEventListener('click', mostrarAlumnas10);

cargarEstadisticasAlumnas();
