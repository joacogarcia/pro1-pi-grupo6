let form = document.querySelector("form");
let buscador = document.querySelector("#buscador");

form.addEventListener('submit',(e)=>{
        e.preventDefault();
        
        if (buscador.value == "") {

            alert('No puede enviar un form vacío')
            
        } else if (buscador.value.length < 3 ) {

            alert('Debes escribir más de tres caracteres')
        } else {

        form.submit() 
        }
})
