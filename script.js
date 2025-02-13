window.onload = function () {
  // Si encontramos el elemento, recuperamos el valor del localStorage
  const CheckedCollect = JSON.parse(localStorage.getItem('checkedCheckboxes'));
  const inputForm = JSON.parse(localStorage.getItem('dataCollect'));
  if (CheckedCollect || inputForm) {
    loadCheckboxes();
    cargarDatos();
  }
  else {
    cargaInicial();
    tituloEjemplo();
  }
};

function tituloEjemplo() {
  const tituloDiv = document.getElementById("tituloPerfil");
  const tituloOriginal = tituloDiv.innerHTML; // Guarda el título original
  tituloDiv.innerHTML = '<h2 id="tituloPerfil">PERFIL <span style="color: grey; font-size: 30px;">(de ejemplo)</span></h2>';
  const botonCheckboxes = document.getElementById("actualizar");
  const botonSaveCambios = document.getElementById("introDatosButton");
  // Escuchadores de eventos para los botones
  botonCheckboxes.addEventListener("click", function() {
    tituloDiv.innerHTML = tituloOriginal; // Restaura el título original
  });
  botonSaveCambios.addEventListener("click", function() {
    tituloDiv.innerHTML = tituloOriginal; // Restaura el título original
  });
}

function cargaInicial(){
  const checkDiv = document.getElementById("publiSelect");
  const datosDiv = document.getElementById("datosPublicos");
  const introDiv = document.getElementById("introDatos");
  checkboxes.forEach(function (checkbox) {
    const targetId = checkbox.getAttribute('data-target');
    const targetElement = document.getElementById(targetId);
    /* Visualización total */
    checkbox.checked = true;
    targetElement.style.display = 'block';
  }
  );
  introDiv.style.display = 'none';
  checkDiv.style.display = 'none';
  datosDiv.style.display = 'block';
  
  
};

function cargarDatos() {
  const formInput = JSON.parse(localStorage.getItem('dataCollect'));
  const introForm = document.querySelectorAll('[data-form="introDatosForm"]');
  introForm.forEach(function (formValue, indice) {
    formValue.value = formInput[indice];
    const targetId = formValue.getAttribute('name');
    const targetElement = document.getElementById(targetId);
    const contenido = targetElement.innerHTML;
    const partes = contenido.split('</span>');
    if (partes.length > 1) {
      const textoDespuesDelSpan = partes[1];
      targetElement.innerHTML = partes[0] + '</span>' + formInput[indice];
    };

  });
}

function cambiarDatos() {
  const formInput = JSON.parse(localStorage.getItem('dataCollect'));
  const introForm = document.querySelectorAll('[data-form="introDatosForm"]');
  let dataCollect = [];
  introForm.forEach(function (formValue, indice) {
    const targetId = formValue.getAttribute('name');
    const targetElement = document.getElementById(targetId);
    const contenido = targetElement.innerHTML;
    const partes = contenido.split('</span>');

    if (partes.length > 1) {
      const textoDespuesDelSpan = partes[1];
      targetElement.innerHTML = partes[0] + '</span>' + formValue.value;
    }
    dataCollect.push(formValue.value);
  });
  localStorage.setItem('dataCollect', JSON.stringify(dataCollect));
  const checkDiv = document.getElementById("publiSelect");
  const datosDiv = document.getElementById("datosPublicos");
  const introDiv = document.getElementById("introDatos");
  introDiv.style.display = 'none';
  checkDiv.style.display = 'none';
  datosDiv.style.display = 'block';
}

// devolvemos las casillas de verificación a la última configuración antes de cerrar ventana
function loadCheckboxes() {
  /* Recogemos la información del estado de los ckeckbox almacenada en localStorage */
  const CheckedCollect = JSON.parse(localStorage.getItem('checkedCheckboxes'));
  /* Array de los datos personales*/
  const datosPublicos = document.querySelectorAll('.toggleDiv');
  // activamos o no checkbox según info del localStorage
  CheckedCollect.forEach(function (checkbox, indice) {
    if (checkbox == "on") {
      datosPublicos[indice].checked = true;
    }
    else {
      datosPublicos[indice].checked = false;
    };
    actualizar();
  });
};

/* Botón configuración del perfil público */
const configPublic = document.getElementById("configPublic");
const cambiaConfig = configPublic.addEventListener('click', webConfig);

