const key="0e9cd842d9c20a927ec3ffdfadc76947";

const requests={
    fetchTrending:`/trending/all/day?api_key=${key}` ,
    fetchToprated:`/tv/popular?api_key=${key}&language=en-US&page=1`,
    fetchPopular:`/movie/popular?api_key=${key}&language=en-US&page=1`,
    fetchActionMovies:`/discover/movie?api_key=${key}&with_genres=28`,
     fetchComedyMovies:`/discover/movie?api_key=${key}&with_genres=35`, 
     fetchRomanceMovies:`/discover/movie?api_key=${key}&with_genres=10749`,
    
     /*/movie/top_rated?api_key=${key}&language=en-US&page=1*/
     
     /*/tv/popular?api_key=<<api_key>>&language=en-US&page=1*/
}

export default requests;