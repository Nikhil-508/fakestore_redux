import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById } from '../Redux/productSlice';
import { useParams } from 'react-router-dom';
import { HashLoader } from 'react-spinners';

const ProductDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedProduct, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  return (
    <div className="p-6 bg-black min-h-sreen text-white">
    {loading ? (
      <div className="flex justify-center items-center h-64">
        <HashLoader color="#FFD700" size={60} />
      </div>
    ) : (
      selectedProduct && (
        <div className="max-w-3xl mx-auto border border-gray-700 bg-gray-900 p-6 rounded-lg shadow-lg">
          <img
            src={selectedProduct.image}
            alt={selectedProduct.title}
            className="h-80 mx-auto rounded-md object-contain"
          />
          <h2 className="font-bold text-3xl mt-4 text-maroon">{selectedProduct.title}</h2>
          <p className="text-gold text-2xl font-semibold mt-2">${selectedProduct.price}</p>
          <p className="mt-4 text-gray-300">{selectedProduct.description}</p>
          <p className="mt-3 text-lg font-medium text-gray-400">
            Category: <span className="text-white">{selectedProduct.category}</span>
          </p>
        </div>
      )
    )}
  </div>
  
  );
};

export default ProductDetailPage;
