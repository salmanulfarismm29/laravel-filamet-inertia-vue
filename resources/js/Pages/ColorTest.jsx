// Test component to verify color configuration
export default function ColorTest() {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Color Test</h1>
      
      {/* Primary colors */}
      <div className="space-y-2">
        <h2 className="font-semibold">Brand Primary:</h2>
        <div className="flex gap-2">
          <div className="w-16 h-8 bg-brand-primary"></div>
          <div className="w-16 h-8 bg-brand-primary-dark"></div>
          <div className="w-16 h-8 bg-brand-primary-light"></div>
        </div>
      </div>
      
      {/* Neutral colors */}
      <div className="space-y-2">
        <h2 className="font-semibold">Brand Neutral:</h2>
        <div className="flex gap-2">
          <div className="w-16 h-8 bg-brand-neutral-100"></div>
          <div className="w-16 h-8 bg-brand-neutral-200"></div>
          <div className="w-16 h-8 bg-brand-neutral-300"></div>
          <div className="w-16 h-8 bg-brand-neutral-400"></div>
          <div className="w-16 h-8 bg-brand-neutral-500"></div>
          <div className="w-16 h-8 bg-brand-neutral-600"></div>
          <div className="w-16 h-8 bg-brand-neutral-700"></div>
          <div className="w-16 h-8 bg-brand-neutral-800"></div>
          <div className="w-16 h-8 bg-brand-neutral-900"></div>
        </div>
      </div>
      
      {/* Text colors */}
      <div className="space-y-2">
        <h2 className="font-semibold">Text Colors:</h2>
        <div className="space-y-1">
          <p className="text-brand-primary">Primary text</p>
          <p className="text-brand-neutral-700">Neutral 700 text</p>
          <p className="text-brand-neutral-600">Neutral 600 text</p>
          <p className="text-brand-neutral-400">Neutral 400 text</p>
          <p className="text-brand-neutral-200">Neutral 200 text</p>
        </div>
      </div>
    </div>
  );
}