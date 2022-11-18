let api_key = '7d4b7de655aa19e767e9ef8b0e0359b5';
let urlPPop= `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`;
let urlPVal = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`;
let urlSPop = `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=en-US&page=1`;
let urlSVal = `https://api.themoviedb.org/3/tv/top_rated?api_key=${api_key}&language=en-US&page=1`;
let listaPopulares = document.querySelector("#ppopulares");
let listaSeries = document.querySelector("#pmasvisto");
let listaValoradas = document.querySelector("#spopulares");
console.log(listaPopulares)

fetch(urlPPop)
    .then(function (respuesta) {
        return respuesta.json();
    }).then(function (data) {
        console.log(data.results);
        let peliculas = data.results;
        for (let i = 0; i < 5; i++) {
            console.log(peliculas[i]);
            listaPopulares.innerHTML += `<article  class="sa"  >
                                            <a href="detail-movie.html?idPelicula=${peliculas[i].id}" >
                                            <h3>${peliculas[i].title}</h3>
                                            <h4>${peliculas[i].release_date}</h4>
                                            <img class="ims" src="https://image.tmdb.org/t/p/w500/${peliculas[i].poster_path}" alt=${peliculas[i].name}> </a>
                                         </article> `
        }
        return data;
    }).catch(function (error) {
        //console.log(error);
        return error;
    });

    fetch(urlSPop)
    .then(function (respuesta) {
        return respuesta.json();
    }).then(function (data) {
        console.log(data.results);
        let peliculas = data.results;
        for (let i = 0; i < 5; i++) {
            console.log(peliculas[i]);
            listaSeries.innerHTML += `<article  class="sa"  >
                                            <a href="detail-movie.html?idPelicula=${peliculas[i].id}" >
                                            <h3>${peliculas[i].title}</h3>
                                            <h4>${peliculas[i].release_date}</h4>
                                            <img class="ims" src="https://image.tmdb.org/t/p/w500/${peliculas[i].poster_path}" alt=${peliculas[i].name}> </a>
                                         </article> `
        }
        return data;
    }).catch(function (error) {
       // console.log(error);
        return error;
    });


    fetch(urlPVal)
    .then(function (respuesta) {
        return respuesta.json();
    }).then(function (data) {
        console.log(data.results);
        let peliculas = data.results;
        for (let i = 0; i < 5; i++) {
            console.log(peliculas[i]);
            listaValoradas.innerHTML += `<article  class="sa"  >
                                            <a href="detail-movie.html?idPelicula=${peliculas[i].id}" >
                                            <h3>${peliculas[i].title}</h3>
                                            <h4>${peliculas[i].release_date}</h4>
                                            <img class="ims" src="https://image.tmdb.org/t/p/w500/${peliculas[i].poster_path}" alt=${peliculas[i].name}> </a>
                                         </article> `
        }
        return data;
    }).catch(function (error) {
        //console.log(error);
        return error;
    });