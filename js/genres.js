let urlGenresMovie = "https://api.themoviedb.org/3/genre/movie/list?api_key=7d4b7de655aa19e767e9ef8b0e0359b5&language=en-US" ;

let urlGenresEries = "https://api.themoviedb.org/3/genre/tv/list?api_key=7d4b7de655aa19e767e9ef8b0e0359b5&language=en-US";

let listaPeliculas = document.querySelector("#lista1");

let listaSeries = document.querySelector("#lista2");


fetch(urlGenresMovie)
.then(function (response) {
    return response.json();
})
.then(function (data) {
   
    let genres = data.genres;

    console.log(genres)

    let resultado = "";
    for (let i = 0; i < 16; i++) {
        
        resultado += `<a href="./detail-genres.html?idPelicula=${genres[i].id}"
                        <article class= "generosBox">
                            ${genres[i].name}
                        </article>
                    </a>`;
    }

    listaPeliculas.innerHTML = resultado ; 
    return data;
})
.catch(function (error) {
    return error;
});




fetch(urlGenresEries)
.then(function (response) {
    return response.json();
})
.then(function (data) {
   
    let genres = data.genres;

    console.log(genres)

    let resultadoSerie = "";
    for (let i = 0; i < genres.length; i++) {
        
        resultadoSerie += `<a href="./detail-genres.html?idPelicula=${genres[i].id}"
                                <article class= "generosBox">
                                    ${genres[i].name}
                                </article>
                            </a>`  ;
    }

    listaSeries.innerHTML = resultadoSerie ; 
    return data;
})
.catch(function (error) {
    return error;
});


