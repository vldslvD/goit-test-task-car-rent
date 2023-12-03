import { rentCarsOperations } from "../rentCars";
import { createSlice } from "@reduxjs/toolkit";
const { fetchRentCars } = rentCarsOperations

export const rentCarsSlice = createSlice({
  name: "rentCars",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers(builder) {
    builder
      .addCase(fetchRentCars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRentCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchRentCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
