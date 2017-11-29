/*CREACION DE VARIABLES*/

/*menu desplegable*/
var sede = document.querySelector('.sede');

var pais = document.querySelectorAll('.pais');
  /*paises*/
  var pOne = document.querySelector('.pOne');
  var pTwo = document.querySelector('.pTwo');
  var pThree = document.querySelector('.pThree');

var ciudad = document.querySelectorAll('.ciudad');
var ciudad2 = document.querySelectorAll('.ciudad2');
var ciudad3 = document.querySelectorAll('.ciudad3');

  /*ciudades*/
  var cOne = document.querySelector('.cOne');
  var cTwo = document.querySelector('.cTwo');
  var cThree = document.querySelector('.cThree');
  var cFour = document.querySelector('.cFour');

var generation = document.querySelectorAll('.generation');
var generation2 = document.querySelectorAll('.generation2');
var generation3 = document.querySelectorAll('.generation3');
var generation4 = document.querySelectorAll('.generation4');


/*FUNCIONES*/

/*menu desplegable*/
function mostrarPais(event) {
  for (var i = 0; i < pais.length; i++) {
    //none es para que el contenido del submenu-pais no ocupe ningun espacio
    //y toggle ejecuta show y hide (muestra o no un elemento)
    pais[i].classList.toggle('none');
  }
};

function mostrarCiudad(event) {
  for (var i = 0; i < ciudad.length; i++) {
    //none es para que el contenido del submenu-pais no ocupe ningun espacio
    //y toggle ejecuta show y hide (muestra o no un elemento)
    ciudad[i].classList.toggle('none');
  }
};
function mostrarCiudad2(event) {
  for (var i = 0; i < ciudad2.length; i++) {
    //none es para que el contenido del submenu-pais no ocupe ningun espacio
    //y toggle ejecuta show y hide (muestra o no un elemento)
    ciudad2[i].classList.toggle('none');
  }
};
function mostrarCiudad3(event) {
  for (var i = 0; i < ciudad3.length; i++) {
    //none es para que el contenido del submenu-pais no ocupe ningun espacio
    //y toggle ejecuta show y hide (muestra o no un elemento)
    ciudad3[i].classList.toggle('none');
  }
};

function mostrarGeneration(event){
  for (var i = 0; i < generation.length; i++) {
    //none es para que el contenido del submenu-pais no ocupe ningun espacio
    //y toggle ejecuta show y hide (muestra o no un elemento)
    generation[i].classList.toggle('none');
  }
};
function mostrarGeneration2(event){
  for (var i = 0; i < generation2.length; i++) {
    //none es para que el contenido del submenu-pais no ocupe ningun espacio
    //y toggle ejecuta show y hide (muestra o no un elemento)
    generation2[i].classList.toggle('none');
  }
};
function mostrarGeneration3(event){
  for (var i = 0; i < generation3.length; i++) {
    //none es para que el contenido del submenu-pais no ocupe ningun espacio
    //y toggle ejecuta show y hide (muestra o no un elemento)
    generation3[i].classList.toggle('none');
  }
};
function mostrarGeneration4(event){
  for (var i = 0; i < generation4.length; i++) {
    //none es para que el contenido del submenu-pais no ocupe ningun espacio
    //y toggle ejecuta show y hide (muestra o no un elemento)
    generation4[i].classList.toggle('none');
  }
};

/*botones dentro de generaciones*/
var mostrarOcultarEstadisticasAlumnas = function(e) {
  var tabSeleccionado = e.target.dataset.tabSeleccionado;
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
var cargarEstadisticasAlumnas = function() {
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

/*LLAMADO DE LAS FUNCIONES*/
sede.addEventListener('click', mostrarPais);

pOne.addEventListener('click', mostrarCiudad);
pTwo.addEventListener('click', mostrarCiudad2);
pThree.addEventListener('click', mostrarCiudad3);

cOne.addEventListener('click', mostrarGeneration);
cTwo.addEventListener('click', mostrarGeneration2);
cThree.addEventListener('click', mostrarGeneration3);
cFour.addEventListener('click', mostrarGeneration4);

cargarEstadisticasAlumnas();
