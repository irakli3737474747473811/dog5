// =======================
// Components
// =======================

function Header() {
  return React.createElement('header', { className: 'p-4 bg-[var(--primary-light)] rounded-b-3xl text-center font-bold text-[var(--primary-color)]' }, 'Buddy Profile');
}

function PetInfo() {
  return React.createElement('div', { className: 'card' },
    React.createElement('h2', { className: 'section-title' }, 'Pet Info'),
    React.createElement('p', null, 'Name: Buddy'),
    React.createElement('p', null, 'Type: Dog'),
    React.createElement('p', null, 'Age: 3 years')
  );
}

function Emergency() {
  return React.createElement('div', { className: 'card' },
    React.createElement('h2', { className: 'section-title' }, 'Emergency Info'),
    React.createElement('p', null, 'Vet: Dr. Smith'),
    React.createElement('p', null, 'Phone: +995 555 123456')
  );
}

function Contact() {
  return React.createElement('div', { className: 'card' },
    React.createElement('h2', { className: 'section-title' }, 'Owner Contact'),
    React.createElement('p', null, 'Name: Irakli'),
    React.createElement('p', null, 'Phone: +995 555 654321')
  );
}

function Health() {
  return React.createElement('div', { className: 'card' },
    React.createElement('h2', { className: 'section-title' }, 'Health Info'),
    React.createElement('p', null, 'Vaccinations: Up to date'),
    React.createElement('p', null, 'Allergies: None')
  );
}

function Gallery() {
  return React.createElement('div', { className: 'card' },
    React.createElement('h2', { className: 'section-title' }, 'Gallery'),
    React.createElement('div', null, 'Images coming soon...')
  );
}

function Footer() {
  return React.createElement('footer', { className: 'text-center p-4 text-sm text-gray-500' }, '© 2026 Buddy Profile');
}

// =======================
// ErrorBoundary
// =======================
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return React.createElement('div', { className: 'min-h-screen flex items-center justify-center bg-gray-50 p-4' },
        React.createElement('div', { className: 'text-center bg-white p-8 rounded-3xl shadow-lg w-full max-w-sm' },
          React.createElement('div', { className: 'icon-triangle-alert text-4xl text-amber-500 mx-auto mb-4' }),
          React.createElement('h1', { className: 'text-xl font-bold text-gray-900 mb-2' }, 'Oops!'),
          React.createElement('p', { className: 'text-gray-600 mb-6 text-sm' }, "Something went wrong showing Buddy's profile."),
          React.createElement('button', { onClick: () => window.location.reload(), className: 'btn-primary' }, 'Reload Page')
        )
      );
    }
    return this.props.children;
  }
}

// =======================
// App
// =======================
function App() {
  return React.createElement('div', { className: 'min-h-screen pb-safe mx-auto max-w-md bg-gray-50 shadow-2xl overflow-hidden min-w-[320px]' },
    React.createElement(Header),
    React.createElement('div', { className: 'px-4 -mt-6 relative z-10 pb-12 space-y-4' },
      React.createElement(PetInfo),
      React.createElement(Emergency),
      React.createElement(Contact),
      React.createElement(Health),
      React.createElement(Gallery),
      React.createElement(Footer)
    )
  );
}

// =======================
// Render
// =======================
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  React.createElement(ErrorBoundary, null, React.createElement(App))
);
