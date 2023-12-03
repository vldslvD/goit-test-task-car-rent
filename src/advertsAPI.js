import axios from 'axios';

axios.defaults.baseURL =
  'https://656a6268dac3630cf7270cc8.mockapi.io/api';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['accept'] = 'application/json';

export async function fetchRentCars() {
  const response = await axios.get('/rentCars');
  return response.data;
}

export async function fetchAdvert() {
  const response = await axios.get(`/rentCars/${id}`);
  return response.data;
}
