import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://656a6268dac3630cf7270cc8.mockapi.io/api';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['accept'] = 'application/json';

// export const fetchRentCars = createAsyncThunk(
//   'rentCars/fetchRentCars',
//   async (credentials, {rejectWithValue}) => {
//     try {
//       const response = await axios.get(`/adverts?page=${credentials}&limit=12`);
//     return response.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
export const fetchRentCars = createAsyncThunk(
  'rentCars/fetchRentCars',
  async (_, {rejectWithValue}) => {
    try {
      const response = await axios.get(`/adverts`);
    return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);