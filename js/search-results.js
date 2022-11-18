let qs = location.search;
let qsObj = new URLSearchParams(qs); //convierte en objeto
let palabra = qsObj.get('buscador')//accedo al valor de la propiedad 
//impriendo el valor el el subtitulo
document.querySelector(".tsearch").innerHTML=`<span>Resultado de búsqueda: ${palabra}</span>`
//declare el endpoint
let url = `https://api.themoviedb.org/3/search/movie?api_key=7d4b7de655aa19e767e9ef8b0e0359b5&language=en-US&query=${palabra}&page=1&include_adult=false`


fetch(url).then(

    function(response) {
        return response.json();
    }
).then(
    function(data) {

        let peliculas = data.results;
        for (let i = 0; i < 5; i++) {
            console.log(peliculas[i]);
            document.querySelector(".contenedorpeli").innerHTML += `<article  class="sa"  >
                                        <h3>${peliculas[i].title}</h3>
                                        <a href="detail-movie.html?idPelicula=${peliculas[i].id}" >
                                        <img class="ims" src="https://image.tmdb.org/t/p/w500/${peliculas[i].poster_path}" alt=${peliculas[i].name}> </a>
                                        <p>(${peliculas[i].release_date})</p>
                                    </article> `
        }
        return data;
    }

).catch(
    function(error) {
        return error;
    }
);
