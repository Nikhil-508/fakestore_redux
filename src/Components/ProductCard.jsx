import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectProduct } from '../Redux/productSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="border p-4">
      <img src={product.image} alt={product.title} className="w-32 h-32 mx-auto" />
      <h3 className="text-lg font-semibold">{product.title}</h3>
      <p>${product.price}</p>
      <Link to={`/product/${product.id}`} onClick={() => dispatch(selectProduct(product))}>
        <button className="bg-blue-500 text-white p-2 mt-2">View Details</button>
      </Link>
    </div>
  );
};

export default ProductCard;
