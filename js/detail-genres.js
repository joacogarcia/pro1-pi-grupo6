let api_key = "7d4b7de655aa19e767e9ef8b0e0359b5";

let qsDetalle = location.search;
let objQs = new URLSearchParams(qsDetalle);
let idGenero = objQs.get("id");
let nombreGenero = objQs.get("name");
let generoPelicula = document.querySelector('.sc')



let urlDetailGePeliculas = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${idGenero}&with_watch_monetization_types=flatrate`;

fetch(urlDetailGePeliculas)
.then(function(response) {
    return response.json();
}
).then(function(data) {
    let generosPeliculas = data.results
     console.log(generosPeliculas);
     let listaPeliculas= ''


    for(let i=0; i<4; i++){
        listaPeliculas += `
        <article class="sa">
                <a href="./detail-movie.html?p=${generosPeliculas[i].id}"><img  class= "ims" src="https://image.tmdb.org/t/p/w500/${generosPeliculas[i].poster_path}" alt=""></a>
                <p class="titulo">${generosPeliculas[i].title}</p>
            </article>
        <p class= "generoElegido" ${generosPeliculas[i].poster_path} alt = <a href="./detail-genres.html?p=${generosPeliculas[i].id}" class= "linkDetalle"> </article>`
    }
    
    
    generoPelicula.innerHTML = listaPeliculas;
    
})


.catch(function (error) {
    console.log('El error es el siguiente' + error)
})

// Se busca el detalle de genero ahora en series//


let urlDetailGeSeries= `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US&with_genres=${idGenero}`

let generoSerie = document.querySelector(".ss")


fetch(urlDetailGeSeries)
.then(function(response) {
    return response.json();
}
).then(function(data) {
    let generoDetalle = data.results
     console.log(generoDetalle);
     let generoSeries= ''

// Se busca la información de la API y se selecciona para mostrarla al usuario  //

    for(let i=0; i<4; i++){
        generoSeries += `
        <article class="sa">
                <a href="./detail-serie.html?s=${generoDetalle[i].id}"><img  class= "ims" src="https://image.tmdb.org/t/p/w500/${generoDetalle[i].poster_path}" alt=""></a>
                <p class="titulo">${generoDetalle[i].name}</p>
            </article>
        <p class= "resultadoGen" ${generoDetalle[i].poster_path} alt = <a href="./detail-genres.html?id=${generoDetalle[i].id}" class= "detailLink"> </article>`
    }
    generoSerie.innerHTML = generoSeries;

})

.catch(function (error) {
    console.log('El error es el siguiente' + error)
})