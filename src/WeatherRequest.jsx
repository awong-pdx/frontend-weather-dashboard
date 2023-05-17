import axios from 'axios';

export default async function requestLonLat(latitude, longitude, URI, API_KEY) {
  const URIparams = {
    lat: latitude,
    lon: longitude,
    appid: API_KEY,
    units: 'imperial',
  };

  try {
    const response = await axios(
      `${URI}?${new URLSearchParams(URIparams).toString()}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
}
