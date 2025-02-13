const numbersPlanetDisplayZone = document.querySelector('.planets_numbers');
const tbodyZone = document.querySelector('.tbody');
const planetTitle = document.querySelector('.planet_title');
const planetInfos = document.querySelector('.infos');
const peopleInfos = document.querySelector('.people_infos');
const peopleInfosTitle = document.querySelector('.people_title');
const selector = document.querySelector('.selector');
const input = document.querySelector('.input');

const createTableLine = (zone, data) => {
  zone.innerHTML += `
      <tr class="planetLine">
        <th class="name">${data.name}</th>
        <th>${data.climate}</th>
      </tr>
    `;
};

const createDataElement = (icon, label, value) => {
  return `
      <div class="data-type">
        <img class="data-type-img" src="${icon}">
        <p><span>${label} :</span> ${value}</p>
      </div>
    `;
};

const displayPlanetInfo = (data) => {
  const planetData = [
    { icon: '../images/climate.svg', label: 'Climat', value: data.climate },
    {
      icon: '../images/diameter.svg',
      label: 'Diamètre',
      value: data.diameter ? `${data.diameter}km` : 'Inconnu',
    },
    { icon: '../images/gravity.svg', label: 'Gravité', value: data.gravity },
    {
      icon: '../images/orbital.svg',
      label: 'Orbital period',
      value: `${data.orbital_period} années`,
    },
    {
      icon: '../images/population.svg',
      label: 'Population',
      value: data.population,
    },
    {
      icon: '../images/day.svg',
      label: 'Durée de rotation',
      value: `${data.rotation_period} jours`,
    },
    {
      icon: '../images/water.svg',
      label: "Etendues d'eau",
      value: data.surface_water,
    },
    {
      icon: '../images/ground.svg',
      label: 'Type de terrain',
      value: data.terrain,
    },
  ];

  planetTitle.innerText = data.name;
  planetInfos.innerHTML = `
      <h3>Informations sur la planète :</h3>
      ${planetData
        .map((item) => createDataElement(item.icon, item.label, item.value))
        .join('')}
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

const displayPlanetsNumber = (zone, number) => {
  zone.innerHTML = `<p>Nombre de planètes : <span>${number}</span>  </p>`;
};
