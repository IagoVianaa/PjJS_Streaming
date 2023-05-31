var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000
  },
<<<<<<< HEAD
});
=======
});

const apiKey = 'd464a5d67c9f591617622782ed3f4d87';

// URL base da API do TMDb
const baseUrl = 'https://api.themoviedb.org/3';

// Puxa filmes da API do TMDb
function fetchMovies() {
  const url = `${baseUrl}/movie/popular?api_key=${apiKey}`;

  return fetch(url)
    .then(response => response.json())
    .then(data => data.results.slice(0, 4))
    .catch(error => {
      console.error('Erro ao buscar filmes:', error);
      return [];
    });
}

// Cria os slides do Swiper com os filmes
function createSwiperSlides(movies) {
  const swiperWrapper = document.getElementById('swiper-wrapper');

  movies.forEach(movie => {
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');

    const movieTitle = document.createElement('div');
    movieTitle.classList.add('movie-title');
    movieTitle.textContent = movie.title;

    const moviePoster = document.createElement('img');
    moviePoster.classList.add('movie-poster');
    moviePoster.src = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
    moviePoster.alt = movie.title;

    slide.appendChild(moviePoster);
    slide.appendChild(movieTitle);
    swiperWrapper.appendChild(slide);
  });
}

// Inicializa o Swiper
function initializeSwiper() {
  new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });
}

// Função principal
async function main() {
  const movies = await fetchMovies();
  createSwiperSlides(movies);
  initializeSwiper();
}

main();


>>>>>>> 2983bd885b5455b3b5786e9b2135166c365a83af
