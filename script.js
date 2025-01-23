/* Botón configuración del perfil público */

const configPublic = document.getElementById("configPublic");
const cambiaConfig = configPublic.addEventListener('click', webConfig);

function webConfig() {
  window.location.href = 'configuracion.html';
}

/* Visualización individual de los elementos del perfil */
  const checkboxes = document.querySelectorAll('.toggleDiv');
  
  checkboxes.forEach(function(checkbox) {
      
          const targetId = checkbox.getAttribute('data-target');
          const targetElement = document.getElementById(targetId);
/* en el condicional se visualizan los datos de cada div según esté chequeada la casilla o no */          
          if (checkbox.checked) {
            targetElement.style.display = 'block';}
          else {
            targetElement.style.display = 'none';
          };
        });

        /* Visualización total o ninguna de los elementos del perfil BUTTON*/

        /* función del botón id=allDiv */
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
        
        /* función del botón id=noDiv */
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
          location.reload();
          window.location.href = 'index.html';
        }
        /* const actualizaTodo = document.getElementById("allDiv", actualizar);
        const actualizaNada = document.getElementById("noDiv", actualizar);
        actualizaTodo.addEventListener('click', actualizar);
        actualizaNada.addEventListener('click', actualizar); */



        

  

     
