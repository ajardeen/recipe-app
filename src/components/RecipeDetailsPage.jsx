import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchRecipeDetails } from "../redux/recipeSlice";
import { ArrowLeft } from "lucide-react";

const RecipeDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { recipe, status, error } = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(fetchRecipeDetails(id));
  }, [dispatch, id]);

  if (status === "loading") return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
  if (status === "failed") return <p className="text-center text-red-500">Error: {error}</p>;
  if (!recipe) return <p className="text-center text-gray-500">Recipe not found.</p>;

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white shadow-2xl rounded-2xl">
      <button 
        onClick={() => navigate('/')}
        className="flex items-center gap-2 mb-6 text-gray-600 hover:text-blue-500 transition-colors duration-300 group"
      >
        <ArrowLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" />
        <span>Back to Recipes</span>
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="relative overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-96 object-cover rounded-xl transition-transform duration-300 hover:scale-110"
          />
        
        </div>

        <div>
        <h1 className="text-2xl font-bold mb-4">{recipe.title}</h1>

          <h4 className=" font-bold text-gray-800 mb-2">About this Recipe</h4>
          <div className="prose" dangerouslySetInnerHTML={{ __html: recipe.summary }} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 p-4 rounded-lg flex items-center space-x-3">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p className="text-sm text-gray-600">Preparation Time</p>
            <p className="font-semibold">{recipe.readyInMinutes} minutes</p>
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg flex items-center space-x-3">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <div>
            <p className="text-sm text-gray-600">Servings</p>
            <p className="font-semibold">{recipe.servings} people</p>
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg flex items-center space-x-3">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p className="text-sm text-gray-600">Price per Serving</p>
            <p className="font-semibold">${(recipe.pricePerServing / 100).toFixed(2)}</p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Ingredients</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recipe.extendedIngredients?.map((ingredient, index) => (
            <div key={index} className="flex items-center bg-gray-50 p-3 rounded-lg">
              <img
                src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
                alt={ingredient.name}
                className="w-12 h-12 object-cover rounded-md mr-4"
              />
              <div>
                <p className="font-medium">{ingredient.original}</p>
                <p className="text-sm text-gray-600">{ingredient.measures.us.amount} {ingredient.measures.us.unitLong}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Instructions</h2>
        <div className="space-y-4">
          {recipe.analyzedInstructions[0]?.steps.map((step, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg transform transition-all hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    {step.number}
                  </span>
                </div>
                <div className="flex-grow">
                  <p className="text-gray-700 leading-relaxed">{step.step}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Additional Information</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Vegetarian</p>
            <p className="font-semibold">{recipe.vegetarian ? "Yes" : "No"}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Vegan</p>
            <p className="font-semibold">{recipe.vegan ? "Yes" : "No"}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Gluten Free</p>
            <p className="font-semibold">{recipe.glutenFree ? "Yes" : "No"}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Health Score</p>
            <p className="font-semibold">{recipe.healthScore}/100</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailsPage;