"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function ProductCard({ product, addToCart, cartItem }) {
  return (
    <motion.div whileHover={{ y: -4 }} className="bg-white border border-gray-100 rounded-2xl p-3 flex flex-col justify-between shadow-sm">
      <div className="w-full h-36 bg-gray-50 rounded-xl overflow-hidden mb-3 flex items-center justify-center">
        <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain p-2" />
      </div>
      <div>
        <span className="text-[10px] font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full uppercase">{product.category}</span>
        <h3 className="text-sm font-semibold text-gray-800 mt-1 line-clamp-2 h-10">{product.name}</h3>
      </div>
      <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-50">
        <span className="text-base font-bold text-gray-900">₹{product.price}</span>
        {cartItem ? (
          <div className="flex items-center bg-green-600 text-white rounded-lg font-bold text-sm overflow-hidden">
            <button onClick={() => addToCart(product, -1)} className="px-3 py-1">-</button>
            <span className="px-1">{cartItem.quantity}</span>
            <button onClick={() => addToCart(product, 1)} className="px-3 py-1">+</button>
          </div>
        ) : (
          <button onClick={() => addToCart(product, 1)} className="border border-green-600 text-green-600 font-bold text-xs uppercase px-4 py-2 rounded-lg">Add</button>
        )}
      </div>
    </motion.div>
  );
}

