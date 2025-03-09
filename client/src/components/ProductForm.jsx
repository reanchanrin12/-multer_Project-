import { useState } from 'react';
import { addProduct } from '../api/api';
import { useNavigate } from 'react-router-dom';

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    image: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', formData.name);
    data.append('price', formData.price);
    data.append('description', formData.description);
    data.append('image', formData.image);

    await addProduct(data);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 border rounded">
      <h2 className="text-2xl mb-4">Add New Product</h2>
      <input type="text" name="name" placeholder="Name" required onChange={handleChange} className="border p-2 w-full mb-2" />
      <input type="number" name="price" placeholder="Price" required onChange={handleChange} className="border p-2 w-full mb-2" />
      <textarea name="description" placeholder="Description" required onChange={handleChange} className="border p-2 w-full mb-2"></textarea>
      <input type="file" name="image" accept="image/*" required onChange={handleChange} className="border p-2 w-full mb-2" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Product
      </button>

    </form>
  );
};

export default ProductForm;
