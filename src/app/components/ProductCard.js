

"use client";

import { useCart } from "../../../context/CartContext"

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-zinc-900/60 p-4 rounded-xl text-white">
      <img
        src={product.image}
        className="w-full h-96 object-cover rounded-lg mb-3"
      />

      <h3 className="font-semibold">{product.name}</h3>
      <p className="text-gray-400 text-sm">{product.description}</p>

      <div className="flex justify-between items-center mt-3">
        <span className="text-cyan-400 font-bold">
          ${product.price}
        </span>

        <button
          onClick={() => addToCart(product)}
          className="bg-cyan-500 px-3 py-1 rounded-lg hover:bg-cyan-600"
        >
          Add
        </button>
      </div>
    </div>
  );
}