function Footer({ setCurrentPage }) {
  try {
    const currentYear = new Date().getFullYear();
    
    return (
      <footer className="bg-gray-900 text-white section-padding" data-name="footer" data-file="components/Footer.js">
        <div className="container-max">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                  <div className="icon-users text-lg text-white"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold">P. Masemola Foundation</h3>
                  <p className="text-gray-400 text-sm">Empowering Youth</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Transforming lives in rural and township communities through education, 
                leadership development, and entrepreneurship programs.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/profile.php?id=100095305279324" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                  <div className="icon-facebook text-lg"></div>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                  <div className="icon-twitter text-lg"></div>
                </a>
                <a href="https://www.instagram.com/p.masemola_foundation/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                  <div className="icon-instagram text-lg"></div>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                  <div className="icon-linkedin text-lg"></div>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" onClick={() => setCurrentPage('about')} className="text-gray-400 hover:text-white transition-colors cursor-pointer">About Us</a></li>
                <li><a href="#" onClick={() => setCurrentPage('programs')} className="text-gray-400 hover:text-white transition-colors cursor-pointer">Our Programs</a></li>
                <li><a href="#" onClick={() => setCurrentPage('get-involved')} className="text-gray-400 hover:text-white transition-colors cursor-pointer">Get Involved</a></li>
                <li><a href="#" onClick={() => setCurrentPage('contact')} className="text-gray-400 hover:text-white transition-colors cursor-pointer">Contact</a></li>
                <li><a href="#" onClick={() => setCurrentPage('home')} className="text-gray-400 hover:text-white transition-colors cursor-pointer">News & Updates</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="icon-map-pin text-purple-600 mr-3 mt-1"></div>
                  <p className="text-gray-400 text-sm">
                  Ext 15, Mamelodi East<br />
                  Pretoria, 0122<br />
                    South Africa
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="icon-phone text-purple-600 mr-3"></div>
                  <a href="tel:+27662950540" className="text-gray-400 text-sm hover:text-white transition-colors">+27 66 295 0540</a>
                </div>
                <div className="flex items-center">
                  <div className="icon-mail text-purple-600 mr-3"></div>
                  <a href="mailto:pmasemolafoundation@gmail.com" className="text-gray-400 text-sm hover:text-white transition-colors">pmasemolafoundation@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © {currentYear} P. Masemola Foundation. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" onClick={() => alert('Privacy Policy - Coming Soon')} className="text-gray-400 hover:text-white transition-colors cursor-pointer">Privacy Policy</a>
                <a href="#" onClick={() => alert('Terms of Service - Coming Soon')} className="text-gray-400 hover:text-white transition-colors cursor-pointer">Terms of Service</a>
                <a href="#" onClick={() => alert('Cookie Policy - Coming Soon')} className="text-gray-400 hover:text-white transition-colors cursor-pointer">Cookie Policy</a>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-4 mt-4">
              <div className="text-center">
                <p className="text-gray-500 text-xs">
                  Website designed and developed by{' '}
                  <a href="mailto:232244860@tut4life.ac.za" className="text-purple-400 hover:text-purple-300 transition-colors font-medium">
                    Rakim
                  </a>
                  {' '}• Web Design & Development Services Available
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}