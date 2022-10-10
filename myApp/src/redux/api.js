export const GET = async url => {
  const API_url = `${url}`;

  let response = await fetch(API_url, {method: `GET`});
  response = response.json();
  return response;
};

const API_KEY = `d32309c65fdfbb3d94460e54b7c2e2f8`;
const base_url = `https://api.themoviedb.org/3`;
