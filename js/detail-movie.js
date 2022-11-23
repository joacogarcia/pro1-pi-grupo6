let qs = location.search;
let qsObj = new URLSearchParams(qs);
let palabra = qsObj.get('idPelicula');

let api_key = '7d4b7de655aa19e767e9ef8b0e0359b5';
let urlDetalle = `https://api.themoviedb.org/3/movie/${palabra}?api_key=${api_key}&language=en-US&append_to_response=palabrabuscar`;
let urlTrailer = `https://api.themoviedb.org/3/movie/${palabra}/videos?api_key=${api_key}&language=en-US`;
let urlPlataformas = `https://api.themoviedb.org/3/movie/${palabra}/watch/providers?api_key=${api_key}`;


let imagen     = document.querySelector('.imgdetail');
let contenedor = document.querySelector('.contenedortitulodetails');

/* COMPLETO EL HTML */
fetch(urlDetalle)
.then(function(response) {
    return response.json();

}).then(function(data) {
    imagen.src = `https://image.tmdb.org/t/p/original/${data.poster_path}`;
    let generos = data.genres;
    let generospeli = "";
    for (let i = 0; i < generos.length ; i++) {
        generospeli += `|<a class="listagd" href="./genre_details.html">${generos[i].name} </a>` 
    }
    generospeli += "|";
    let textodetail = `<h1 class="tdetail">${data.title}</h1> 
                       <ul class="listad">
                            <li class="datos" id="calificacion">Rating: ${data.vote_average}</li>
                            <li class="datos" id="estreno">Release date: ${data.release_date}</li>
                            <li class="datos" id="duracion">Duration: ${data.runtime}</li>
                            <li class="datos" id="genero">Generos: ${generospeli}</li>
                       </ul>
                    <p class="sinopsis">${data.overview}</p>
                    <div class="plataformasdiv"></div>`
        contenedor.innerHTML=textodetail
    
}).catch(function (error) {
    return error;
});

/* PLATAFORMAS */
fetch(urlPlataformas)
.then(function(response) {
    return response.json();

}).then(function(data) {
    let plataformas = document.querySelector('.plataformasdiv');
    let array = data.results;
    let texto = "<h2>Providers:</h2>"
    for(let i=0; i < 12; i++){
        texto += `<img class="plataformas" src="https://image.tmdb.org/t/p/original/${array[i].logo_path}"></a>`
    }
    plataformas.innerHTML=texto
    

}).catch(function (error) {
    return error;
});

/* TRAILER */
fetch(urlTrailer)
    .then(function(response){
        return response.json();

    }).then(function(infoTrailer){
        let trailer = document.querySelector('.contenedortrailer');
        if (infoTrailer.results.length > 0) {
        let texto = ""
            for(let i=0; i < 1; i++){ 
                let trailer = infoTrailer.results[i]
                if (trailer.key != undefined){
                    let video = infoTrailer.results[i].key
                    texto += `<article class="trailer">
                                <iframe src="https://www.youtube.com/embed/${video}" title="YouTube video player" width=491px height=200px frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </article>`
                }
            }
        trailer.innerHTML = texto
    
    }else {
        trailer.innerText = "NO HAY TRAILER DISPONIBLE"
       }
    }).catch(function(error){
    return error;
})

/* RECOMENDACIONES  */
let recomendaciones = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${api_key}&language=en-US&page=1`

fetch(recomendaciones)
    .then(function (respuesta) {
         return respuesta.json()
    })
    .then(function (informacion) {
        console.log(informacion)

        for (var i = 0; i < informacion.results.length; i++) {
            let id = informacion.results[i].id
            let title = informacion.results[i].title
            let annio = informacion.results[i].release_date.slice(0,4);
            console.log(informacion.results[i].poster_path)
            
            if (informacion.results[i].poster_path === "null") {
                let poster =  `./img/nodisponible.png`
            }else {
                let poster = `https://image.tmdb.org/t/p/original/${informacion.results[i].poster_path}`
            }
            let listadoRecomendadas = document.querySelector(".listado-series-recomendadas")
            listadoRecomendadas.innerHTML +=  `<article class="peliculas">
                                <a href="./Details_peliculas.html?id=${id}"> <img class="imagenes" src="${poster}"></a>
                                
                                <a class="nombres" href="./Details_peliculas.html?id=${id}">${title}</a>

                                <a class="nombres" href="./Details_peliculas.html?id=${id}">${annio}</a>

                                <a class="vermas" href="./detallePeliculas.html?id=${id}">Ver mas</a>
                            </article >`
    
    }
})