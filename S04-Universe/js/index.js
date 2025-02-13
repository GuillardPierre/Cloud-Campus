const baseUrl = 'https://swapi.dev/api/';
const peopleDisplayZone = document.querySelector('.people');
const planetDisplayZone = document.querySelector('.planet');
const spaceshipDisplayZone = document.querySelector('.spaceship');

const displayDatas = (data, zone) => {
  zone.innerText = data;
};

const init = async () => {
  const people = await fetchData(`${baseUrl}people/`);
  const planets = await fetchData(`${baseUrl}planets/`);
  const spaceship = await fetchData(`${baseUrl}vehicles/`);
  displayDatas(people.count, peopleDisplayZone);
  displayDatas(planets.count, planetDisplayZone);
  displayDatas(spaceship.count, spaceshipDisplayZone);
};

document.addEventListener('DOMContentLoaded', init);