// activa menú "configurar datos visibles"
function webConfig() {
  const checkDiv = document.getElementById("publiSelect");
  const datosDiv = document.getElementById("datosPublicos");
  //const introDiv = document.getElementById("introDatos");
  //introDiv.style.display = 'block';
  checkDiv.style.display = 'block';
  datosDiv.style.display = 'none';
};

/* Botón modificar datos */
const modifPublic = document.getElementById("ButtonModificarDatos");
const modifSave = modifPublic.addEventListener('click', modificarDatos);

// activa menú "configurar datos visibles"
function modificarDatos() {
  const checkDiv = document.getElementById("publiSelect");
  const datosDiv = document.getElementById("datosPublicos");
  const introDiv = document.getElementById("introDatos");
  introDiv.style.display = 'block';
  checkDiv.style.display = 'none';
  datosDiv.style.display = 'none';
};

/* Visualización individual de los elementos del perfil */
const checkboxes = document.querySelectorAll('.toggleDiv');
checkboxes.forEach(function (checkbox) {
  const targetId = checkbox.getAttribute('data-target');
  const targetElement = document.getElementById(targetId);
  /* se visualizan los datos de cada div según esté chequeada la casilla o no */
  if (checkbox.checked) {
    targetElement.style.display = 'block';
  }
  else {
    targetElement.style.display = 'none';
  };
});
/* Visualización total o ninguna de los elementos del perfil (botones seleccionar todo/nada) */

/* función del botón id=allDiv seleccionar todo */
function botonTodo() {
  const checkboxes = document.querySelectorAll('.toggleDiv');
  checkboxes.forEach(function (checkbox) {
    const targetId = checkbox.getAttribute('data-target');
    const targetElement = document.getElementById(targetId);
    /* Visualización total */
    checkbox.checked = true;
    targetElement.style.display = 'block';
  }
  )
};

/* función del botón id=noDiv deseleccionar todo */
function botonNada() {
  const checkboxes = document.querySelectorAll('.toggleDiv');
  checkboxes.forEach(function (checkbox) {
    const targetId = checkbox.getAttribute('data-target');
    const targetElement = document.getElementById(targetId);
    /* Visualización ninguna */
    checkbox.checked = false;
    targetElement.style.display = 'none';
  }
  )
};

/* botón guardar cambios */
function actualizar() {
  const checkboxes = document.querySelectorAll('.toggleDiv');
  checkboxes.forEach(function (checkbox) {
    const targetId = checkbox.getAttribute('data-target');
    const targetElement = document.getElementById(targetId);
    /*se visualizan los datos de cada div
    según esté chequeada la casilla o no */
    if (checkbox.checked) {
      targetElement.style.display = 'block';
    }
    else {
      targetElement.style.display = 'none';
    };
  });

  saveCheckboxes(); // guardamos el estado de cada checkbox

  // escondemos el menú de los ckeckbox
  const checkDiv = document.getElementById("publiSelect");
  const datosDiv = document.getElementById("datosPublicos");
  const introDiv = document.getElementById("introDatos");
  datosDiv.style.display = 'block';
  checkDiv.style.display = 'none';
  introDiv.style.display = 'none';


  QuitarTituloNombre(); // por estética
};

// Si no hay nombre ni apellidos el título "Nombre:" no se muestra.
function QuitarTituloNombre() {
  const CheckedCollect = JSON.parse(localStorage.getItem('checkedCheckboxes'));
  const nombres = document.getElementById("todoNombre");
  //se indexa según orden de los chequeados. Cambiar index en caso de cambiar títulos
  if (CheckedCollect[1] == "off" && CheckedCollect[2] == "off" && CheckedCollect[3] == "off") {
    nombres.style.display = 'none';
  }
  else {
    nombres.style.display = 'block';
  };
};

// guardamos el estado de cada checkbox
function saveCheckboxes() {
  const checkboxes = document.querySelectorAll('.toggleDiv');
  let CheckedCollect = [];
  checkboxes.forEach(function (checkbox) {
    const targetId = checkbox.getAttribute('data-target');
    const targetElement = document.getElementById(targetId);
    //añadimos cada valor del array CheckedCollect
    if (checkbox.checked) {
      checkbox.value = "on";
    }
    else {
      checkbox.value = "off";
    };
    CheckedCollect.push(checkbox.value);
  });
  localStorage.setItem('checkedCheckboxes', JSON.stringify(CheckedCollect));
};












