import { useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Modern Sofa",
      price: 799.99,
      image: "https://via.placeholder.com/80x60?text=Sofa",
      quantity: 1
    },
    {
      id: 6,
      name: "Coffee Table",
      price: 199.99,
      image: "https://via.placeholder.com/80x60?text=Table",
      quantity: 1
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = 29.99;
  const tax = subtotal * 0.05;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="bg-white shadow-md rounded-lg p-8 text-center">
            <p className="text-gray-600 mb-6">Your cart is empty.</p>
            <Link 
              to="/products" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Cart Items ({cartItems.length})</h2>
                  
                  <div className="border-t border-gray-200">
                    {cartItems.map(item => (
                      <div key={item.id} className="py-6 flex flex-col sm:flex-row items-center sm:items-start border-b border-gray-200 last:border-b-0">
                        <div className="w-20 h-20 flex-shrink-0 bg-gray-100 rounded overflow-hidden mb-4 sm:mb-0">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="sm:ml-6 flex-1 flex flex-col sm:flex-row sm:justify-between items-center sm:items-start">
                          <div className="text-center sm:text-left mb-4 sm:mb-0">
                            <h3 className="text-lg font-medium text-gray-800">
                              {item.name}
                            </h3>
                            <p className="mt-1 text-gray-600">
                              ${item.price.toFixed(2)}
                            </p>
                          </div>
                          
                          <div className="flex items-center">
                            <div className="flex border border-gray-300 rounded">
                              <button
                                type="button"
                                className="w-8 h-8 flex items-center justify-center text-gray-600 border-r border-gray-300"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                -
                              </button>
                              <span className="w-10 h-8 flex items-center justify-center text-gray-800">
                                {item.quantity}
                              </span>
                              <button
                                type="button"
                                className="w-8 h-8 flex items-center justify-center text-gray-600 border-l border-gray-300"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                +
                              </button>
                            </div>
                            <button
                              type="button"
                              className="ml-4 text-red-500 hover:text-red-700"
                              onClick={() => removeItem(item.id)}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                  
                  <div className="space-y-3 border-b border-gray-200 pb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="text-gray-800 font-medium">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="text-gray-800 font-medium">${shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax</span>
                      <span className="text-gray-800 font-medium">${tax.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between pt-4 font-semibold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  
                  <div className="mt-6">
                    <Link
                      to="/checkout"
                      className="block w-full bg-blue-600 text-center text-white py-3 px-4 rounded-md font-medium hover:bg-blue-700 transition-colors"
                    >
                      Proceed to Checkout
                    </Link>
                    <Link
                      to="/products"
                      className="block w-full text-center text-blue-600 mt-4 py-2"
                    >
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart; 