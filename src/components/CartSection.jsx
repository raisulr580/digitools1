import { toast } from 'react-toastify';

function CartSection({ cart, removeFromCart, proceedToCheckout }) {
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  // Improved renderIcon function
  const renderIcon = (icon) => {
    if (!icon) return '📦';

    let imageSrc = icon;

    // If it's a local image (like shopping-cart.png)
    if (!icon.startsWith('http') && !icon.startsWith('/')) {
      imageSrc = '/' + icon;
    }

    return (
      <img 
        src={imageSrc} 
        alt="product icon" 
        className="w-10 h-10 object-contain"
      />
    );
  };

  // Empty Cart State
  if (cart.length === 0) {
    return (
      <div className="text-center py-16 md:py-20 px-4">
        <img 
          src="shopping-cart.png" 
          alt="Empty Cart" 
          className="w-28 h-28 md:w-32 md:h-32 mx-auto mb-6 opacity-80"
        />

        <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
          Your cart is empty
        </h3>
        <p className="text-gray-500 text-base md:text-lg max-w-sm mx-auto">
          When you add products to your cart, they will appear here.
        </p>
      </div>
    );
  }

  
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6">
      <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8">
        
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Your Cart ({cart.length})
        </h2>

        <div className="space-y-4 mb-10">
          {cart.map(item => (
            <div 
              key={item.id} 
              className="flex flex-col sm:flex-row sm:items-center justify-between bg-gray-50 p-5 md:p-6 rounded-2xl gap-4"
            >
              
              
              <div className="flex items-center gap-4 flex-1">
                
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-gray-100 overflow-hidden flex-shrink-0">
                  {renderIcon(item.icon)}
                </div>

                <div className="min-w-0">
                  <h4 className="font-semibold text-base md:text-lg leading-tight">{item.name}</h4>
                  <p className="text-gray-600 text-sm md:text-base">
                    ${item.price} / {item.period}
                  </p>
                </div>
              </div>

              
              <button 
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-600 font-medium px-5 py-2.5 hover:bg-red-50 rounded-xl transition-all text-sm md:text-base whitespace-nowrap self-start sm:self-center"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

       
        <div className="border-t pt-6 md:pt-8">
          <div className="flex justify-between items-center text-xl md:text-2xl font-semibold mb-6 px-1">
            <span>Total</span>
            <span>${totalPrice}</span>
          </div>

          <button 
            onClick={proceedToCheckout}
            className="w-full bg-violet-600 hover:bg-violet-700 active:bg-violet-800 text-white py-4 md:py-5 rounded-2xl text-lg font-semibold transition-all"
          >
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartSection;