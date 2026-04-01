function Steps() {
  return (
    <div className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

       
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">
          Get Started in 3 Steps
        </h2>
        <p className="text-center text-gray-600 mb-10 sm:mb-12 md:mb-16 text-sm sm:text-base">
          Start using premium digital tools in minutes
        </p>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">

          
          <div className="relative bg-white border border-gray-100 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 hover:shadow-xl transition-all">
            
            <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-8 h-8 sm:w-10 sm:h-10 bg-violet-600 text-white rounded-xl sm:rounded-2xl flex items-center justify-center text-sm sm:text-lg font-bold shadow-md">
              01
            </div>
            
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto bg-violet-100 rounded-xl sm:rounded-2xl flex items-center justify-center mb-5 sm:mb-6 md:mb-8">
              <img 
                src="user.png" 
                alt="User" 
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
              />
            </div>
            
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-center mb-2 sm:mb-3">
              Create Account
            </h3>
            
            <p className="text-gray-600 text-center text-sm sm:text-base">
              Sign up for free and get instant access to our platform with your email.
            </p>
          </div>

         
          <div className="relative bg-white border border-gray-100 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 hover:shadow-xl transition-all">
            
            <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-8 h-8 sm:w-10 sm:h-10 bg-violet-600 text-white rounded-xl sm:rounded-2xl flex items-center justify-center text-sm sm:text-lg font-bold shadow-md">
              02
            </div>
            
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto bg-violet-100 rounded-xl sm:rounded-2xl flex items-center justify-center mb-5 sm:mb-6 md:mb-8">
              <img 
                src="package.png" 
                alt="Package" 
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
              />
            </div>
            
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-center mb-2 sm:mb-3">
              Choose Products
            </h3>
            
            <p className="text-gray-600 text-center text-sm sm:text-base">
              Browse our premium tools and select what you need for your workflow.
            </p>
          </div>

         
          <div className="relative bg-white border border-gray-100 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 hover:shadow-xl transition-all">
            
            <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-8 h-8 sm:w-10 sm:h-10 bg-violet-600 text-white rounded-xl sm:rounded-2xl flex items-center justify-center text-sm sm:text-lg font-bold shadow-md">
              03
            </div>
            
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto bg-violet-100 rounded-xl sm:rounded-2xl flex items-center justify-center mb-5 sm:mb-6 md:mb-8">
              <img 
                src="rocket.png" 
                alt="Rocket" 
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
              />
            </div>
            
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-center mb-2 sm:mb-3">
              Start Creating
            </h3>
            
            <p className="text-gray-600 text-center text-sm sm:text-base">
              Download and start using your premium tools immediately.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Steps;