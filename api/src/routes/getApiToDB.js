const axios = require("axios");




const getApiData = async()=> {
    try {
        let movies = []
        const baseUrl = "https://api.themoviedb.org/3/movie/popular?api_key=82341ee22a21821728d5d31086984194&language=en-US&page="
        for (let i = 1; i < 7; i++) {
            let page = i
            const urlData = await axios(`${baseUrl}${page}`);
            console.log("urldata", urlData.data.results)
            //const json = await urlData.json()
            const results = urlData.data.results
            results.map((movie) => {
                movies.push({
                    id: movie.id,
                    title: movie.title,
                    original_language: movie.original_language,
                    original_title: movie.original_title,
                    overview: movie.overview,
                    popularity: movie.popularity,
                    poster_path: movie.poster_path,
                    release_date: movie.release_date,
                    vote_average: movie.vote_average,
                    vote_count: movie.vote_count,
                    backdrop_path: movie.backdrop_path,


                })

            })
            
        }
        
        return movies
  } catch(error){
      console.log(error);
  }
  
}

async function getApiId(id) {
    try {
        const urlDetail = await axios(`https://api.themoviedb.org/3/movie/${id}}?api_key=82341ee22a21821728d5d31086984194&language=en-US`)  
        return urlDetail.data

    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    getApiData,
    getApiId
};