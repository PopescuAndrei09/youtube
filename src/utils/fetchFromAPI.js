import axios from 'axios';

export const BASE_URL = process.env.REACT_APP_RAPID_API_KEY;

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_KEY,
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
