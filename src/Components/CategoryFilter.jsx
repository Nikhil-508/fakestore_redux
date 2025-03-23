import React from 'react';
import { useDispatch } from 'react-redux';
import { setCategory } from '../Redux/productSlice';

const CategoryFilter = () => {
  const dispatch = useDispatch();
  
  return (
    <select onChange={(e) => dispatch(setCategory(e.target.value))} className="p-2 border">
      <option value="all">All Categories</option>
      <option value="men's clothing">Men's Clothing</option>
      <option value="women's clothing">Women's Clothing</option>
      <option value="jewelery">Jewelry</option>
      <option value="electronics">Electronics</option>
    </select>
  );
};

export default CategoryFilter;
