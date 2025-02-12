const baseUrl = 'https://swapi.dev/api/';
const tbodyZone = document.querySelector('.tbody');
const planetTitle = document.querySelector('.planet_title');
const planetInfos = document.querySelector('.infos');
const peopleInfos = document.querySelector('.people_infos');
const peopleInfosTitle = document.querySelector('.people_title');

const fetchData = async (url) => {
  const rep = await fetch(url);
  const json = await rep.json();
  return json;
};

const createTableLine = (data) => {
  tbodyZone.innerHTML += `
    <tr class="planetLine">
      <th class="name">${data.name}</th>
      <th>${data.climate}</th>
    </tr>
  `;
};

const getPlanetInfo = async (e) => {
  const planetLine = e.target.closest('.planetLine');
  if (planetLine) {
    const nameElement = planetLine.querySelector('.name');
    const dataInfo = await fetchData(
      `${baseUrl}planets/?search=${nameElement.innerText}`
    );
    console.log(dataInfo.results[0]);
    displayPlanetInfo(dataInfo.results[0]);
    peopleInfos.innerHTML = '';
    if (dataInfo.results[0].residents.length) {
      dataInfo.results[0].residents.forEach(async (resident) => {
        const residentData = await fetchData(resident);
        displayResident(residentData);
      });
    } else {
      displayResident('', true);
    }
  }
};

const displayPlanetInfo = (data) => {
  planetTitle.innerText = data.name;
  planetInfos.innerHTML = `
    <h3>Informations sur la planète :</h3>
    <p><span>Climat :</span> ${data.climate}</p>
    <p><span>Diamètre :</span> ${data.diameter}km</p>
    <p><span>Gravité :</span> ${data.gravity}</p>
    <p><span>Orbital period :</span> ${data.orbital_period} années</p>
    <p><span>Population :</span> ${data.population}</p>
    <p><span>Durée de rotation :</span> ${data.rotation_period} jours</p>
    <p><span>Etendues d'eau :</span> ${data.surface_water}</p>
    <p><span>Type de terrain :</span> ${data.terrain}</p>
  `;
};

const displayResident = (data, noData) => {
  peopleInfosTitle.classList.remove('hidden');
  if (noData) {
    peopleInfos.innerHTML += `
    <p>Personne de connu ne vient de cette planète...</p>
    `;
    return;
  }
  peopleInfos.innerHTML += `
    <p>${data.name}</p>
  `;
};

const init = async (url) => {
  let nextUrl = url;
  while (nextUrl) {
    const planets = await fetchData(nextUrl);
    planets.results.forEach((planet) => {
      createTableLine(planet);
    });
    nextUrl = planets.next;
  }
  const allLines = document.querySelectorAll('.planetLine');
  allLines.forEach((line) => line.addEventListener('click', getPlanetInfo));
};

document.addEventListener('DOMContentLoaded', () => init(`${baseUrl}planets/`));
