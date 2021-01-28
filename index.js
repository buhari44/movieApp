const API_KEY = 'c77386890597a6be210618c2b75f778f'
    
const API_URL = 'https://api.themoviedb.org/3/movie/now_playing?api_key=' + API_KEY

axios.get(API_URL).then(function(response) {
  console.log("OUR RESPONSE", response)

  const movies = response.data.results
  const firstMovie = movies[0]

  document.querySelector('.movie-title').innerHTML = firstMovie.title

  document.querySelector('.movie-desc').textContent = firstMovie.overview

  const trendingMovies = document.querySelector('#movie-grid')

  // for(let i = 0; i < movies.length; i++) {
  //   console.log(movies[i].title)
  // }

  let trendingMoviesHTML = ''

  movies.forEach(function(item) {
    trendingMoviesHTML += `
      <div class="movie-card">
        <img src="https://image.tmdb.org/t/p/w500${item.poster_path}" alt="movie image">
        <h4>${item.title}</h4>
        <div class="row">
          <p class="year">${item.release_date}</p>
          <p class="rating">${item.vote_average}</p>
        </div>
      </div>
    `
  })

  trendingMovies.innerHTML = trendingMoviesHTML

  console.log(trendingMoviesHTML)
})
