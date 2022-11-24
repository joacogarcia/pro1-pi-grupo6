let qs = location.search;
let qsObj = new URLSearchParams(qs);
let palabra = qsObj.get('idPelicula');

let api_key = '7d4b7de655aa19e767e9ef8b0e0359b5';
let urlDetalle = `https://api.themoviedb.org/3/movie/${palabra}?api_key=${api_key}&language=en-US&append_to_response=palabrabuscar`;
let urlTrailer = `https://api.themoviedb.org/3/movie/${palabra}/videos?api_key=${api_key}&language=en-US`;
let urlPlataformas = `https://api.themoviedb.org/3/movie/${palabra}/watch/providers?api_key=${api_key}`;


let imagen     = document.querySelector('.imgdetail');
let contenedor = document.querySelector('.contenedortitulodetails');

fetch(urlDetalle)
.then(function(response) {
    return response.json();

}).then(function(data) {
    imagen.src = `https://image.tmdb.org/t/p/original/${data.poster_path}`;
    let generos = data.genres;
    let generospeli = "";
    for (let i = 0; i < generos.length ; i++) {
        generospeli += `| <a class="listagd" href="./detail-genres.html">${generos[i].name} </a>` 
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

let favoritos = [];
let recuperoStorage = localStorage.getItem("favoritos");
if (recuperoStorage != null){
    favoritos= JSON.parse(recuperoStorage);
    }


let link= document.querySelector(".clave");

link.addEventListener("click", function(e){
    e.preventDefault();
    if (favoritos.includes(palabra)){
        let indice= favoritos.indexOf(palabra);
        favoritos.splice(indice, 1);
        link.innerText= "Add to Favorites 🤍";
        link.style.color = "white";
    } else {
        favoritos.push(palabra);
        link.innerText= "Remove from Favorites";
        link.style.color = "white";
    }
    
    let moviesFavToString = JSON.stringify(favoritos);
    localStorage.setItem("favoritos", moviesFavToString);
    })


fetch(urlTrailer)
    .then(function(response){
        return response.json();

    }).then(function(infoTrailer){
        let trailer = document.querySelector('.sectrailer');
        if (infoTrailer.results.length > 0) {
        let trailerpeli = ""
            for(let i=0; i < 1; i++){ 
                let trailer = infoTrailer.results[i]
                if (trailer.key != undefined){
                    let video = infoTrailer.results[i].key
                    trailerpeli += `<article class="trailer">
                                <iframe src="https://www.youtube.com/embed/${video}" title="YouTube video player" width=491px height=276px frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </article>`
                }
            }
        trailer.innerHTML = trailerpeli
    
    }else {
        trailer.innerText = "NO HAY TRAILER DISPONIBLE"
       }
    }).catch(function(error){
    return error;
})

