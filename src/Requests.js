const  API_KEY = '7ade5236f679e7f61fb2cad24930bacb';

const requests = {
    fechTrending: '/trending/all/week?api_key=${API_KEY}&language=en-US',
    fetchNetflixOriginals: '/discover/tv?api_key=${API_KEY}&with_networks=213',
    fetchTopRated: '/movie/top_rated?api_key=${API_KEY}&language=en-US',
    fetchActionMovies: '/discover/movie?api_key=${API_KEY}&with_genres=28',
    fetchComedyMovies: '/discover/movie?api_key=${API_KEY}&with_genres=35',
    fetchHorrorMovies:'/discover/movie?api_key=${API_KEY}&with_genres=27',
    fetchRomanceMovies: '/discover/movie?api_key=${API_KEY}&with_genres=10749',
    fetchDocumentaries:'/discover/movie?api_key=${API_KEY}&with_genres=99',
};
// https://api.themoviedb.org/3//discover/tv?api_key=7ade5236f679e7f61fb2cad24930bacb&with_networks=213

export default requests;