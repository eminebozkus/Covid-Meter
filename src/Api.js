import axios from "axios";
const API = "https://covid19.mathdro.id/api";
export const fetchCountry = async (country) => {
  let newApi = API;
  if (country) {
    newApi = `${API}/countries/${country}`;
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(newApi);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    return error;
  }
};
export const fetchData = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${API}/countries`);
    return countries.map((country) => country.name);
  } catch (error) {
    return error;
  }
};
