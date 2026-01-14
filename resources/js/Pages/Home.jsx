import StoryParallax from '@/Sections/StoryParallax';
import { ColorTest } from '@/Components/Shared/ColorTest';

export default function Home() {
  return (
    <>
      {/* Color Test Section */}
      <ColorTest />
      
      {/* Hero Section - Light off-white background */}
      <section className="min-h-screen flex items-center justify-center bg-[#f8f8f8]">
        <div className="text-center px-6 py-32">
          <h1 className="font-eina font-bold text-5xl md:text-7xl lg:text-8xl text-black mb-6 tracking-tight">
            Driven by Expertise,
            <br />
            <span className="text-brand-primary">Defined by Quality</span>
          </h1>
          <p className="font-eina font-light text-lg md:text-xl text-brand-neutral-700 max-w-2xl mx-auto">
            Premium security solutions with cutting-edge technology.
            Scroll down to explore our services.
          </p>
        </div>
      </section>

      {/* Cinematic Story Parallax Section */}
      <StoryParallax />

      {/* About Section - Light gray background */}
      <section className="min-h-screen flex items-center justify-center bg-[#f8f8f8] py-20">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-12">
          <h2 className="font-eina font-semibold text-4xl md:text-5xl lg:text-6xl text-black mb-8 tracking-tight">
            About Fagnus
          </h2>
          <p className="font-eina font-light text-lg md:text-xl text-brand-neutral-700 leading-relaxed mb-6">
            Founded and led by professionals with over two decades of experience, 
            Fagnus stands as a symbol of trust, technical excellence, and sustainable innovation.
          </p>
          <p className="font-eina font-light text-lg md:text-xl text-brand-neutral-600 leading-relaxed">
            We deliver unmatched expertise in Solar Energy Solutions, ELV Systems, 
            Air Conditioning Services, and Professional PC Sales & Service, focusing on 
            advanced, integrated solutions with the latest industry advancements.
          </p>
        </div>
      </section>

      {/* Call to Action Section - Dark section for contrast */}
      <section className="min-h-[60vh] flex items-center justify-center bg-black py-20">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-12">
          <h2 className="font-eina font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-8 tracking-tight">
            Ready to Transform Your Space?
          </h2>
          <p className="font-eina font-light text-lg md:text-xl text-brand-neutral-400 mb-10">
            Experience the difference that two decades of expertise can make
          </p>
          <button className="bg-brand-primary hover:bg-brand-primary-dark text-white font-eina font-semibold text-lg px-12 py-5 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl outline-none focus:outline-none">
            Get Started Today
          </button>
        </div>
      </section>
    </>
  );
}
