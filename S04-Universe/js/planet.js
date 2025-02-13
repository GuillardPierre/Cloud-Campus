const baseUrl = 'https://swapi.dev/api/';
const tbodyZone = document.querySelector('.tbody');
const planetTitle = document.querySelector('.planet_title');
const planetInfos = document.querySelector('.infos');
const peopleInfos = document.querySelector('.people_infos');
const peopleInfosTitle = document.querySelector('.people_title');

let allPlanets = [];

const getPlanetInfo = async (e) => {
  const planetLine = e.target.closest('.planetLine');
  if (planetLine) {
    const nameElement = planetLine.querySelector('.name');
    const infoBis = allPlanets.filter(
      (planet) => planet.name === nameElement.innerText
    );
    displayPlanetInfo(infoBis[0]);
    peopleInfos.innerHTML = '';
    if (infoBis[0].residents.length) {
      infoBis[0].residents.forEach(async (resident) => {
        const residentData = await fetchData(resident);
        displayResident(residentData);
      });
    } else {
      displayResident('', true);
    }
  }
};

const init = async (url) => {
  let nextUrl = url;
  while (nextUrl) {
    const planets = await fetchData(nextUrl);
    planets.results.forEach((planet) => {
      allPlanets.push(planet);
      createTableLine(tbodyZone, planet);
    });
    nextUrl = planets.next;
  }
  const allLines = document.querySelectorAll('.planetLine');
  allLines.forEach((line) => line.addEventListener('click', getPlanetInfo));
};

document.addEventListener('DOMContentLoaded', () => init(`${baseUrl}planets/`));
