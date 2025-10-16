function Footer({ setCurrentPage }) {
  try {
    const currentYear = new Date().getFullYear();
    
    return (
      <footer className="bg-gray-900 text-white section-padding" data-name="footer" data-file="components/Footer.js">
        <div className="container-max">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="img/Logo Icon.png" 
                  alt="P. Masemola Foundation Logo" 
                  className="w-10 h-10 rounded-full object-contain bg-white"
                />
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
                <a href="https://www.instagram.com/p.masemola_foundation/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                  <div className="icon-instagram text-lg"></div>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => setCurrentPage('about')}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 text-left w-full font-normal"
                    style={{ WebkitAppearance: 'none', textAlign: 'left' }}
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage('programs')}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 text-left w-full font-normal"
                    style={{ WebkitAppearance: 'none', textAlign: 'left' }}
                  >
                    Our Programs
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage('get-involved')}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 text-left w-full font-normal"
                    style={{ WebkitAppearance: 'none', textAlign: 'left' }}
                  >
                    Get Involved
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage('contact')}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 text-left w-full font-normal"
                    style={{ WebkitAppearance: 'none', textAlign: 'left' }}
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage('home')}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 text-left w-full font-normal"
                    style={{ WebkitAppearance: 'none', textAlign: 'left' }}
                  >
                    News & Updates
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Contact Info</h4>
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
                <div className="flex items-start">
                  <div className="icon-mail text-purple-600 mr-3 mt-0.5 flex-shrink-0"></div>
                  <a href="mailto:pmasemolafoundation@gmail.com" className="text-gray-400 text-sm hover:text-white transition-colors break-all">pmasemolafoundation@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © {currentYear} P. Masemola Foundation. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
                <button
                  onClick={() => setCurrentPage('privacy')}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0"
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => setCurrentPage('terms')}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0"
                >
                  Terms of Service
                </button>
                <button
                  onClick={() => setCurrentPage('cookie')}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0"
                >
                  Cookie Policy
                </button>
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
    console.error("Error in Footer component:", error);
    return null;
  }
}

export default Footer;