const ProductCard = ({ product, addToCart }) => {

  const getTagStyle = (tagType) => {
    if (tagType === 'best-seller') return 'bg-yellow-100 text-yellow-700 border border-yellow-300';
    if (tagType === 'popular') return 'bg-violet-100 text-violet-700 border border-violet-300';
    if (tagType === 'new') return 'bg-emerald-100 text-emerald-700 border border-emerald-300';
    return 'bg-gray-100 text-gray-600';
  };

  return (
    <div className="bg-white border border-gray-100 rounded-2xl sm:rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 group h-full flex flex-col">

     
      <div className="relative h-24 sm:h-28 md:h-32 bg-gradient-to-br from-gray-50 to-white p-3 sm:p-4 md:p-5 flex items-start justify-between border-b border-gray-100">
        
       
        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white rounded-xl sm:rounded-2xl shadow flex items-center justify-center border border-gray-100">
          <img 
            src={product.icon} 
            alt={product.name}
            className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain"
          />
        </div>

       
        {product.tag && (
          <div className={`px-2 sm:px-3 md:px-4 py-1 text-[10px] sm:text-xs font-semibold rounded-xl sm:rounded-2xl ${getTagStyle(product.tagType)}`}>
            {product.tag}
          </div>
        )}
      </div>

     
      <div className="p-4 sm:p-5 md:p-6 pt-2 flex-1 flex flex-col">
        
      
        <h3 className="text-lg sm:text-xl md:text-[22px] font-semibold text-gray-900 mb-2">
          {product.name}
        </h3>
        
       
        <p className="text-gray-600 text-xs sm:text-sm md:text-[15px] line-clamp-2 mb-4 sm:mb-5 md:mb-6">
          {product.description}
        </p>

       
        <div className="flex items-baseline gap-1 mb-4 sm:mb-5 md:mb-6">
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            ${product.price}
          </span>
          <span className="text-xs sm:text-sm text-gray-500">
            /{product.period}
          </span>
        </div>

        
        <ul className="space-y-2 mb-6 sm:mb-7 md:mb-8 text-xs sm:text-sm text-gray-600 flex-1">
          {product.features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-green-500 mt-1 text-xs sm:text-sm">✔</span>
              {feature}
            </li>
          ))}
        </ul>

       
        <button 
          onClick={() => addToCart(product)}
          className="mt-auto w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2 sm:py-3 md:py-4 text-sm sm:text-base rounded-xl sm:rounded-2xl transition-all active:scale-[0.97]"
        >
          Buy Now
        </button>

      </div>
    </div>
  );
};

export default ProductCard;