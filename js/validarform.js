let form = document.querySelector("form");
let buscador = document.querySelector("#buscador");

form.addEventListener('submit',(e)=>{
        e.preventDefault();
        
        if (buscador.value == "") {

            alert('Submit something to search please')
            
        } else if (buscador.value.length < 3 ) {

            alert('You must write more than three characters')
        } else {

        form.submit() 
        }
})
