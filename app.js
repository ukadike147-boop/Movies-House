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

    if (!data.Search) {
        movielist.innerHTML = "<p> No movies found.</P>";
        return;
    }
    movielist.innerHTML = data.Search
       .map(movie => cardFunc(movie.Poster, movie.Title, movie.Year))
       .join("");
});

function cardFunc(img, title, rating) {
    return
    let movies = data.Search;
    const sortSelect = document.getElementById("sortSelect");
    if (sortSelect.value === "year-new") {
        movies.sort((a, b) => b.Year - a.Year);
    }
    if (sortSelect.value === "year-old") {
        movies.sort((a, b) => a.Year - b.Year);
    }
    if (sortSelect.value === "title") {
        movies.sort((a, b) => a.Title.localeCompare(b.Title));
    }
    movielist.innerHTML = movies
    .map(movie => cardFunc(movie.Poster,movie.Title, movie.Year))
    .join("");
}
const burgerBtn = document.getElementById("burgerBtn");
const navLinks = document.getElementById("navLinks");

burgerBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});