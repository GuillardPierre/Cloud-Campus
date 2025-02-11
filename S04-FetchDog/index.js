let url = 'https://dog.ceo/api/breeds/image/random';
const imgZone = document.querySelector('#img-dog');
const btn = document.querySelector('#btn');
const selector = document.querySelector('#selector');
const favZone = document.querySelector('#fav-zone');

const init = async () => {
  const breeds = await fetchBreeds();
  createOptions(breeds);
  btn.addEventListener('click', generateNewDog);
};

const fetchBreeds = async () => {
  const rep = await fetch('https://dog.ceo/api/breeds/list/all');
  const json = await rep.json();
  const breedsArray = Object.entries(json.message).flatMap(
    ([breed, subBreeds]) =>
      subBreeds.length ? subBreeds.map((sub) => `${breed} ${sub}`) : breed
  );
  return breedsArray;
};

const createOptions = (breedsArray) => {
  const optionsHTML = breedsArray.forEach((race) => {
    const option = `<option value="${race
      .split(' ')
      .join('/')}">${race}</option>`;
    selector.innerHTML += option;
  });
};

const generateNewDog = async () => {
  if (selector.value) {
    url = `https://dog.ceo/api/breed/${selector.value}/images/random`;
  }

  const rep = await fetch(url);
  const json = await rep.json();
  imgZone.innerHTML = `<img src="${json.message}" class="dogImg">`;
  const actualImg = document.querySelector('.dogImg');
  actualImg.addEventListener('click', addToFavorite);
};

const addToFavorite = (e) => {
  favZone.innerHTML += `<img src="${e.target.src}" class="favDogImg">`;
  const allFav = document.querySelectorAll('.favDogImg');
  allFav.forEach((fav) => fav.addEventListener('click', removeFav));
};

const removeFav = (e) => {
  e.target.remove();
};

document.addEventListener('DOMContentLoaded', init);
