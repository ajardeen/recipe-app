import React from "react";
import { Star, Clock } from "lucide-react";
import bannerimg from "../assets/restaurant-centre-ville-toulouse.jpg"

const Banner = () => {
  return (
    <div className="container mx-auto px-4 max-w-7xl">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden">
        {/* Left Side: Image & Content */}
        <div className="relative w-full">
          <img
            src={bannerimg}
            alt="Vegan Chicken & Chips with Pancakes"
            className="w-full h-56 md:h-64 object-cover"
          />
          {/* Overlay Content */}
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white">
            <span className="bg-white text-black text-xs font-semibold px-2 py-1 rounded-md mb-2 w-fit">
              POPULAR
            </span>
            <h2 className="text-lg font-semibold leading-tight">
              Vegan: Chicken & Chips with Pancakes
            </h2>
            <div className="flex items-center mt-1 text-sm">
              <Clock className="w-4 h-4 mr-1" />
              <span>25 min</span>
              <span className="flex ml-3 text-yellow-400">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400" />
                  ))}
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Bookmark Info */}
        <div className="w-full md:w-52 bg-gray-100 flex flex-col justify-center items-center text-center p-4">
          <span className="text-gray-700 text-sm">
            We have <span className="font-semibold"> new recipes</span> For you to Explore
          </span>
          <a href="#" className="text-green-500 text-sm font-medium mt-2 hover:underline">
            Explore
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;