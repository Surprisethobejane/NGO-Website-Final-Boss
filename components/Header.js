function Header({ currentPage, setCurrentPage }) {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    
    const navigation = [
      { name: 'Home', id: 'home' },
      { name: 'About', id: 'about' },
      { name: 'Programs', id: 'programs' },
      { name: 'Get Involved', id: 'get-involved' },
      { name: 'Contact', id: 'contact' }
    ];

    return (
      <header className="bg-white shadow-md sticky top-0 z-40" data-name="header" data-file="components/Header.js">
        <div className="container-max">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <img 
                src="img/Logo Icon.png" 
                alt="P. Masemola Foundation Logo" 
                className="w-32 h-32 object-contain -m-2"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900">P. Masemola Foundation</h1>
                <p className="text-sm text-gray-600">peace.humanity.love</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`nav-link ${currentPage === item.id ? 'text-purple-600' : ''}`}
                >
                  {item.name}
                </button>
              ))}
              <a href="gallery.html" className="nav-link">Gallery</a>
            </nav>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className={`icon-${isMenuOpen ? 'x' : 'menu'} text-xl`}></div>
            </button>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 border-t">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left py-2 nav-link ${currentPage === item.id ? 'text-purple-600' : ''}`}
                >
                  {item.name}
                </button>
              ))}
              <a href="gallery.html" className="block w-full text-left py-2 nav-link">Gallery</a>
            </nav>
          )}
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}