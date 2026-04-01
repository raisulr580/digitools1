const Banner = () => {
  return (
    <div className="bg-white pt-12 pb-16 md:pt-16 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          
     
          <div className="space-y-6 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 px-4 py-1.5 rounded-full text-sm font-medium mx-auto lg:mx-0">
              ✨ Now AI-Powered Tools Available
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Supercharge Your<br />
              <span className="text-violet-600">Digital Workflow</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0">
              Access premium AI tools, design assets, templates, and productivity 
              software — all in one place. Start creating faster today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3.5 rounded-full font-semibold transition text-base sm:text-lg w-full sm:w-auto">
                Explore Products
              </button>
              
              <button className="border-2 border-gray-800 hover:border-violet-600 hover:bg-violet-50 hover:text-violet-600 px-8 py-3.5 rounded-full font-semibold transition text-base sm:text-lg w-full sm:w-auto">
                Watch Demo
              </button>
            </div>
          </div>

          
          <div className="relative flex justify-center lg:justify-end">
            <img 
              src="banner.png" 
              alt="Digital Workflow" 
              className="rounded-3xl shadow-2xl w-full max-w-lg lg:max-w-none object-cover"
            />
            
            
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;