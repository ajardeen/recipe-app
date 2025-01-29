import React from "react";
import { useSelector, useDispatch } from "react-redux";
import RecipeCard from "./RecipeCard";
import { BadgeX } from "lucide-react";
import { removeFavorite } from "../redux/favoriteSlice.js";

function FavoriteList() {
  const dispatch = useDispatch();

  function handleDelete(id) {
    if (window.confirm("Are you sure you want to remove this recipe from favorites?")) {
      dispatch(removeFavorite(id));
    }
  }
  const favorites = useSelector((state) => state.favorites);
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">
          My Favorite Recipes
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 place-items-center ">
        {favorites.map((recipe) => (
          <div className="relative w-fit " key={recipe.id}>
            <span
              onClick={() => handleDelete(recipe.id)}
              className="absolute z-10 bg-white rounded-full p-1.5 top-14 right-2"
            >
              <BadgeX className="text-red-500 text-3xl" />
            </span>
            <RecipeCard recipe={recipe} showRemoveIcon={true}  status={true}/>
          </div>
        ))}

        {favorites.length === 0 && (
          <p className="col-span-full text-center text-gray-600 text-lg">
            No favorite recipes yet. Add some recipes to your favorites!
          </p>
        )}
      </div>
    </div>
  );
}

export default FavoriteList;