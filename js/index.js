let api_key = '7d4b7de655aa19e767e9ef8b0e0359b5';
let urlPPop= `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`;
let urlPVal = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`;
let urlSPop = `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=en-US&page=1`;
let urlSVal = `https://api.themoviedb.org/3/tv/top_rated?api_key=${api_key}&language=en-US&page=1`;
let listaPpopulares = document.querySelector("#ppopulares");
let listaPmasvisto = document.querySelector("#pmasvisto");
let listaSpopulares = document.querySelector("#spopulares");
let listaSmasvisto = document.querySelector("#smasvisto");
console.log(listaPpopulares)

fetch(urlPPop)
    .then(function (respuesta) {
        return respuesta.json();
    }).then(function (data) {
        console.log(data.results);
        let peliculas = data.results;
        for (let i = 0; i < 5; i++) {
            console.log(peliculas[i]);
            listaPpopulares.innerHTML += `<article  class="sa"  >
                                            <h3>${peliculas[i].title}</h3>
                                            <a href="detail-movie.html?idPelicula=${peliculas[i].id}" >
                                            <img class="ims" src="https://image.tmdb.org/t/p/w500/${peliculas[i].poster_path}" alt=${peliculas[i].title}> </a>
                                            <p>(${peliculas[i].release_date})</p>
                                         </article> `
        }
        return data;
    }).catch(function (error) {
        //console.log(error);
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
            listaPmasvisto.innerHTML += `<article  class="sa"  >
                                            <h3>${peliculas[i].title}</h3>
                                            <a href="detail-movie.html?idPelicula=${peliculas[i].id}" >
                                            <img class="ims" src="https://image.tmdb.org/t/p/w500/${peliculas[i].poster_path}" alt=${peliculas[i].title}> </a>
                                            <p>(${peliculas[i].release_date})</p>
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
            listaSpopulares.innerHTML += `<article  class="sa"  >
                                        <h3>${peliculas[i].name}</h3>
                                        <a href="detail-movie.html?idPelicula=${peliculas[i].id}" >
                                        <img class="ims" src="https://image.tmdb.org/t/p/w500/${peliculas[i].poster_path}" alt=${peliculas[i].name}> </a>
                                        <p>(${peliculas[i].first_air_date})</p>
                                    </article> `
        }
        return data;
    }).catch(function (error) {
       // console.log(error);
        return error;
    });


    fetch(urlSVal)
    .then(function (respuesta) {
        return respuesta.json();
    }).then(function (data) {
        console.log(data.results);
        let peliculas = data.results;
        for (let i = 0; i < 5; i++) {
            console.log(peliculas[i]);
            listaSmasvisto.innerHTML += `<article  class="sa"  >
                                        <h3>${peliculas[i].name}</h3>
                                        <a href="detail-movie.html?idPelicula=${peliculas[i].id}" >
                                        <img class="ims" src="https://image.tmdb.org/t/p/w500/${peliculas[i].poster_path}" alt=${peliculas[i].name}> </a>
                                        <p>(${peliculas[i].first_air_date})</p>
                                    </article> `
        }
        return data;
    }).catch(function (error) {
       // console.log(error);
        return error;
    });