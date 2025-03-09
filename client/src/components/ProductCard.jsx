import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div className="border p-4 rounded shadow-lg">
      <img src={`http://localhost:5000/${product.imagePath}`} alt={product.name} className="w-full h-40 object-cover mb-2" />
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-gray-700 line-clamp-3">{product.description}</p>
      <p className="text-blue-500 font-bold">${product.price}</p>
    </div>
  )
}


export default ProductCard;
