let form = document.querySelector('#form')
let input = document.querySelector('#buscador')

form.addEventListener('submit', function(e) {

e.preventDefault();

if (input.value == "") {

    alert('No puede enviar un form vacío')
    
} else if (input.value.lenght <3 ) {
    
    alert('Debes escribir más de tres caracteres')
} else {

    this.submit()
}


} )