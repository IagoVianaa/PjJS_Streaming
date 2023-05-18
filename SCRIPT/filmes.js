const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YmQzNmIxZjcwMDk1OTZlNjRhMDk4YzA5MDM4NjQ3YyIsInN1YiI6IjY0NjY0NzRiMmJjZjY3MDE3MmIwMGJlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jOSDlV0wy61a8fTC7igmPdUXsEVm_Cvyy_vO3xI9Miw'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    .then(response => response.json())
    .then(data => {
        const moviesContainer = document.getElementById('movies');
        const movies = data.results
        movies.forEach(movie => {
            const movieElement = document.createElement('div');
            movieElement.setAttribute("class", "conteudo-filme")
            movieElement.innerHTML = `
              <h2>${movie.title}</h2>
              <p>${movie.overview}</p>
              <img src="https://image.tmdb.org/t/p/w342${movie.poster_path}" alt="${movie.title}">
            `;
            moviesContainer.appendChild(movieElement);
          });
        })
    .catch(err => console.error(err));