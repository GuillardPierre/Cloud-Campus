const fetchData = async (url) => {
  const rep = await fetch(url);
  const json = await rep.json();
  return json;
};
