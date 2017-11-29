var mostrarOcultar = function(e) {

  var tabSeleccionado = e.target.dataset.tabSeleccionado;

  var estadisticas = document.querySelector('#estadisticas');
  var alumnas = document.querySelector('#alumnas');

  if (tabSeleccionado === 'tabEstadisticas') {
    // ocultar alumnas
    alumnas.style.display = 'none';
    // mostrar estadisticas
    estadisticas.style.display = 'block';
  } else if (tabSeleccionado === 'tabAlumnas') {
    console.log('vamos a almorzar');
    // ocultar estadisticas
    estadisticas.style.display = 'none';
    // mostrar alumnas
    alumnas.style.display = 'block';
  }
};

var cargarPagina = function() {
  var estadisticas = document.querySelector('#estadisticas');
  var alumnas = document.querySelector('#alumnas');

  estadisticas.style.display = 'none';
  alumnas.style.display = 'none';

  var elementosTab = document.getElementsByClassName('tab');
  for (var i = 0; i < elementosTab.length; i++) {
    elementosTab[i].addEventListener('click', mostrarOcultar);
  }
};

cargarPagina();
