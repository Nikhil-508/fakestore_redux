import React from "react";

const CategoryFilter = ({ category, setCategory }) => {
  return (
    <select
      className="border border-maroon-500 p-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-maroon-400 bg-black text-white"
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    >
      <option value="">All Categories</option>
      <option value="electronics">Electronics</option>
      <option value="jewelery">Jewelry</option>
      <option value="men's clothing">Men's Clothing</option>
      <option value="women's clothing">Women's Clothing</option>
    </select>
  );
};

export default CategoryFilter;
