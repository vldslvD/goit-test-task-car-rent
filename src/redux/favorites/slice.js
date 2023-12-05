import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
  name: "favoritesSlice",
  initialState: {
    items: [],
  },
  reducers: {
    addToFavorites(state, action) {
      state.items.push(action.payload);
    },
    removeFromFavorites(state, action) {
      return {
        ...state,
        items: state.items.filter((advert) => advert.id !== action.payload.id),
      };
    },
  },
});
export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
