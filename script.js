/* Botón configuración del perfil público */

const configPublic = document.getElementById("configPublic");
const cambiaConfig = configPublic.addEventListener('click', webConfig);

function webConfig() {
  const checkDiv = document.getElementById("publiSelect");
  const datosDiv = document.getElementById("datosPublicos");
  checkDiv.style.display = 'block';
  datosDiv.style.display = 'none';
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
          
          const checkboxes = document.querySelectorAll('.toggleDiv');
  
          checkboxes.forEach(function(checkbox) {
      
          const targetId = checkbox.getAttribute('data-target');
          const targetElement = document.getElementById(targetId);
          //en el condicional se visualizan los datos de cada div
          // según esté chequeada la casilla o no          
          if (checkbox.checked) {
            targetElement.style.display = 'block';}
          else {
            targetElement.style.display = 'none';
          };
        });
          saveCheckboxes();
          const checkDiv = document.getElementById("publiSelect");
          const datosDiv = document.getElementById("datosPublicos");
          datosDiv.style.display = 'block';
          checkDiv.style.display = 'none';
        
        
        // Array de los checkbox
        function saveCheckboxes() {
           // const checkboxes = document.querySelectorAll('.toggleDiv');
            
            let checkedOptions = [];
            
            checkboxes.forEach(function(checkbox) {
              const targetId = checkbox.getAttribute('data-target');
              const targetElement = document.getElementById(targetId);
              
          //añadimos cada valor del array checkedoptions
              if (checkbox.checked) {
              checkbox.value="on";
              }
              else {
              checkbox.value="off";
              };
              checkedOptions.push(checkbox.value);
              console.log(checkbox.value);
              console.log(checkedOptions);
          });
          
          localStorage.setItem('checkedCheckboxes', JSON.stringify(checkedOptions));
          /*if (targetWindow) {
                  targetWindow.postMessage(checkedOptions);
              } else {
                  alert('No se pudo abrir otra ventana.');
              }*/
          
      };
  
    };


        
        /* const actualizaTodo = document.getElementById("allDiv", actualizar);
        const actualizaNada = document.getElementById("noDiv", actualizar);
        actualizaTodo.addEventListener('click', actualizar);
        actualizaNada.addEventListener('click', actualizar); */



        

  

     
