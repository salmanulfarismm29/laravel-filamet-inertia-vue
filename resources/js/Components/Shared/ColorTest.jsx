import { Colors } from "../../Utils/colors";

export function ColorTest() {
  return (
    <div className="p-8 bg-white">
      <h1 className="text-2xl font-bold mb-6">Color Test</h1>
      
      {/* Test brand colors */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Brand Colors:</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-brand-primary text-white">Primary: #EB5326</div>
          <div className="p-4 bg-brand-primary-dark text-white">Primary Dark: #C1431F</div>
          <div className="p-4 bg-brand-primary-light text-black">Primary Light: #F69682</div>
          
          <div className="p-4 bg-brand-secondary text-white">Secondary: #1E293B</div>
          <div className="p-4 bg-brand-secondary-dark text-white">Secondary Dark: #0F172A</div>
          <div className="p-4 bg-brand-secondary-light text-white">Secondary Light: #334155</div>
          
          <div className="p-4 bg-brand-accent text-black">Accent: #F5A623</div>
          <div className="p-4 bg-brand-accent-dark text-white">Accent Dark: #D4881C</div>
          <div className="p-4 bg-brand-accent-light text-black">Accent Light: #FFBE4D</div>
        </div>
      </div>

      {/* Test neutral colors */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Neutral Colors:</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-brand-neutral-100 text-black">Neutral 100: #F8FAFC</div>
          <div className="p-4 bg-brand-neutral-200 text-black">Neutral 200: #F1F5F9</div>
          <div className="p-4 bg-brand-neutral-300 text-black">Neutral 300: #E2E8F0</div>
          <div className="p-4 bg-brand-neutral-400 text-black">Neutral 400: #CBD5E1</div>
          <div className="p-4 bg-brand-neutral-500 text-white">Neutral 500: #94A3B8</div>
          <div className="p-4 bg-brand-neutral-600 text-white">Neutral 600: #64748B</div>
          <div className="p-4 bg-brand-neutral-700 text-white">Neutral 700: #475569</div>
          <div className="p-4 bg-brand-neutral-800 text-white">Neutral 800: #334155</div>
          <div className="p-4 bg-brand-neutral-900 text-white">Neutral 900: #1E293B</div>
        </div>
      </div>

      {/* Test text colors */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Text Colors:</h2>
        <div className="space-y-2">
          <p className="text-brand-primary">This is brand primary text (#EB5326)</p>
          <p className="text-brand-secondary">This is brand secondary text (#1E293B)</p>
          <p className="text-brand-accent">This is brand accent text (#F5A623)</p>
          <p className="text-brand-neutral-700">This is brand neutral 700 text (#475569)</p>
          <p className="text-brand-neutral-600">This is brand neutral 600 text (#64748B)</p>
          <p className="text-brand-neutral-400">This is brand neutral 400 text (#CBD5E1)</p>
        </div>
      </div>
    </div>
  );
}