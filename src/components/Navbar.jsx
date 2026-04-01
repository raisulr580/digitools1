import { useState } from 'react';

const Navbar = ({ cartCount = 0 }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
        
        <div className="flex items-center justify-between">
          
        
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-violet-600 rounded-2xl flex items-center justify-center text-white font-black text-3xl leading-none pt-0.5">
              D
            </div>
            <span className="text-2xl md:text-3xl font-bold tracking-tighter text-violet-900">
              DigiTools
            </span>
          </div>

          
          <div className="hidden md:flex items-center gap-8 lg:gap-9 text-base font-medium text-gray-700">
            <a href="#" className="hover:text-violet-600 transition-colors">Products</a>
            <a href="#" className="hover:text-violet-600 transition-colors">Features</a>
            <a href="#" className="hover:text-violet-600 transition-colors">Pricing</a>
            <a href="#" className="hover:text-violet-600 transition-colors">Testimonials</a>
            <a href="#" className="hover:text-violet-600 transition-colors">FAQ</a>
          </div>

        
          <div className="hidden md:flex items-center gap-6">
            
           
            <div className="relative cursor-pointer p-2 hover:bg-gray-100 rounded-xl transition-all">
              <img 
                src="shopping-cart.png" 
                alt="Cart" 
                className="w-6 h-6"
              />
              {cartCount > 0 && (
                <div className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </div>
              )}
            </div>

            <button className="text-base font-medium text-gray-700 hover:text-gray-900 transition">
              Log in
            </button>

            <button className="bg-violet-600 hover:bg-violet-700 text-white px-7 py-2.5 rounded-2xl text-base font-semibold transition shadow-sm">
              Get Started
            </button>
          </div>

          
          <div className="flex md:hidden items-center gap-4">
            
            
            <div className="relative cursor-pointer p-2 hover:bg-gray-100 rounded-xl transition-all">
              <img 
                src="shopping-cart.png" 
                alt="Cart" 
                className="w-6 h-6"
              />
              {cartCount > 0 && (
                <div className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </div>
              )}
            </div>

           
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-3xl text-gray-700"
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

       
        {isMenuOpen && (
          <div className="md:hidden mt-6 pt-6 border-t border-gray-100 flex flex-col gap-5 text-base font-medium text-gray-700">
            <a href="#" className="hover:text-violet-600 transition-colors py-1">Products</a>
            <a href="#" className="hover:text-violet-600 transition-colors py-1">Features</a>
            <a href="#" className="hover:text-violet-600 transition-colors py-1">Pricing</a>
            <a href="#" className="hover:text-violet-600 transition-colors py-1">Testimonials</a>
            <a href="#" className="hover:text-violet-600 transition-colors py-1">FAQ</a>
            
            <div className="pt-4 border-t border-gray-100">
              <button className="w-full text-left py-3 text-gray-700 hover:text-gray-900">
                Log in
              </button>
              <button className="w-full bg-violet-600 hover:bg-violet-700 text-white py-3 rounded-2xl font-semibold mt-2">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;