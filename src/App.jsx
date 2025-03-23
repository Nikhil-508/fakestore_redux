import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import Home from './Pages/Home';
import ProductDetailPage from './Pages/ProductDetailPage';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold text-center">FakeStore App</h1>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
