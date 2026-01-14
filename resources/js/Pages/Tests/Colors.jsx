export default function Colors() {
  return (
    <div className="min-h-screen bg-brand-neutral-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-brand-neutral-900 mb-8">Brand Color Test</h1>

        {/* Primary Colors */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-brand-neutral-800 mb-4">Primary Colors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-brand-primary p-6 rounded-lg">
              <p className="text-white font-bold">Primary</p>
              <p className="text-white text-sm">#EB5326</p>
            </div>
            <div className="bg-brand-primary-dark p-6 rounded-lg">
              <p className="text-white font-bold">Primary Dark</p>
              <p className="text-white text-sm">#C1431F</p>
            </div>
            <div className="bg-brand-primary-light p-6 rounded-lg">
              <p className="text-brand-neutral-900 font-bold">Primary Light</p>
              <p className="text-brand-neutral-900 text-sm">#F69682</p>
            </div>
          </div>
        </div>

        {/* Secondary Colors */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-brand-neutral-800 mb-4">Secondary Colors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-brand-secondary p-6 rounded-lg">
              <p className="text-white font-bold">Secondary</p>
              <p className="text-white text-sm">#1E293B</p>
            </div>
            <div className="bg-brand-secondary-dark p-6 rounded-lg">
              <p className="text-white font-bold">Secondary Dark</p>
              <p className="text-white text-sm">#0F172A</p>
            </div>
            <div className="bg-brand-secondary-light p-6 rounded-lg">
              <p className="text-white font-bold">Secondary Light</p>
              <p className="text-white text-sm">#334155</p>
            </div>
          </div>
        </div>

        {/* Accent Colors */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-brand-neutral-800 mb-4">Accent Colors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-brand-accent p-6 rounded-lg">
              <p className="text-brand-neutral-900 font-bold">Accent</p>
              <p className="text-brand-neutral-900 text-sm">#F5A623</p>
            </div>
            <div className="bg-brand-accent-dark p-6 rounded-lg">
              <p className="text-white font-bold">Accent Dark</p>
              <p className="text-white text-sm">#D4881C</p>
            </div>
            <div className="bg-brand-accent-light p-6 rounded-lg">
              <p className="text-brand-neutral-900 font-bold">Accent Light</p>
              <p className="text-brand-neutral-900 text-sm">#FFBE4D</p>
            </div>
          </div>
        </div>

        {/* Status Colors */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-brand-neutral-800 mb-4">Status Colors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-brand-success p-6 rounded-lg">
              <p className="text-white font-bold">Success</p>
              <p className="text-white text-sm">#22C55E</p>
            </div>
            <div className="bg-brand-warning p-6 rounded-lg">
              <p className="text-brand-neutral-900 font-bold">Warning</p>
              <p className="text-brand-neutral-900 text-sm">#F59E0B</p>
            </div>
            <div className="bg-brand-error p-6 rounded-lg">
              <p className="text-white font-bold">Error</p>
              <p className="text-white text-sm">#EF4444</p>
            </div>
          </div>
        </div>

        {/* Neutral Scale */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-brand-neutral-800 mb-4">Neutral Scale</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="bg-brand-neutral-100 p-4 rounded-lg">
              <p className="font-bold text-brand-neutral-900">N-100</p>
              <p className="text-sm text-brand-neutral-900/80">#F8FAFC</p>
            </div>
            <div className="bg-brand-neutral-200 p-4 rounded-lg">
              <p className="font-bold text-brand-neutral-900">N-200</p>
              <p className="text-sm text-brand-neutral-900/80">#F1F5F9</p>
            </div>
            <div className="bg-brand-neutral-300 p-4 rounded-lg">
              <p className="font-bold text-brand-neutral-900">N-300</p>
              <p className="text-sm text-brand-neutral-900/80">#E2E8F0</p>
            </div>
            <div className="bg-brand-neutral-400 p-4 rounded-lg">
              <p className="font-bold text-brand-neutral-900">N-400</p>
              <p className="text-sm text-brand-neutral-900/80">#CBD5E1</p>
            </div>
            <div className="bg-brand-neutral-500 p-4 rounded-lg">
              <p className="font-bold text-white">N-500</p>
              <p className="text-sm text-white/80">#94A3B8</p>
            </div>
            <div className="bg-brand-neutral-600 p-4 rounded-lg">
              <p className="font-bold text-white">N-600</p>
              <p className="text-sm text-white/80">#64748B</p>
            </div>
            <div className="bg-brand-neutral-700 p-4 rounded-lg">
              <p className="font-bold text-white">N-700</p>
              <p className="text-sm text-white/80">#475569</p>
            </div>
            <div className="bg-brand-neutral-800 p-4 rounded-lg">
              <p className="font-bold text-white">N-800</p>
              <p className="text-sm text-white/80">#334155</p>
            </div>
            <div className="bg-brand-neutral-900 p-4 rounded-lg">
              <p className="font-bold text-white">N-900</p>
              <p className="text-sm text-white/80">#1E293B</p>
            </div>
          </div>
        </div>

        {/* Text Colors Test */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-brand-neutral-800 mb-4">Text Colors</h2>
          <div className="space-y-2">
            <p className="text-brand-primary">Primary text color</p>
            <p className="text-brand-secondary">Secondary text color</p>
            <p className="text-brand-accent">Accent text color</p>
            <p className="text-brand-success">Success text color</p>
            <p className="text-brand-warning">Warning text color</p>
            <p className="text-brand-error">Error text color</p>
            <p className="text-brand-neutral-700">Neutral 700 text</p>
            <p className="text-brand-neutral-600">Neutral 600 text</p>
            <p className="text-brand-neutral-500">Neutral 500 text</p>
          </div>
        </div>
      </div>
    </div>
  );
}