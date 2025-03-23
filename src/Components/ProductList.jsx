import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../Redux/productSlice';
import ProductCard from './ProductCard';
import Pagination from './Pagination';

const ProductList = () => {
  const dispatch = useDispatch();
  const { items, status, category, searchQuery } = useSelector((state) => state.products);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Failed to load products.</p>;

  // Filter products by category and search query
  const filteredProducts = items.filter((product) => 
    (category === 'all' || product.category === category) &&
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {paginatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination 
        currentPage={currentPage} 
        totalPages={Math.ceil(filteredProducts.length / itemsPerPage)} 
        onPageChange={setCurrentPage} 
      />
    </div>
  );
};

export default ProductList;
