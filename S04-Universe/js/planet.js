const baseUrl = 'https://swapi.dev/api/';

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

const addTableEventListener = () => {
  const allLines = document.querySelectorAll('.planetLine');
  allLines.forEach((line) => {
    line.removeEventListener('click', getPlanetInfo);
    line.addEventListener('click', getPlanetInfo);
  });
};

const getPlanets = async (url) => {
  let nextUrl = url;
  while (nextUrl) {
    const planets = await fetchData(nextUrl);
    planets.results.forEach((planet) => {
      allPlanets.push(planet);
      createTableLine(tbodyZone, planet);
    });
    nextUrl = planets.next;
    displayPlanetsNumber(numbersPlanetDisplayZone, allPlanets.length);
    addTableEventListener();
  }
};

const init = () => {
  getPlanets(`${baseUrl}planets/`);
  handleFilters();
};

document.addEventListener('DOMContentLoaded', () => init());
