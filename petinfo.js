function PetInfo() {
  try {
    return (
      <div className="card" data-name="pet-info" data-file="components/PetInfo.js">
        <div className="flex flex-wrap gap-2 mb-4">
          <div className="info-pill">🐕 Golden Retriever</div>
          <div className="info-pill">🎂 3 Years Old</div>
          <div className="info-pill">♂️ Male</div>
        </div>

        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <div className="icon-sparkles text-amber-600 text-sm"></div>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-sm">Personality</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Extremely friendly, loves belly rubs, and gets excited around squirrels. Very gentle with kids.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('PetInfo component error:', error);
    return null;
  }
}
