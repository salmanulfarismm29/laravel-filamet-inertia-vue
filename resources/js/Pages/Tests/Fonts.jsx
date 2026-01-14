export default function Fonts() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Fagnus Font Test</h1>
          <p className="text-lg text-gray-600">Test page to verify Eina04 font weights and styles</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
          {/* Font Family Display */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Font Family: Eina04</h2>
            <p className="text-gray-600">All text below uses the Eina04 font family</p>
          </div>

          {/* Light Weight */}
          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Light Weight (300)</h3>
            <div className="space-y-3">
              <p className="text-4xl font-light">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p className="text-4xl font-light">abcdefghijklmnopqrstuvwxyz</p>
              <p className="text-2xl font-light">1234567890 !@#$%^&*()</p>
              <p className="text-xl font-light">The quick brown fox jumps over the lazy dog</p>
              <p className="text-lg font-light text-gray-600">Class: font-eina font-light</p>
            </div>
          </div>

          {/* Regular Weight */}
          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Regular Weight (400)</h3>
            <div className="space-y-3">
              <p className="text-4xl font-normal">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p className="text-4xl font-normal">abcdefghijklmnopqrstuvwxyz</p>
              <p className="text-2xl font-normal">1234567890 !@#$%^&*()</p>
              <p className="text-xl font-normal">The quick brown fox jumps over the lazy dog</p>
              <p className="text-lg font-normal text-gray-600">Class: font-eina font-normal</p>
            </div>
          </div>

          {/* SemiBold Weight */}
          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">SemiBold Weight (600)</h3>
            <div className="space-y-3">
              <p className="text-4xl font-semibold">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p className="text-4xl font-semibold">abcdefghijklmnopqrstuvwxyz</p>
              <p className="text-2xl font-semibold">1234567890 !@#$%^&*()</p>
              <p className="text-xl font-semibold">The quick brown fox jumps over the lazy dog</p>
              <p className="text-lg font-semibold text-gray-600">Class: font-eina font-semibold</p>
            </div>
          </div>

          {/* Bold Weight */}
          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Bold Weight (700)</h3>
            <div className="space-y-3">
              <p className="text-4xl font-bold">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p className="text-4xl font-bold">abcdefghijklmnopqrstuvwxyz</p>
              <p className="text-2xl font-bold">1234567890 !@#$%^&*()</p>
              <p className="text-xl font-bold">The quick brown fox jumps over the lazy dog</p>
              <p className="text-lg font-bold text-gray-600">Class: font-eina font-bold</p>
            </div>
          </div>

          {/* Italic Variants */}
          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Italic Variants</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Light Italic</h4>
                <p className="text-2xl font-light italic">The quick brown fox</p>
                <p className="text-sm text-gray-500">font-eina font-light italic</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Regular Italic</h4>
                <p className="text-2xl font-normal italic">The quick brown fox</p>
                <p className="text-sm text-gray-500">font-eina font-normal italic</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-2">SemiBold Italic</h4>
                <p className="text-2xl font-semibold italic">The quick brown fox</p>
                <p className="text-sm text-gray-500">font-eina font-semibold italic</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Bold Italic</h4>
                <p className="text-2xl font-bold italic">The quick brown fox</p>
                <p className="text-sm text-gray-500">font-eina font-bold italic</p>
              </div>
            </div>
          </div>

          {/* Size Comparison */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Size Comparison</h3>
            <div className="space-y-2">
              <p className="text-xs font-eina">Extra Small Text (text-xs)</p>
              <p className="text-sm font-eina">Small Text (text-sm)</p>
              <p className="text-base font-eina">Base Text (text-base)</p>
              <p className="text-lg font-eina">Large Text (text-lg)</p>
              <p className="text-xl font-eina">Extra Large Text (text-xl)</p>
              <p className="text-2xl font-eina">2XL Text (text-2xl)</p>
              <p className="text-3xl font-eina">3XL Text (text-3xl)</p>
              <p className="text-4xl font-eina">4XL Text (text-4xl)</p>
              <p className="text-5xl font-eina">5XL Text (text-5xl)</p>
              <p className="text-6xl font-eina">6XL Text (text-6xl)</p>
            </div>
          </div>

          {/* Brand Usage Examples */}
          <div className="bg-brand-neutral-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Brand Usage Examples</h3>
            <div className="space-y-4">
              <h1 className="font-eina font-bold text-5xl text-brand-primary">
                Main Heading
              </h1>
              <h2 className="font-eina font-semibold text-3xl text-brand-secondary">
                Section Title
              </h2>
              <p className="font-eina font-light text-xl text-brand-neutral-700">
                Body text with light weight for better readability
              </p>
              <p className="font-eina font-normal text-lg text-brand-neutral-600">
                Supporting text in regular weight
              </p>
              <button className="font-eina font-semibold bg-brand-primary text-white px-6 py-3 rounded-lg">
                Call to Action Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}