function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          
        
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-white text-3xl font-bold mb-4">DigiTools</h2>
            <p className="text-sm leading-relaxed max-w-xs">
              Premium digital tools to boost your productivity and creativity.
            </p>
          </div>

        
          <div>
            <h4 className="text-white font-semibold mb-4 text-base">Products</h4>
            <ul className="space-y-2.5 text-sm">
              <li className="hover:text-white transition-colors cursor-pointer">AI Writing Pro</li>
              <li className="hover:text-white transition-colors cursor-pointer">Design Templates Pack</li>
              <li className="hover:text-white transition-colors cursor-pointer">Premium Stock Assets</li>
              <li className="hover:text-white transition-colors cursor-pointer">Automation Toolkit</li>
            </ul>
          </div>

         
          <div>
            <h4 className="text-white font-semibold mb-4 text-base">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li className="hover:text-white transition-colors cursor-pointer">About Us</li>
              <li className="hover:text-white transition-colors cursor-pointer">Blog</li>
              <li className="hover:text-white transition-colors cursor-pointer">Careers</li>
              <li className="hover:text-white transition-colors cursor-pointer">Contact</li>
            </ul>
          </div>

         
          <div>
            <h4 className="text-white font-semibold mb-4 text-base">Support</h4>
            <ul className="space-y-2.5 text-sm">
              <li className="hover:text-white transition-colors cursor-pointer">Help Center</li>
              <li className="hover:text-white transition-colors cursor-pointer">Terms of Service</li>
              <li className="hover:text-white transition-colors cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white transition-colors cursor-pointer">Refund Policy</li>
            </ul>
          </div>
        </div>

       
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          © 2026 DigiTools. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;