// API Key:  40038a32
// API endpoint: http://www.omdbapi.com/?i=tt3896198&apikey=40038a32

async function getMovieData() {
    const movies = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=40038a32&s=the hunger games")
    let jsonMovie = await movies.json()
    console.log({ jsonMovie })
    return jsonMovie
}

getMovieData()

async function main() {
    let data = await getMovieData()
    const movieList = document.querySelector(".movie-list")
    console.log({ movieList })
    const innerHTML = data.Search.map(movie => (`<div>${movie.Title}</div>`))
    movieList.innerHTML = innerHTML
}
main()