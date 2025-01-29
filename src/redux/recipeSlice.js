import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "e57d6a042e604897a860932e4f8c17f9";
const BASE_URL = "https://api.spoonacular.com/recipes";

// Fetch recipes and search recipes and type categories
export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async ({ query, categories }) => {
    console.log(query, "slice");
    console.log(categories, "slice");
    if (!query) {
      const response = await axios.get(
        `${BASE_URL}/search?query=Chicken+parmesan&number=9&apiKey=${API_KEY}`
      );
      return response.data.results;
    } if(query) {
      const response = await axios.get(
        `${BASE_URL}/search?query=${query}&type=${categories}&number=12&apiKey=${API_KEY}`
      );
      return response.data.results;
    }
  }
);

// Fetch recipe details by ID
export const fetchRecipeDetails = createAsyncThunk(
  "recipes/fetchRecipeDetails",
  async (recipeId) => {
    const response = await axios.get(
      `${BASE_URL}/${recipeId}/information?includeNutrition=false&apiKey=${API_KEY}`
    );
    return response.data;
  }
);

const recipeSlice = createSlice({
  name: "recipes",
  initialState: { recipes: [], recipe: null, status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.recipes = action.payload;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchRecipeDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRecipeDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.recipe = action.payload;
      })
      .addCase(fetchRecipeDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default recipeSlice.reducer;