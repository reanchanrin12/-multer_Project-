import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './Pages/Home';
import AddProduct from './Pages/AddProduct';

export default function App() {
  return (
    <Router>
      <nav className="bg-gray-800 p-4 text-white">
        <NavLink to="/" className="mr-4">Home</NavLink>
        <NavLink to="/add-product" className="mr-4">Add Product</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
    </Router>
  );
}
