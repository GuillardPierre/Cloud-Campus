const filterPlanetsPeople = (minus, top) => {
  const newPlanetsArr = allPlanets;
  return newPlanetsArr.filter(
    (planet) =>
      parseInt(planet.population) > minus && parseInt(planet.population) < top
  );
};

const handleSelectorChange = (e) => {
  let data = '';
  switch (e.target.value) {
    case '100000':
      tbodyZone.innerHTML = '';
      data = filterPlanetsPeople(0, 100000);
      data.forEach((planet) => createTableLine(tbodyZone, planet));
      break;
    case '100000000':
      tbodyZone.innerHTML = '';
      data = filterPlanetsPeople(100000, 100000000);
      data.forEach((planet) => createTableLine(tbodyZone, planet));
      break;
    case 'infinite':
      tbodyZone.innerHTML = '';
      data = filterPlanetsPeople(100000000, Infinity);
      data.forEach((planet) => createTableLine(tbodyZone, planet));
      break;

    default:
      tbodyZone.innerHTML = '';
      data = filterPlanetsPeople(0, Infinity);
      data.forEach((planet) => createTableLine(tbodyZone, planet));
      break;
  }
  addTableEventListener();
  displayPlanetsNumber(numbersPlanetDisplayZone, data.length);
};

const handleInputChange = (e) => {
  const newPlanetsArr = allPlanets;
  const rep = newPlanetsArr.filter((planet) =>
    planet.name.includes(e.target.value)
  );
  tbodyZone.innerHTML = '';
  rep.forEach((planet) => createTableLine(tbodyZone, planet));
  addTableEventListener();
  displayPlanetsNumber(numbersPlanetDisplayZone, rep.length);
};

const handleFilters = () => {
  selector.addEventListener('change', handleSelectorChange);
  input.addEventListener('input', handleInputChange);
};
