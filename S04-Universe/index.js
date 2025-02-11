const baseUrl = 'https://swapi.dev/api/';
const peopleDisplayZone = document.querySelector('.people');
const planetDisplayZone = document.querySelector('.planet');
const spaceshipDisplayZone = document.querySelector('.spaceship');

const fetchData = async (url) => {
  const rep = await fetch(url);
  const json = await rep.json();
  return json.results;
};

const displayDatas = (data, zone) => {
  zone.innerText = data;
};

const init = async () => {
  const people = await fetchData(`${baseUrl}people/`);
  const planets = await fetchData(`${baseUrl}planets/`);
  const spaceship = await fetchData(`${baseUrl}vehicles/`);
  displayDatas(people.length, peopleDisplayZone);
  displayDatas(planets.length, planetDisplayZone);
  displayDatas(spaceship.length, spaceshipDisplayZone);
};

document.addEventListener('DOMContentLoaded', init);
