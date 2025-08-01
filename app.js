class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">We're sorry, but something unexpected happened.</p>
            <button
              onClick={() => window.location.reload()}
              className="btn btn-black"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  try {
    const [currentPage, setCurrentPage] = React.useState('home');
    
    const renderPage = () => {
      switch(currentPage) {
        case 'home':
          return (
            <div>
              <Hero setCurrentPage={setCurrentPage} />
              <ProgramsOverview />
            </div>
          );
        case 'about':
          return <About />;
        case 'programs':
          return <Programs />;
        case 'get-involved':
          return <GetInvolved />;
        case 'contact':
          return <Contact />;
        default:
          return (
            <div>
              <Hero />
              <ProgramsOverview />
            </div>
          );
      }
    };

    return (
      <div className="min-h-screen bg-gray-50" data-name="app" data-file="app.js">
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        {renderPage()}
        <Footer setCurrentPage={setCurrentPage} />
        
        {/* Sticky Donation Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <a 
            href="https://ko-fi.com/suprisethobejane"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 inline-flex items-center"
          >
            <div className="icon-heart text-lg mr-2"></div>
            Donate
          </a>
        </div>
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);