import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./recipeSlice";
import favoriteReducer from "./favoriteSlice";

export const store = configureStore({
  reducer: {
    recipes: recipeReducer,
    favorites: favoriteReducer,
  },
});
