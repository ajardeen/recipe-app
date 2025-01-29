import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchRecipes } from "../redux/recipeSlice";
import FilterBar from "./FilterBar";
const SearchBar = () => {
  const [query, setQuery] = useState("Chicken");
  const [isFocused, setIsFocused] = useState(false);
  const [categories, setCategories] = useState("main course");
  const dispatch = useDispatch();

 

  const handleSearch = () => {
    if (query && categories) {
      dispatch(fetchRecipes({ query, categories }));
      setQuery("");
    }
  };

  return (
    <div className="">
      <div className="flex flex-col sm:flex-row items-center gap-2 p-4 max-w-3xl mx-auto">
        <div
          className={`flex items-center w-full bg-white rounded-lg shadow-md transition-all duration-300 ${
            isFocused ? "ring-2 ring-green-400 shadow-lg" : ""
          }`}
        >
          <div className="p-3 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="w-full sm:w-96 p-3 outline-none bg-transparent"
            placeholder="Search for recipes..."
          />
        </div>
        <button
          onClick={handleSearch}
          className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg transform hover:scale-105 flex items-center justify-center gap-2"
        >
          <span>Search</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
      <FilterBar setCategories={setCategories} />
      </div>
    </div>
  );
};

export default SearchBar;