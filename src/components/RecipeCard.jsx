import React from "react";
import { useDispatch } from "react-redux";
import { addFavorite } from "../redux/favoriteSlice";
import { useNavigate } from "react-router-dom";
import { Heart, ArrowUpRight } from "lucide-react";

const RecipeCard = ({ recipe, status }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddFavorite = () => {
    dispatch(addFavorite(recipe));
    alert("Recipe added to favorites!");
  };

  return (
    <div className="relative w-[300px] h-[320px] group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white transform hover:-translate-y-1">
      <div className="relative overflow-hidden ">
        <img
          src={`https://spoonacular.com/recipeImages/${recipe.image}`}
          alt={recipe.title}
          className="w-full h-[192px] object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <button
          className="absolute top-2 right-2 bg-white z-10 p-2 rounded-full shadow-md hover:bg-gray-100 transition"
          onClick={handleAddFavorite}
        >
          <Heart className={`w-5 h-5 ${status ? "text-green-500" : "text-gray-700"}`} />
        </button>
        <div className="absolute bottom-2 left-2 z-10 bg-white text-gray-800 text-sm font-semibold px-3 py-1 rounded-full flex items-center">
          <svg
            className="w-5 h-5 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>{recipe.readyInMinutes} mins</span>
        </div>
        <div className="absolute h-96 inset-0 bg-black/50 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
      </div>
      <div className="p-5 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {recipe.title}
        </h3>
        <div className="flex items-end justify-between text-gray-600 ">
          <div className="flex items-center">
            <svg
              className="w-5 h-5 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
            <span>{recipe.servings} servings</span>
          </div>
          <button
            onClick={() => navigate(`/recipe/${recipe.id}`)}
            className="flex items-center bg-white shadow-sm px-2 py-1.5 rounded-full text-green-600 hover:text-green-800 transition-colors duration-300"
          >
            View Recipe
            <span className=" flex text-black">
              <ArrowUpRight className="w-6 h-6 transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
