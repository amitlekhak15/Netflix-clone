const API_KEY ="1d1412adc1564916bfb4fd83a0b39acd";
const requests={
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    FetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    FetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    FetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    FetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    FetchDocumentries:`/discover/movie?api_key=${API_KEY}&with_genres=99`
}
export default requests