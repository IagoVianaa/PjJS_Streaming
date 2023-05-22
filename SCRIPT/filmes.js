const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YmQzNmIxZjcwMDk1OTZlNjRhMDk4YzA5MDM4NjQ3YyIsInN1YiI6IjY0NjY0NzRiMmJjZjY3MDE3MmIwMGJlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jOSDlV0wy61a8fTC7igmPdUXsEVm_Cvyy_vO3xI9Miw'
  }
};

async function getMoviesList() {
  let response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options).then(response => response.json());

  return response;
};

let movies = getMoviesList();

movies.then(data => {
  const moviesContainer = document.getElementById('movies');
  let lstMovies = data.results;

  lstMovies.forEach(movie => {
    // Obter o ID do filme
    const movieId = movie.id;

    // Criar um elemento <div> para exibir a imagem do filme
    const movieElement = document.createElement('div');
    movieElement.setAttribute("class", "conteudo-filme");
    movieElement.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w342${movie.poster_path}" alt="${movie.title}" data-title="${movie.title}" data-overview="${movie.overview}" data-toggle="modal" data-target="#movieModal${movieId}">`;

    // Adicionar o elemento do filme à lista de filmes
    moviesContainer.appendChild(movieElement);

    // Obter os vídeos do filme
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, options)
      .then(response => response.json())
      .then(response => {
        const videos = response.results;
        // Verificar se o vídeo é um trailer
        const trailer = videos.find(video => video.type === 'Trailer');
        if (trailer) {
          // Criar o elemento do pop-up do trailer
          const modal = `
        <div class="modal fade" id="movieModal${movieId}" tabindex="-1" role="dialog" aria-labelledby="movieModalLabel${movieId}" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="movieModalLabel${movieId}">${movie.title}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe class="embed-responsive-item" src="" allowfullscreen></iframe>
                </div>
                <p>${movie.overview}</p>
              </div>
            </div>
          </div>
        </div>
      `;

          // Adicionar o elemento do pop-up à página
          document.body.insertAdjacentHTML('beforeend', modal);

          // Armazenar o trailer.key em uma variável
          const trailerKey = trailer.key;

          // Abrir o modal e definir o src do iframe ao clicar no botão de abrir
          $(`#movieModal${movieId}`).on('shown.bs.modal', function () {
            $(this).find('iframe').attr('src', `https://www.youtube.com/embed/${trailerKey}`);
          });

          // Adicionar evento de fechamento do modal
          $(`#movieModal${movieId}`).on('hidden.bs.modal', function () {
            // Pausar o vídeo ao fechar o pop-up
            $(this).find('iframe').attr('src', '');
          });
        } else {
          // Criar o elemento do pop-up sem trailer
          const modal = `
              <div class="modal fade" id="movieModal${movieId}" tabindex="-1" role="dialog" aria-labelledby="movieModalLabel${movieId}" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="movieModalLabel${movieId}">${movie.title}</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <p>No trailer available for this movie.</p>
                      <p>${movie.overview}</p>
                    </div>
                  </div>
                </div>
              </div>
            `;

          // Adicionar o elemento do pop-up à página
          document.body.insertAdjacentHTML('beforeend', modal);
        }
      })
      .catch(err => console.error(err));
  });
})
  .catch(err => console.error(err));


