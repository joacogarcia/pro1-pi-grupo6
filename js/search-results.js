
let form = document.querySelector('.formulario');
let input = document.querySelector('#input');


form.addEventListener('submit', function(e) {
    e.preventDefault();
   

    if ( input.value == '') {
        alert('Debes Ingresar una palabra');
    } else if( input.value.length < 5){
        alert('Palabra muy corta, deben ser 5 letras');
    }else {
        form.submit();
    }
})

let urlSearch = https://api.themoviedb.org/3/search/movie?api_key=<<7d4b7de655aa19e767e9ef8b0e0359b5>>&language=en-US&page=1&include_adult=false; 

