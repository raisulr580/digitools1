function Stats() {
  return (
    <div className="bg-violet-600 py-8 sm:py-10 md:py-12 text-white">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-center">
          
         
          <div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              50K+
            </h3>
            <p className="text-violet-200 mt-2 text-sm sm:text-base md:text-lg">
              Active Users
            </p>
          </div>

          
          <div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              200+
            </h3>
            <p className="text-violet-200 mt-2 text-sm sm:text-base md:text-lg">
              Premium Tools
            </p>
          </div>

         
          <div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              4.9
            </h3>
            <p className="text-violet-200 mt-2 text-sm sm:text-base md:text-lg">
              Rating
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Stats;