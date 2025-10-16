function Header({ currentPage, setCurrentPage }) {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isDark, setIsDark] = React.useState(false);
    
    const navigation = [
      { name: 'Home', id: 'home' },
      { name: 'About', id: 'about' },
      { name: 'Programs', id: 'programs' },
      { name: 'Get Involved', id: 'get-involved' },
      { name: 'Contact', id: 'contact' },
      { name: 'Gallery', id: 'gallery' }
    ];

    React.useEffect(() => {
      // Check for saved theme preference or default to dark
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      // Default to dark mode if no saved preference
      const shouldBeDark = savedTheme === 'dark' || (!savedTheme && true); // Change 'true' to 'prefersDark' to respect system preference
      
      setIsDark(shouldBeDark);
      document.documentElement.classList.toggle('dark', shouldBeDark);
    }, []);

    const toggleTheme = () => {
      const newTheme = !isDark;
      setIsDark(newTheme);
      document.documentElement.classList.toggle('dark', newTheme);
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    };

    return (
      <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-40 transition-colors duration-300" data-name="header" data-file="components/Header.js">
        <div className="container-max">
          <div className="flex justify-between items-center py-4">
            <button 
              onClick={() => setCurrentPage('home')}
              className="flex items-center cursor-pointer hover:opacity-80 transition-opacity"
              aria-label="Go to home page"
            >
              <img 
                src="img/Logo Icon.png" 
                alt="P. Masemola Foundation Logo" 
                className="w-20 h-20 md:w-28 md:h-28 object-contain flex-shrink-0"
              />
            </button>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-4 lg:space-x-8 items-center">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`nav-link whitespace-nowrap dark:text-gray-300 dark:hover:text-purple-400 ${currentPage === item.id ? 'text-purple-600 dark:text-purple-400' : ''}`}
                >
                  {item.name}
                </button>
              ))}
              
              {/* Theme Toggle - Desktop */}
              <button
                onClick={toggleTheme}
                className="relative w-14 h-7 bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                aria-label="Toggle theme"
              >
                <div className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-md transform transition-all duration-300 flex items-center justify-center ${isDark ? 'translate-x-7 bg-gray-800' : 'translate-x-0'}`}>
                  {isDark ? (
                    <span className="text-yellow-400 text-xs">🌙</span>
                  ) : (
                    <span className="text-yellow-500 text-xs">☀️</span>
                  )}
                </div>
              </button>
            </nav>
            
            {/* Mobile Right Side - Theme Toggle + Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              {/* Theme Toggle - Mobile */}
              <button
                onClick={toggleTheme}
                className="relative w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full p-0.5 transition-colors duration-300 focus:outline-none"
                aria-label="Toggle theme"
              >
                <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-all duration-300 flex items-center justify-center ${isDark ? 'translate-x-6 bg-gray-800' : 'translate-x-0'}`}>
                  {isDark ? (
                    <span className="text-yellow-400" style={{fontSize: '10px'}}>🌙</span>
                  ) : (
                    <span className="text-yellow-500" style={{fontSize: '10px'}}>☀️</span>
                  )}
                </div>
              </button>
              
              <button
                className="p-2 flex-shrink-0"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div className={`icon-${isMenuOpen ? 'x' : 'menu'} text-xl dark:text-gray-300`}></div>
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 border-t dark:border-gray-700 px-4 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left py-3 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors nav-link dark:text-gray-300 ${currentPage === item.id ? 'text-purple-600 dark:text-purple-400' : ''}`}
                >
                  {item.name}
                </button>
              ))}
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