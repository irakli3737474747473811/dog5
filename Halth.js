function Health() {
  try {
    return (
      <div className="card" data-name="health" data-file="components/Health.js">
        <h2 className="section-title">
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
  } catch (error) {
    console.error('Health component error:', error);
    return null;
  }
}
