// API Key:  40038a32
// API endpoint: https://www.omdbapi.com/?i=tt3896198&apikey=40038a32

async function getMovieData() {
    const movies = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=40038a32&s=the hunger games")
    let jsonMovie = await movies.json()
    console.log({ jsonMovie })
    return jsonMovie
}

getMovieData()

async function main() {
    let data = await getMovieData()
    const movieList = document.querySelector(".movies--container")
    console.log({ movieList })
    const innerHTML = data.Search.map(movie => (cardFunc(movie.Poster, movie.Title, movie.Year)))
    movieList.innerHTML = innerHTML
}
main()

function cardFunc(img, title, rating) {
    return `<div class="card">
        <img src="${img}" alt="" class="movie-img">
        <div class="content">
            <p>title: ${title}</p>
            <p>Year: ${rating}</p>
        </div>
    </div>`
}