let qs = location.search;
let qsObj = new URLSearchParams(qs);
let palabra = qs.Obj.get('busqueda')

let url = 'https://api.themoviedb.org/3/search/movie?api_key=<<7d4b7de655aa19e767e9ef8b0e0359b5>>&language=en-US&page=1&include_adult=false'

fetch(url).then(

    function(response) {
        return response.json;
    }
).then(
    function(data) {
        return data.results;
    }

).catch(
    function(error) {
        return error;
    }
);

