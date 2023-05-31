const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDY0YTVkNjdjOWY1OTE2MTc2MjI3ODJlZDNmNGQ4NyIsInN1YiI6IjY0NzIzOWJjODgxM2U0MDEyNDI3MDQ2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6sZSLwfaURevZ0-yXfw8eHx8PPu5CioJtio21FWWurI'
  }
};

async function getSeriesList() {
  let response = await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', options).then(response => response.json());

  return response;
};

let series = getSeriesList();

series.then(data => {
  const seriesContainer = document.getElementById('series');
  let lstSeries = data.results;

  lstSeries.forEach(serie => {
    // Obter o ID do filme      
    const serieId = serie.id;

    // Criar um elemento <div> para exibir a imagem do filme
    const movieElement = document.createElement('div');
    movieElement.setAttribute("class", "conteudo-filme");
    movieElement.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w342${serie.poster_path}" alt="${serie.name}" data-title="${serie.name}" data-overview="${serie.overview}" data-toggle="modal" data-target="#movieModal${serieId}">`;

    // Adicionar o elemento do filme à lista de filmes
    seriesContainer.appendChild(movieElement);

    // Obter os vídeos do filme
    fetch(`https://api.themoviedb.org/3/tv/${serieId}/videos?language=en-US`, options)
      .then(response => response.json())
      .then(response => {
        const videos = response.results;
        // Verificar se o vídeo é um trailer
        const trailer = videos.find(video => video.type === 'Trailer');
        if (trailer) {
          // Criar o elemento do pop-up do trailer
          const modal = `
          <div class="modal fade" id="movieModal${serieId}" tabindex="-1" role="dialog" aria-labelledby="movieModalLabel${serieId}" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="movieModalLabel${serieId}">${serie.name}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <p>${serie.overview}</p>
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe class="embed-responsive-item" src="" allowfullscreen></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>`;

          // Adicionar o elemento do pop-up à página
          document.body.insertAdjacentHTML('beforeend', modal);

          // Armazenar o trailer.key em uma variável
          const trailerKey = trailer.key;

          // Abrir o modal e definir o src do iframe ao clicar no botão de abrir
          $(`#movieModal${serieId}`).on('shown.bs.modal', function () {
            $(this).find('iframe').attr('src', `https://www.youtube.com/embed/${trailerKey}`);
          });

          // Adicionar evento de fechamento do modal
          $(`#movieModal${serieId}`).on('hidden.bs.modal', function () {
            // Pausar o vídeo ao fechar o pop-up
            $(this).find('iframe').attr('src', '');
          });
        } else {
          // Criar o elemento do pop-up sem trailer
          const modal = `
              <div class="modal fade" id="movieModal${serieId}" tabindex="-1" role="dialog" aria-labelledby="movieModalLabel${serieId}" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="movieModalLabel${serieId}">${serie.title}</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <p>No trailer available for this movie.</p>
                      <p>${serie.overview}</p>
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


