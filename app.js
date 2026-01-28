// ---------------------- ErrorBoundary ----------------------
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
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
          <div className="text-center bg-white p-8 rounded-3xl shadow-lg w-full max-w-sm">
            <div className="icon-triangle-alert text-4xl text-amber-500 mx-auto mb-4"></div>
            <h1 className="text-xl font-bold text-gray-900 mb-2">Oops!</h1>
            <p className="text-gray-600 mb-6 text-sm">Something went wrong showing Buddy's profile.</p>
            <button
              onClick={() => window.location.reload()}
              className="btn-primary"
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

// ---------------------- Components ----------------------
function Header() {
  return (
    <header className="bg-[var(--primary-color)] text-white p-4 text-center font-bold text-xl rounded-b-3xl">
      Buddy's Profile
    </header>
  );
}

function PetInfo() {
  return (
    <div className="card">
      <h2 className="section-title">Pet Info</h2>
      <p>Name: Buddy</p>
      <p>Age: 3 years</p>
      <p>Breed: Golden Retriever</p>
    </div>
  );
}

function Emergency() {
  return (
    <div className="card">
      <h2 className="section-title">Emergency</h2>
      <p>Vet: Dr. Smith</p>
      <p>Phone: +123456789</p>
    </div>
  );
}

function Contact() {
  return (
    <div className="card">
      <h2 className="section-title">Contact</h2>
      <p>Owner: John Doe</p>
      <p>Email: john@example.com</p>
    </div>
  );
}

function Health() {
  return (
    <div className="card">
      <h2 className="section-title">Health</h2>
      <p>Vaccinated: Yes</p>
      <p>Allergies: None</p>
    </div>
  );
}

function Gallery() {
  return (
    <div className="card">
      <h2 className="section-title">Gallery</h2>
      <img src="https://via.placeholder.com/300x200" alt="Buddy" className="rounded-xl" />
    </div>
  );
}

function Footer() {
  return (
    <footer className="text-center text-gray-500 p-4 text-sm">
      &copy; 2026 Buddy Profile
    </footer>
  );
}

// ---------------------- App ----------------------
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

// ---------------------- Render ----------------------
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
