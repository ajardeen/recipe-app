import React, { useState,useEffect } from 'react'


function FilterBar({setCategories}) {
  const [selectedFilter, setSelectedFilter] = useState('main course')
  const filterOptions = [
    'main course',
    'side dish',
    'dessert',
    'appetizer',
    'salad',
    'bread',
    'breakfast',
    'soup',
    'beverage',
    'sauce',
    'marinade',
    'fingerfood',
    'snack',
    'drink'
  ]

  useEffect(() => {
    setCategories(selectedFilter)
  }, [selectedFilter])

  return (
    <div className="w-full max-w-xs mx-auto">
      <select
        value={selectedFilter}
        onChange={(e) => setSelectedFilter(e.target.value)}
        className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400 transition-colors duration-200"
      >
        {filterOptions.map((option) => (
          <option key={option} value={option} className="py-2">
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </option>
        ))}
      </select>
    </div>
  )
}

export default FilterBar