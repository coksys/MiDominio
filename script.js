window.onload = function() {
  // Si encontramos el elemento, recuperamos el valor del localStorage
  const CheckedCollect = JSON.parse(localStorage.getItem('checkedCheckboxes'));
  if (CheckedCollect) {
    loadCheckboxes();}
  else {
    webConfig();
  }
};

  // devolvemos las casillas de verificación a la última configuración antes de cerrar ventana
function loadCheckboxes() {
   /* Recogemos la información del estado de los ckeckbox almacenada en localStorage */
   const CheckedCollect = JSON.parse(localStorage.getItem('checkedCheckboxes'));
   /* Array de los datos personales*/
   const datosPublicos = document.querySelectorAll('.toggleDiv');
   // activamos o no checkbox según info del localStorage
   CheckedCollect.forEach(function(checkbox, indice) {
    if (checkbox=="on") {
      datosPublicos[indice].checked = true;}
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
  checkDiv.style.display = 'block';
  datosDiv.style.display = 'none';
};

/* Visualización individual de los elementos del perfil */
  const checkboxes = document.querySelectorAll('.toggleDiv');
  checkboxes.forEach(function(checkbox) {
    const targetId = checkbox.getAttribute('data-target');
    const targetElement = document.getElementById(targetId);
  /* se visualizan los datos de cada div según esté chequeada la casilla o no */          
    if (checkbox.checked){
      targetElement.style.display = 'block';}
    else {
      targetElement.style.display = 'none';
    };
  });
/* Visualización total o ninguna de los elementos del perfil (botones seleccionar todo/nada) */

  /* función del botón id=allDiv seleccionar todo */
function botonTodo () {
    const checkboxes = document.querySelectorAll('.toggleDiv');
    checkboxes.forEach(function(checkbox) {
      const targetId = checkbox.getAttribute('data-target');
      const targetElement = document.getElementById(targetId);
      /* Visualización total */
      checkbox.checked = true;
      targetElement.style.display = 'block';
    }
    )};
        
  /* función del botón id=noDiv deseleccionar todo */
function botonNada () {
    const checkboxes = document.querySelectorAll('.toggleDiv');
    checkboxes.forEach(function(checkbox) {
      const targetId = checkbox.getAttribute('data-target');
      const targetElement = document.getElementById(targetId);
      /* Visualización ninguna */
        checkbox.checked = false;
        targetElement.style.display = 'none';
    }
)};

  /* botón guardar cambios */
function actualizar() {
    const checkboxes = document.querySelectorAll('.toggleDiv');
    checkboxes.forEach(function(checkbox) {
      const targetId = checkbox.getAttribute('data-target');
      const targetElement = document.getElementById(targetId);
      /*en el condicional se visualizan los datos de cada div
      según esté chequeada la casilla o no */         
      if (checkbox.checked) {
        targetElement.style.display = 'block';}
      else {
        targetElement.style.display = 'none';
      };
    });
    saveCheckboxes(); // guardamos el estado de cada checkbox
    // Si no hay nombre ni apellidos el título "Nombre:" no se muestra (por estética).
    
    
    // escondemos el menú de los ckeckbox
    const checkDiv = document.getElementById("publiSelect");
    const datosDiv = document.getElementById("datosPublicos");
    datosDiv.style.display = 'block';
    checkDiv.style.display = 'none';
    QuitarTituloNombre();
};

// Si no hay nombre ni apellidos el título "Nombre:" no se muestra (por estética).
function QuitarTituloNombre() {
    const CheckedCollect = JSON.parse(localStorage.getItem('checkedCheckboxes'));
    const nombres = document.getElementById("todoNombre");
    if (CheckedCollect[1]=="off" && CheckedCollect[2]=="off" && CheckedCollect[3]=="off") {
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
  checkboxes.forEach(function(checkbox) {
    const targetId = checkbox.getAttribute('data-target');
    const targetElement = document.getElementById(targetId);
    //añadimos cada valor del array CheckedCollect
    if (checkbox.checked) {
    checkbox.value="on";
    }
    else {
    checkbox.value="off";
    };
     CheckedCollect.push(checkbox.value);
  });
 localStorage.setItem('checkedCheckboxes', JSON.stringify(CheckedCollect));
};


        
        



        

  

     
