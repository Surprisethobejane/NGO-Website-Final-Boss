function Gallery() {
  try {
    const images = [
      // Images from main img folder
      'img/Educational Support.jpg',
      'img/Youth Leadership.jpg',
      'img 2/Community Engagement.jpg',
      'img/img1.jpg',
      'img/img2.jpg',
      'img/img3.jpg',
      'img/img4.jpg',
      'img/img 5.jpg',
      'img/img6.jpg',
      'img/img7.jpg',
      // Images from img 2 folder
      'img 2/WhatsApp Image 2025-10-14 at 11.05.20_0e75e0ee.jpg',
      'img 2/WhatsApp Image 2025-10-14 at 11.05.20_fa3fc4a3.jpg',
      'img 2/WhatsApp Image 2025-10-14 at 11.05.21_9a94580c.jpg',
      'img 2/WhatsApp Image 2025-10-14 at 11.05.21_9ccd6ca6.jpg',
      'img 2/WhatsApp Image 2025-10-14 at 11.05.21_c7040c0e.jpg',
      'img 2/WhatsApp Image 2025-10-14 at 11.05.22_630eda62.jpg',
      'img 2/WhatsApp Image 2025-10-14 at 11.05.22_b8c219e4.jpg',
      'img 2/WhatsApp Image 2025-10-14 at 11.05.22_e81e8401.jpg',
      'img 2/WhatsApp Image 2025-10-14 at 11.05.23_4e853d7d.jpg',
      'img 2/WhatsApp Image 2025-10-14 at 11.05.23_73d1366c.jpg',
      'img 2/WhatsApp Image 2025-10-14 at 11.05.24_035631da.jpg',
      'img 2/WhatsApp Image 2025-10-14 at 11.05.24_b910947b.jpg',
      'img 2/WhatsApp Image 2025-10-14 at 11.05.24_df614bcb.jpg',
      'img 2/WhatsApp Image 2025-10-14 at 11.05.24_f19fcd27.jpg',
      'img 2/WhatsApp Image 2025-10-14 at 11.05.25_a5e6a3eb.jpg',
      'img 2/WhatsApp Image 2025-10-14 at 11.05.25_e52aa1de.jpg',
      'img 2/WhatsApp Image 2025-10-14 at 11.05.25_f0d45eed.jpg',
      'img 2/WhatsApp Image 2025-10-14 at 11.15.29_237b22d4.jpg',
      'img 2/WhatsApp Image 2025-10-14 at 11.15.29_3f68e37c.jpg',
      'img 2/WhatsApp Image 2025-10-14 at 11.15.29_416b15be.jpg',
      'img 2/WhatsApp Image 2025-10-14 at 11.15.29_a254355d.jpg',
      'img 2/WhatsApp Image 2025-10-14 at 11.15.29_c8f24767.jpg',
      'img 2/WhatsApp Image 2025-10-14 at 11.15.29_e3f74bc2.jpg',
      'img 2/WhatsApp Image 2025-10-14 at 11.15.30_5367d96c.jpg',
      'img 2/WhatsApp Image 2025-10-14 at 11.15.30_e8b20d9e.jpg'
    ];

    const [lightboxOpen, setLightboxOpen] = React.useState(false);
    const [currentImage, setCurrentImage] = React.useState('');

    const openLightbox = (src) => {
      setCurrentImage(src);
      setLightboxOpen(true);
    };

    const closeLightbox = () => {
      setLightboxOpen(false);
      setCurrentImage('');
    };

    React.useEffect(() => {
      const handleEscape = (e) => {
        if (e.key === 'Escape') closeLightbox();
      };
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }, []);

    return (
      <div className="section-padding bg-gray-50 dark:bg-gray-900 transition-colors duration-300" data-name="gallery" data-file="components/Gallery.js">
        <div className="container-max">
          {/* Hero / Intro */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Gallery
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A curated look at the impact and joy across our initiatives. Click any photo to view larger.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {images.map((image, index) => (
              <figure 
                key={index} 
                className="group relative overflow-hidden rounded-xl shadow-md bg-white dark:bg-gray-800 cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => openLightbox(image)}
              >
                <img 
                  src={image} 
                  alt={`Gallery image ${index + 1}`} 
                  loading="lazy" 
                  className="h-40 w-full object-cover md:h-48 transition-transform duration-300"
                />
                <figcaption className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {lightboxOpen && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={closeLightbox}
          >
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 btn-secondary bg-white/90 dark:bg-gray-800/90"
            >
              Close
            </button>
            <img 
              src={currentImage} 
              alt="Expanded view" 
              className="max-h-[85vh] max-w-[90vw] rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error('Gallery component error:', error);
    return null;
  }
}
