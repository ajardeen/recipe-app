import React, { useEffect, useState } from "react";
import RecipeList from "../components/RecipeList";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import RecipeDetailsPage from "../components/RecipeDetailsPage";
import Navbar from "../components/NavBar";
import FavoriteList from "../components/FavoriteList";
import SearchBar from "../components/SearchBar";
import Banner from "../components/Banner";


function Home() {
  const SearchBarWrapper = () => {
    const location = useLocation();
    return location.pathname === "/" ? <SearchBar /> : null;
  }
  const BannerWrapper = () => {
    const location = useLocation();
    return location.pathname === "/" ? <Banner/> : null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <BrowserRouter>
        <Navbar />
       <div className="mt-20">
        <BannerWrapper />
       <SearchBarWrapper />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetailsPage />} />
          <Route path="/favorites" element={<FavoriteList />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
       </div>
      </BrowserRouter>
    </div>
  );
}

export default Home;