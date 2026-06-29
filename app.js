// API Key:  40038a32
// API endpoint: https://www.omdbapi.com/?apikey=40038a32

async function getMovieData(SearchTerm) {
    const movies = await fetch(`https://www.omdbapi.com/?apikey=40038a32&s=${SearchTerm}`);
    const jsonMovie = await movies.json();
    return jsonMovie;
}
   const searchInput = document.getElementById("searchInput");
   const searchBtn = document.getElementById("searchBtn");
   const movielist = document.querySelector(".movies--container");

   searchBtn.addEventListener("click", async function () {
    const SearchTerm = searchInput.value.trim();

    if (SearchTerm === "") {
        movielist.innerHTML = "<p>Please enter a movie title.</p>";
        return;
    }
    const data = await getMovieData(SearchTerm);

    if (!data.search) {
        movieList.innerHTML = "<p> No movies found.</P>";
        return;
    }
    movieList.innerHTML = data.search
       .map(movie => cardFunc(movie.Poster, movie.Title, movie.Year))
       .join("");
});

function cardFunc(img, title, rating) {
    return `<div class="card">
        <img src="${img}" alt="" class="movie-img">
        <div class="content">
            <p>title: ${title}</p>
            <p>Year: ${rating}</p>
        </div>
    </div>`
}
const burgerBtn = document .getElementById("burgerBtn");
const navLinks = document .getElementById("navLinks");
burgerBtn.addEventListener("click", ()=> {
    navLinks.classList.toggle("active");
});