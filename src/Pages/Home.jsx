import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Redux/productSlice';
import { Link } from 'react-router-dom';
import { HashLoader } from 'react-spinners';
import SearchBar from '../Components/SearchBar';
import Pagination from '../Components/Pagination';

const Home = () => {
  const dispatch = useDispatch();
  const { items: products, loading } = useSelector((state) => state.products);

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6; 

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Reset page to 1 when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [category]);

  // Filter products based on search & category
  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((product) => (category ? product.category === category : true));

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Search & Category Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <SearchBar search={search} setSearch={setSearch} />
        <select
          className="border p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelry</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
      </div>

      {/* Product List */}
      {loading ? (
        <div className="flex justify-center mt-16">
          <HashLoader color="#3498db" />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {currentProducts.map((product) => (
            <div key={product.id} className="border p-5 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 bg-white">
              <img src={product.image} alt={product.title} className="h-40 mx-auto object-contain" />
              <h2 className="font-semibold text-lg mt-3 text-center">{product.title}</h2>
              <p className="text-gray-600 text-center font-medium text-lg">₹{(product.price * 83).toFixed(2)}</p>
              <div className="flex justify-center mt-4">
                <Link
                  to={`/product/${product.id}`}
                  className="bg-blue-600 text-white py-2 px-4 rounded-md text-center hover:bg-blue-700 transition duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Show Pagination only when no category is selected */}
      {!category && totalPages > 1 && (
        <div className="mt-6">
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>
      )}
    </div>
  );
};

export default Home;
