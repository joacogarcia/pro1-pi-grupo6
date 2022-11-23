let qsGenre = location.search;
let objQs = new URLSearchParams(qsGenre);
let idGenre = objQs.get("id");
let nameGenre = objQs.get("name");

let generoPelicula = document.querySelector('.sc')
let urlDetailGenre = `https://api.themoviedb.org/3/discover/movie?api_key=7d4b7de655aa19e767e9ef8b0e0359b5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${idGenre}&with_watch_monetization_types=flatrate`;

fetch(urlDetailGenre)


.then(  function(response) {
    return response.json();
} )

.then( function(data) {
    let listaDetalles = data.results
    
    let listaDetalleG = ''

    for(let i=0; i < listaDetalles.lenght ; i++)  {
        
        listaDetalleG += 

        `<section class="contedorDetalle">
         <a href="./detail-movie.html?p=${listaDetalles[i].id}"><img  class= "peliculasd" src="https://image.tmdb.org/t/p/w500/${listaDetalles[i].poster_path}" alt=""></a>
        <p class="titulod">${listaDetalles[i].title}</p>
         </section>
         <section>
        <p class= "eleccionGenero" ${listaDetalles[i].poster_path} alt = <a href="./detail-genres.html?p=${listaDetalles[i].id}" class= "linkDetalle"> </p>
         </section>`
    }

    generoPelicula.innerHTML = listaDetalles ;
    
})

.catch(   function(error) {

     return response.json();
})