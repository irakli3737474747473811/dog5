// ErrorBoundary
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
          <div className="text-center bg-white p-8 rounded-3xl shadow-lg w-full max-w-sm">
            <div className="icon-triangle-alert text-4xl text-amber-500 mx-auto mb-4"></div>
            <h1 className="text-xl font-bold text-gray-900 mb-2">Oops!</h1>
            <p className="text-gray-600 mb-6 text-sm">Something went wrong showing Buddy's profile.</p>
            <button onClick={() => window.location.reload()} className="btn-primary">Reload Page</button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// App component
function App() {
  return (
    <div className="min-h-screen pb-safe mx-auto max-w-md bg-gray-50 shadow-2xl overflow-hidden min-w-[320px]" data-name="app" data-file="app.js">
      <Header />
      <div className="px-4 -mt-6 relative z-10 pb-12 space-y-4">
        <PetInfo />
        <Emergency />
        <Contact />
        <Health />
        <Gallery />
        <Footer />
      </div>
    </div>
  );
}

// Render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
