function Hero({ setCurrentPage }) {
  try {
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
    const [count, setCount] = React.useState(0);
    
    const images = [
      'img/Educational Support.jpg',
      'img/Youth Leadership.jpg',
      'img/Community Engagement.webp',
      'img/img1.jpg',
      'img/img2.jpg',
      'img/img3.jpg',
      'img/img4.jpg',
      'img/img 5.jpg',
      'img/img6.jpg',
      'img/img7.jpg'
    ];

    // Preload all images
    React.useEffect(() => {
      images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    }, []);

    React.useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000); // Increased to 4 seconds for smoother transitions

      return () => clearInterval(interval);
    }, [images.length]);

    React.useEffect(() => {
      const target = 500;
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60fps
      
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 16);

      return () => clearInterval(timer);
    }, []);

    return (
      <section className="hero-pattern bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 section-padding transition-colors duration-300" data-name="hero" data-file="components/Hero.js">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 text-shadow">
                Empowering Youth. 
                <span className="text-purple-600 dark:text-purple-400"> Building Futures.</span>
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                The P. Masemola Foundation transforms lives in rural and township communities 
                through education, leadership development, and entrepreneurship programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  className="btn-primary flex items-center justify-center"
                  onClick={() => setCurrentPage('get-involved')}
                >
                  <div className="icon-heart text-lg mr-2"></div>
                  Get Involved
                </button>
                <button 
                  className="btn-secondary flex items-center justify-center"
                  onClick={() => {
                    const programsSection = document.querySelector('[data-name="programs-overview"]');
                    if (programsSection) {
                      programsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <div className="icon-play text-lg mr-2"></div>
                  Learn More
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-2xl p-2 transition-colors duration-300">
                <img 
                  src={images[currentImageIndex]} 
                  alt="NGO activities showcase" 
                  className={`w-full h-80 object-cover rounded-xl transition-all duration-1500 ease-in-out ${images[currentImageIndex] === 'img/Community Engagement.webp' ? 'rotate-180' : ''}`}
                  style={{ minHeight: '320px' }}
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-purple-600 text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">{count}+</div>
                <div className="text-sm">Youth Empowered</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}