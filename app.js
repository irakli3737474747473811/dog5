// ---------------------- Header ----------------------
function Header() {
  return (
    <div className="relative h-96 w-full">
      <img
        src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=800"
        alt="Hero image of a Golden Retriever named Buddy for the pet profile"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60"></div>

      {/* NFC Badge */}
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg border border-white/50">
        <div className="icon-wifi text-blue-500 text-sm"></div>
        <span className="text-xs font-bold text-gray-800 tracking-wide">NFC ACTIVE</span>
      </div>

      {/* Bottom Overlay Text */}
      <div className="absolute bottom-10 left-4 text-white">
        <h1 className="text-4xl font-extrabold tracking-tight mb-1 drop-shadow-md">Buddy</h1>
        <p className="text-white/90 font-medium drop-shadow-sm flex items-center gap-1">
          <span className="icon-map-pin w-4 h-4"></span> San Francisco, CA
        </p>
      </div>
    </div>
  );
}

// ---------------------- PetInfo ----------------------
function PetInfo() {
  return (
    <div className="p-4 m-4 bg-white rounded-2xl shadow-md w-full max-w-md">
      <h2 className="text-lg font-bold mb-2">Pet Info</h2>
      <p>🐕 Golden Retriever</p>
      <p>🎂 3 Years Old</p>
      <p>♂️ Male</p>
      <p>Personality: Extremely friendly, loves belly rubs, very gentle with kids.</p>
    </div>
  );
}

// ---------------------- Emergency ----------------------
function Emergency() {
  return (
    <div className="bg-red-50 border-2 border-red-100 rounded-3xl p-5 mb-4 shadow-sm w-full max-w-md">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center animate-pulse">
          <div className="icon-siren text-red-500 text-lg"></div>
        </div>
        <h2 className="font-bold text-red-800 text-lg">თუ დაკარგული ვარ...</h2>
      </div>
      <p className="text-red-700 text-sm leading-relaxed">
        გთხოვთ დამეხმაროთ სახლში დაბრუნებაში! შეიძლება შეშინებული ვარ, მაგრამ მეგობრული ვარ. ჩემი პატრონი ძალიან მენატრება. 🐾❤️
      </p>
    </div>
  );
}

// ---------------------- Contact ----------------------
function Contact() {
  return (
    <div className="space-y-3 mb-6 w-full max-w-md">
      <a href="tel:+1234567890" className="btn-primary bg-black hover:bg-gray-800 border-none flex items-center justify-center gap-2">
        <div className="icon-phone text-xl"></div>
        <span>Call Owner</span>
      </a>
      <a href="https://wa.me/1234567890" className="btn-secondary text-green-600 border-green-100 bg-green-50 hover:bg-green-100 flex items-center justify-center gap-2">
        <div className="icon-message-circle text-xl"></div>
        <span>WhatsApp</span>
      </a>
    </div>
  );
}

// ---------------------- Health ----------------------
function Health() {
  return (
    <div className="card p-4 m-4 w-full max-w-md">
      <h2 className="section-title flex items-center gap-2 mb-4">
        <div className="icon-activity text-green-500"></div>
        Medical Info
      </h2>
      <div className="space-y-4">
        <div className="flex items-start gap-4 p-3 rounded-2xl bg-blue-50/50">
          <div className="mt-1">
            <div className="icon-triangle-alert text-blue-500"></div>
          </div>
          <div>
            <span className="block text-xs font-bold text-blue-400 uppercase tracking-wider mb-0.5">Allergies</span>
            <span className="text-gray-800 font-medium text-sm">Chicken, Pollen</span>
          </div>
        </div>

        <div className="flex items-start gap-4 p-3 rounded-2xl bg-purple-50/50">
          <div className="mt-1">
            <div className="icon-pill text-purple-500"></div>
          </div>
          <div>
            <span className="block text-xs font-bold text-purple-400 uppercase tracking-wider mb-0.5">Medication</span>
            <span className="text-gray-800 font-medium text-sm">Monthly Heartworm (15th)</span>
          </div>
        </div>

        <div className="flex items-start gap-4 p-3 rounded-2xl bg-green-50/50">
          <div className="mt-1">
            <div className="icon-syringe text-green-500"></div>
          </div>
          <div>
            <span className="block text-xs font-bold text-green-400 uppercase tracking-wider mb-0.5">Vaccination</span>
            <span className="text-gray-800 font-medium text-sm">Rabies Up-to-date (2025)</span>
          </div>
        </div>

        <div className="flex items-start gap-4 p-3 rounded-2xl bg-orange-50/50">
          <div className="mt-1">
            <div className="icon-bone text-orange-500"></div>
          </div>
          <div>
            <span className="block text-xs font-bold text-orange-400 uppercase tracking-wider mb-0.5">Diet</span>
            <span className="text-gray-800 font-medium text-sm">Grain-free kibble only</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------- Gallery ----------------------
function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=400"
  ];

  return (
    <div className="mb-6 w-full max-w-md">
      <h2 className="section-title px-2 flex items-center gap-2 mb-2">
        <div className="icon-image text-pink-500"></div>
        Photo Gallery
      </h2>
      <div className="flex overflow-x-auto gap-3 pb-4 px-1 no-scrollbar snap-x snap-mandatory">
        {images.map((img, index) => (
          <div key={index} className="flex-none w-40 h-40 rounded-2xl overflow-hidden shadow-md snap-center relative group">
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------------------- Footer ----------------------
function Footer() {
  return (
    <div className="text-center py-6 text-gray-400 text-xs w-full max-w-md">
      <div className="flex justify-center items-center gap-1 mb-2">
        <div className="icon-shield-check text-green-500 w-4 h-4"></div>
        <span>Verified Pet Profile</span>
      </div>
      <p>© 2026 PetSafe ID. All rights reserved.</p>
    </div>
  );
}

// ---------------------- App ----------------------
function App() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 py-4">
      <Header />
      <PetInfo />
      <Emergency />
      <Contact />
      <Health />
      <Gallery />
      <Footer />
    </div>
  );
}

// ---------------------- Render ----------------------
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
