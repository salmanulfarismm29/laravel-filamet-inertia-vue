export default function Colors() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Fagnus Color Palette</h1>
          <p className="text-lg text-gray-600">Test page to verify all brand colors are properly configured</p>
        </div>

        {/* Brand Primary Colors */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Primary Colors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-32 bg-brand-primary"></div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">Primary</h3>
                <p className="text-gray-600">#EB5326</p>
                <p className="text-sm text-gray-500 mt-2">text-brand-primary</p>
                <p className="text-sm text-gray-500">bg-brand-primary</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-32 bg-brand-primary-dark"></div>
              <div className="p-4">
                <h3 className="font-semibold text-white">Primary Dark</h3>
                <p className="text-white">#C1431F</p>
                <p className="text-sm text-gray-200 mt-2">text-brand-primary-dark</p>
                <p className="text-sm text-gray-200">bg-brand-primary-dark</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-32 bg-brand-primary-light"></div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">Primary Light</h3>
                <p className="text-gray-900">#F69682</p>
                <p className="text-sm text-gray-500 mt-2">text-brand-primary-light</p>
                <p className="text-sm text-gray-500">bg-brand-primary-light</p>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Secondary Colors */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Secondary Colors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-32 bg-brand-secondary"></div>
              <div className="p-4">
                <h3 className="font-semibold text-white">Secondary</h3>
                <p className="text-white">#1E293B</p>
                <p className="text-sm text-gray-200 mt-2">text-brand-secondary</p>
                <p className="text-sm text-gray-200">bg-brand-secondary</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-32 bg-brand-secondary-dark"></div>
              <div className="p-4">
                <h3 className="font-semibold text-white">Secondary Dark</h3>
                <p className="text-white">#0F172A</p>
                <p className="text-sm text-gray-200 mt-2">text-brand-secondary-dark</p>
                <p className="text-sm text-gray-200">bg-brand-secondary-dark</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-32 bg-brand-secondary-light"></div>
              <div className="p-4">
                <h3 className="font-semibold text-white">Secondary Light</h3>
                <p className="text-white">#334155</p>
                <p className="text-sm text-gray-200 mt-2">text-brand-secondary-light</p>
                <p className="text-sm text-gray-200">bg-brand-secondary-light</p>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Accent Colors */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Accent Colors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-32 bg-brand-accent"></div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">Accent</h3>
                <p className="text-gray-900">#F5A623</p>
                <p className="text-sm text-gray-500 mt-2">text-brand-accent</p>
                <p className="text-sm text-gray-500">bg-brand-accent</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-32 bg-brand-accent-dark"></div>
              <div className="p-4">
                <h3 className="font-semibold text-white">Accent Dark</h3>
                <p className="text-white">#D4881C</p>
                <p className="text-sm text-gray-200 mt-2">text-brand-accent-dark</p>
                <p className="text-sm text-gray-200">bg-brand-accent-dark</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-32 bg-brand-accent-light"></div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">Accent Light</h3>
                <p className="text-gray-900">#FFBE4D</p>
                <p className="text-sm text-gray-500 mt-2">text-brand-accent-light</p>
                <p className="text-sm text-gray-500">bg-brand-accent-light</p>
              </div>
            </div>
          </div>
        </div>

        {/* Status Colors */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Status Colors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-32 bg-brand-success"></div>
              <div className="p-4">
                <h3 className="font-semibold text-white">Success</h3>
                <p className="text-white">#22C55E</p>
                <p className="text-sm text-gray-200 mt-2">text-brand-success</p>
                <p className="text-sm text-gray-200">bg-brand-success</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-32 bg-brand-warning"></div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">Warning</h3>
                <p className="text-gray-900">#F59E0B</p>
                <p className="text-sm text-gray-500 mt-2">text-brand-warning</p>
                <p className="text-sm text-gray-500">bg-brand-warning</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-32 bg-brand-error"></div>
              <div className="p-4">
                <h3 className="font-semibold text-white">Error</h3>
                <p className="text-white">#EF4444</p>
                <p className="text-sm text-gray-200 mt-2">text-brand-error</p>
                <p className="text-sm text-gray-200">bg-brand-error</p>
              </div>
            </div>
          </div>
        </div>

        {/* Neutral Colors */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Neutral Scale</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[100, 200, 300, 400, 500, 600, 700, 800, 900].map((level) => (
              <div key={level} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className={`h-24 bg-brand-neutral-${level}`}></div>
                <div className="p-3">
                  <h3 className="font-semibold text-gray-900">Neutral {level}</h3>
                  <p className={`text-sm ${
                    level >= 500 ? 'text-white' : 'text-gray-900'
                  }`}>bg-brand-neutral-{level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Text Color Examples */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Text Color Examples</h2>
          <div className="space-y-4">
            <p className="text-2xl text-brand-primary">Primary text color - text-brand-primary</p>
            <p className="text-2xl text-brand-secondary">Secondary text color - text-brand-secondary</p>
            <p className="text-2xl text-brand-accent">Accent text color - text-brand-accent</p>
            <p className="text-2xl text-brand-neutral-700">Neutral 700 text - text-brand-neutral-700</p>
            <p className="text-2xl text-brand-neutral-600">Neutral 600 text - text-brand-neutral-600</p>
            <p className="text-2xl text-brand-neutral-500">Neutral 500 text - text-brand-neutral-500</p>
            <p className="text-2xl text-brand-neutral-400">Neutral 400 text - text-brand-neutral-400</p>
            <p className="text-2xl text-brand-neutral-300">Neutral 300 text - text-brand-neutral-300</p>
          </div>
        </div>
      </div>
    </div>
  );
}