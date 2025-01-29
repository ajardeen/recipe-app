import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../redux/recipeSlice";
import RecipeCard from "./RecipeCard";

const RecipeList = () => {
  const dispatch = useDispatch();
  const { recipes, status, error } = useSelector((state) => state.recipes);
  const favorites = useSelector((state) => state.favorites); // Fix favorites selector

  useEffect(() => {
    dispatch(fetchRecipes("Chicken", "main course"));
  }, [dispatch]);

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <span className="block sm:inline">Search to discover</span>
        </div>
      </div>
    );
  }

  if (status === "succeeded") {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 place-items-center">
          {recipes.length > 0 ? (
            recipes.map((recipe) => {
              const isFavorite = favorites.some((fav) => fav.id === recipe.id); // Check if recipe is in favorites
              return (
                <div
                  key={recipe.id}
                  className="transform transition duration-200 hover:scale-105"
                >
                  <RecipeCard recipe={recipe} status={isFavorite} />
                </div>
              );
            })
          ) : (
            <div className="col-span-full text-center py-8 text-gray-600">
              No recipes found
            </div>
          )}
        </div>
      </div>
    );
  }

  return null;
};

export default RecipeList;
