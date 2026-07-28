"use client";
import React, { useState } from 'react';
import { products } from '@/data/products';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import CartDrawer from '@/components/CartDrawer';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product, change) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        const newQuantity = existingItem.quantity + change;
        if (newQuantity <= 0) return prevCart.filter((item) => item.id !== product.id);
        return prevCart.map((item) => item.id === product.id ? { ...item, quantity: newQuantity } : item);
      }
      if (change > 0) return [...prevCart, { ...product, quantity: 1 }];
      return prevCart;
    });
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50/50">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} cartCount={totalCartCount} toggleCart={() => setIsCartOpen(!isCartOpen)} />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-3xl p-6 text-white mb-8">
          <h1 className="text-2xl font-black">Harshit Chemical Industry</h1>
          <p className="text-green-50 text-xs mt-1">Industrial & Household items delivered instantly via WhatsApp.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={handleAddToCart} cartItem={cart.find((item) => item.id === product.id)} />
          ))}
        </div>
      </main>
      {cart.length > 0 && !isCartOpen && (
        <div className="fixed bottom-4 left-4 right-4 max-w-md mx-auto bg-green-600 text-white p-3 rounded-2xl flex items-center justify-between shadow-xl z-40">
          <div className="text-xs"><p className="font-bold">{totalCartCount} Items</p></div>
          <button onClick={() => setIsCartOpen(true)} className="bg-white text-green-700 font-bold text-xs px-4 py-2 rounded-xl">View Cart 🛍️</button>
        </div>
      )}
      <CartDrawer isOpen={isCartOpen} toggleCart={() => setIsCartOpen(!isCartOpen)} cartItems={cart} addToCart={handleAddToCart} />
    </div>
  );
}

