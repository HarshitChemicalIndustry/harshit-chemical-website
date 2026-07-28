"use client";
import React from 'react';

export default function Header({ searchTerm, setSearchTerm, cartCount, toggleCart }) {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <div>
          <span className="text-xl font-extrabold text-green-600">Harshit</span>
          <span className="text-xl font-extrabold text-amber-500"> Chemicals</span>
        </div>
        <div className="flex-1 max-w-xl relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder='Search products like "Phenyl", "Wiper", "Mop"...'
            className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800"
          />
        </div>
        <button onClick={toggleCart} className="bg-green-600 text-white font-bold px-4 py-2 rounded-xl flex items-center gap-2">
          <span>🛒</span><span>Cart ({cartCount})</span>
        </button>
      </div>
    </header>
  );
}

