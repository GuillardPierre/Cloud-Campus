let url = 'https://dog.ceo/api/breeds/image/random';
const imgZone = document.querySelector('#img-dog');
const btn = document.querySelector('#btn');
const selector = document.querySelector('#selector');
const favZone = document.querySelector('#fav-zone');
let value = '';

fetch('https://dog.ceo/api/breeds/list/all')
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    const breedsArray = Object.entries(response.message).flatMap(
      ([breed, subBreeds]) =>
        subBreeds.length ? subBreeds.map((sub) => `${breed} ${sub}`) : breed
    );
    breedsArray.forEach((race) => {
      createElement('option', race, false, selector);
    });
  });

const newDog = () => {
  if (selector.value) {
    url = `https://dog.ceo/api/breed/${selector.value}/images/random`;
  }
  const rep = fetch(url)
    .then((response) => response.json())
    .then((response) => {
      createElement('img', false, response.message, imgZone);
      const actualImg = document.querySelector('.dogImg');
      actualImg.addEventListener('click', addToFavorite);
    });
};

const addToFavorite = (e) => {
  createElement('img', false, e.target.src, favZone, true);
};

const createElement = (type, name, src, target, imgFav) => {
  if (type === 'option') {
    const option = document.createElement('option');
    option.value = name.split(' ').join('/');
    option.textContent = name;
    target.appendChild(option);
  } else if (type === 'img') {
    const img = document.createElement('img');
    img.className = imgFav ? 'favDogImg' : 'dogImg';
    img.src = src;
    if (!imgFav) {
      const existingImg = document.querySelector('.dogImg');
      if (existingImg) {
        target.removeChild(existingImg);
      }
    }
    target.appendChild(img);
  }
};

btn.addEventListener('click', newDog);
