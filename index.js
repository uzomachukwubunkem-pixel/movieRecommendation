const trendingMoviesContainer = document.querySelector(".trending-movies");

async function fetchTrendingMovies() {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZWY2NTMzMWM0ZjBiMzZkZDZlMWVkZmEyNjQ2ZDRlMyIsIm5iZiI6MTc3MDE5MzUwNi4xMjcsInN1YiI6IjY5ODMwMjYyNDY0ODIxODFmYTMwMTQyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5I_kHL2nA4pr8_VB55bUHheQHJi0UF0YhVtiFdwfvxk",
        },
      },
    );

    const data = await response.json();

    if (data && data.results && data.results.length > 0) {
      // loop over each movies
      for (let movie of data.results) {
        const movieCard = document.createElement("article");

        movieCard.classList.add("card");

        movieCard.innerHTML = `<div class="poster"></div>
            <div class="card-body">
              <p class="title"> ${movie.original_title} </p>
              <div class="meta"><span>Action</span><span>⭐ ${movie.vote_average.toFixed(1)} </span></div>
            </div>`;

        const moviePoster = movieCard.querySelector(".poster");

        moviePoster.style.backgroundImage = `url('https://image.tmdb.org/t/p/w500${movie.poster_path})`;
        moviePoster.style.backgroundSize = "cover";
        moviePoster.style.backgroundPosition = "center";

        trendingMoviesContainer.appendChild(movieCard);
      }
    }
  } catch (error) {
    console.log(error.message);
  }
}
fetchTrendingMovies();





const topMoviesContainer = document.querySelector(".top-rated-movies");


async function fetchTopMovies() {
  try {
    const topMoviesResponse = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZWY2NTMzMWM0ZjBiMzZkZDZlMWVkZmEyNjQ2ZDRlMyIsIm5iZiI6MTc3MDE5MzUwNi4xMjcsInN1YiI6IjY5ODMwMjYyNDY0ODIxODFmYTMwMTQyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5I_kHL2nA4pr8_VB55bUHheQHJi0UF0YhVtiFdwfvxk",
        },
      },
    );

    const topMoviesData = await topMoviesResponse.json();
    // console.log(topMoviesData);

if (topMoviesData && topMoviesData.results && topMoviesData.results.length  > 0 ) {

  for(let topMovie of topMoviesData.results ){

    const topMovieCard = document.createElement("article");
    topMovieCard.classList.add("card");
    
    topMovieCard.innerHTML = ` <div class="poster"></div>
            <div class="card-body">
              <p class="title"> ${topMovie.original_title} </p>
              <div class="meta"><span>Action</span><span>⭐ ${topMovie.vote_average.toFixed(1)}</span></div>
            </div>`;
  const topMoviePoster = topMovieCard.querySelector(".poster");

        topMoviePoster.style.backgroundImage = `url('https://image.tmdb.org/t/p/w500${topMovie.poster_path})`;
        topMoviePoster.style.backgroundSize = "cover";
        topMoviePoster.style.backgroundPosition = "center";



            topMoviesContainer.appendChild(topMovieCard);
  }
}


  } catch (error) {
    console.log(error.message);
  }

}


  fetchTopMovies();