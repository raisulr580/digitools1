import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Stats from './components/Stats';
import ProductCard from './components/ProductCard';
import CartSection from './components/CartSection';
import Steps from './components/Steps';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

import productsData from './data/products.json';

function App() {
  const [activeTab, setActiveTab] = useState('products');
  const [cart, setCart] = useState([]);

  // Add to Cart
  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      toast.info(`${product.name} is already in your cart!`);
      return;
    }

    setCart(prev => [...prev, product]);
    toast.success(`${product.name} added to cart! ✅`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  // Remove from Cart
  const removeFromCart = (id) => {
    const removedItem = cart.find(item => item.id === id);
    setCart(prev => prev.filter(item => item.id !== id));
    
    toast.error(`${removedItem?.name} removed from cart`, {
      position: "top-right",
    });
  };

  // Proceed to Checkout
  const proceedToCheckout = () => {
    if (cart.length === 0) return;
    
    toast.success("Thank you for your purchase! Order placed successfully.", {
      position: "top-center",
      autoClose: 3000,
    });
    setCart([]);
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <Navbar cartCount={cart.length} />

      <Banner />
      <Stats />

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        
        {/* Toggle Buttons */}
        <div className="flex justify-center mb-8 sm:mb-10 md:mb-12">
          <div className="inline-flex bg-gray-100 rounded-2xl sm:rounded-3xl p-1 sm:p-1.5 shadow-sm flex-wrap">
            
            <button
              onClick={() => setActiveTab('products')}
              className={`px-4 sm:px-6 md:px-10 py-2 sm:py-3 text-sm sm:text-base rounded-2xl sm:rounded-3xl font-semibold transition-all ${
                activeTab === 'products' 
                  ? 'bg-white shadow text-violet-700' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Products
            </button>
            
            <button
              onClick={() => setActiveTab('cart')}
              className={`px-4 sm:px-6 md:px-10 py-2 sm:py-3 text-sm sm:text-base rounded-2xl sm:rounded-3xl font-semibold transition-all flex items-center gap-1 sm:gap-2 ${
                activeTab === 'cart' 
                  ? 'bg-violet-600 text-white shadow' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Cart 
              {cart.length > 0 && (
                <span className="bg-white text-violet-600 text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full">
                  {cart.length}
                </span>
              )}
            </button>

          </div>
        </div>

        {/* Products Section */}
        {activeTab === 'products' && (
          <div>
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                Premium Digital Tools
              </h2>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                Choose from our curated collection of premium digital products
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {productsData.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  addToCart={addToCart}
                />
              ))}
            </div>
          </div>
        )}

        {/* Cart Section */}
        {activeTab === 'cart' && (
          <CartSection 
            cart={cart} 
            removeFromCart={removeFromCart} 
            proceedToCheckout={proceedToCheckout} 
          />
        )}

      </div>

      {/* Other Sections */}
      <Steps />
      <Pricing />
      <Footer />

      <ToastContainer position="top-right" autoClose={2200} />
    </>
  );
}

export default App;