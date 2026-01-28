function Header() {
  try {
    return (
      <div className="relative h-96 w-full" data-name="header" data-file="components/Header.js">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=800"
          alt="Buddy the Golden Retriever"
          className="w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
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
  } catch (error) {
    console.error("Header component error:", error);
    return null;
  }
}
