import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './pages/ProductList';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<ProductList />} />
          <Route exact path="/add" element={<AddProduct />} />
          <Route exact path="/edit/:id" element={<EditProduct />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
