let url = 'https://dog.ceo/api/breeds/image/random';
const imgZone = document.querySelector('#img-dog');
const btn = document.querySelector('#btn');
const selector = document.querySelector('#selector');
const favZone = document.querySelector('#fav-zone');

fetch('https://dog.ceo/api/breeds/list/all')
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    const breedsArray = Object.entries(response.message).flatMap(
      ([breed, subBreeds]) =>
        subBreeds.length ? subBreeds.map((sub) => `${breed} ${sub}`) : breed
    );

    const optionsHTML = breedsArray.forEach((race) => {
      const option = `<option value="${race
        .split(' ')
        .join('/')}">${race}</option>`;
      selector.innerHTML += option;
    });
  });

const newDog = () => {
  if (selector.value) {
    url = `https://dog.ceo/api/breed/${selector.value}/images/random`;
  }

  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      imgZone.innerHTML = `<img src="${response.message}" class="dogImg">`;
      const actualImg = document.querySelector('.dogImg');
      actualImg.addEventListener('click', addToFavorite);
    });
};

const addToFavorite = (e) => {
  favZone.innerHTML += `<img src="${e.target.src}" class="favDogImg">`;
  const allFav = document.querySelectorAll('.favDogImg');
  allFav.forEach((fav) => fav.addEventListener('click', removeFav));
};

const removeFav = (e) => {
  e.target.remove();
};

btn.addEventListener('click', newDog);
