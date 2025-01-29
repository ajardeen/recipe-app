import { createSlice } from "@reduxjs/toolkit";

const loadFavorites = () => {
  return [];
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: loadFavorites(),
  reducers: {
    addFavorite: (state, action) => {
      const exists = state.some((recipe) => recipe.id === action.payload.id);
      if (!exists) {
        state.push(action.payload);
      } else {
        alert("Recipe already added to favorites");
      }
    },
    removeFavorite: (state, action) => {
      return state.filter((recipe) => recipe.id !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite, clearFavorites } =
  favoriteSlice.actions;
export default favoriteSlice.reducer;
