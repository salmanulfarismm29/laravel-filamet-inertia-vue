import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { router } from "@inertiajs/react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Story sequence configuration
const STORY_FRAMES = [
  {
    image: "/story/story_gate_closed_1766908902408.png",
    title: "Secure Entry with Automatic Gates",
    description: "Smart access control begins your journey",
  },
  {
    image: "/story/story_solar_lights_1766908918173.png",
    title: "Intelligent Solar Street Lighting",
    description: "Illuminating pathways with sustainable energy",
  },
  {
    image: "/story/story_smart_home_1766908934818.png",
    title: "Smart Home Integration",
    description: "Welcome to the future of living",
  },
  {
    image: "/story/story_inverter_system_1766908951044.png",
    title: "Advanced Inverter Control",
    description: "Intelligent power management at your fingertips",
  },
  {
    image: "/story/story_solar_panels_1766908968215.png",
    title: "Sustainable Power from the Sun",
    description: "Harness unlimited clean energy",
  },
];

export default function StoryParallax() {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const imagesRef = useRef([]);

  // Scroll progress for effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Parallax transforms
  const patternY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const glowIntensity = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0.3, 0.6, 0.9, 0.6, 0.3]);

  // Preload images
  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = STORY_FRAMES.map((frame, index) => {
        return new Promise((resolve, reject) => {
          const img = new window.Image();
          img.onload = () => resolve(img);
          img.onerror = reject;
          img.src = frame.image;
        });
      });

      try {
        const loadedImages = await Promise.all(imagePromises);
        imagesRef.current = loadedImages;
        setImagesLoaded(true);
      } catch (error) {
        console.error("Error loading story images:", error);
      }
    };

    loadImages();
  }, []);

  // GSAP ScrollTrigger for frame scrubbing
  useEffect(() => {
    if (!sectionRef.current || !imagesLoaded) return;

    // Store reference for cleanup
    let scrollTriggerInstance = null;

    const ctx = gsap.context(() => {
      // Pin the section and scrub through frames
      scrollTriggerInstance = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=300%",
        pin: true,
        pinSpacing: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const frameIndex = Math.min(
            Math.floor(self.progress * STORY_FRAMES.length),
            STORY_FRAMES.length - 1
          );
          setCurrentFrame(frameIndex);
        },
        onLeave: () => {
          // Reset state when leaving the pinned section
          setCurrentFrame(STORY_FRAMES.length - 1);
        },
        onLeaveBack: () => {
          setCurrentFrame(0);
        },
      });
    }, sectionRef);

    // Cleanup function that properly kills the ScrollTrigger
    const cleanup = () => {
      if (scrollTriggerInstance) {
        // Disable first, then kill with full revert
        scrollTriggerInstance.disable();
        scrollTriggerInstance.kill(true);
        scrollTriggerInstance = null;
      }
      // Revert GSAP context
      ctx.revert();
      // Clear any remaining scroll memory
      ScrollTrigger.clearScrollMemory();
      // Force scroll to top using GSAP's method
      const scrollFunc = ScrollTrigger.getScrollFunc(window);
      if (scrollFunc) {
        scrollFunc(0);
      }
      window.scrollTo(0, 0);
    };

    // Listen to Inertia navigation to cleanup BEFORE navigation starts
    const removeBeforeListener = router.on('before', () => {
      cleanup();
    });

    return () => {
      removeBeforeListener();
      cleanup();
    };
  }, [imagesLoaded]);

  // Draw current frame on canvas
  useEffect(() => {
    if (!canvasRef.current || !imagesLoaded || !imagesRef.current[currentFrame]) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[currentFrame];

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Draw image centered and cover
    const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
    const x = (canvas.width / 2) - (img.width / 2) * scale;
    const y = (canvas.height / 2) - (img.height / 2) * scale;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
  }, [currentFrame, imagesLoaded]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current && imagesLoaded && imagesRef.current[currentFrame]) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = imagesRef.current[currentFrame];
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentFrame, imagesLoaded]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-black overflow-hidden"
    >
      {/* Background Pattern with Parallax */}
      <motion.div
        className="absolute inset-0 opacity-[0.08] pointer-events-none z-0"
        style={{
          y: patternY,
          backgroundImage: "url(/patterns/Fagnus_Pattern.svg)",
          backgroundRepeat: "repeat",
          backgroundSize: "400px 400px",
        }}
      />

      {/* Radial Orange Glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          opacity: glowIntensity,
          background: `radial-gradient(circle at 50% 50%, rgba(235, 83, 38, 0.3) 0%, rgba(235, 83, 38, 0.1) 40%, transparent 70%)`,
        }}
      />

      {/* Canvas for Image Sequence */}
      <div className="sticky top-0 w-full h-screen">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Loading State */}
        {!imagesLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white font-eina text-xl">Loading experience...</div>
          </div>
        )}

        {/* Text Overlays */}
        {imagesLoaded && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
            <motion.div
              key={currentFrame}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center px-6 max-w-4xl"
            >
              <motion.h2
                className="font-eina font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4 drop-shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {STORY_FRAMES[currentFrame].title}
              </motion.h2>
              <motion.p
                className="font-eina font-light text-lg md:text-xl lg:text-2xl text-brand-neutral-200 drop-shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {STORY_FRAMES[currentFrame].description}
              </motion.p>
            </motion.div>
          </div>
        )}

        {/* Final CTA (visible on last frame) */}
        {imagesLoaded && currentFrame === STORY_FRAMES.length - 1 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center gap-6"
          >
            {/* Fagnus Logo Placeholder */}
            <div className="text-white font-eina font-bold text-3xl tracking-wider">
              FAGNUS
            </div>

            <button className="bg-brand-primary hover:bg-brand-primary-dark text-white font-eina font-semibold text-lg px-12 py-5 rounded-lg transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 outline-none focus:outline-none pointer-events-auto">
              Discover Your Integrated Solution
            </button>
          </motion.div>
        )}

        {/* Scroll Indicator (visible on first frame) */}
        {imagesLoaded && currentFrame === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center gap-2"
          >
            <p className="text-white font-eina text-sm uppercase tracking-wider">Scroll to explore</p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2"
            >
              <div className="w-1 h-2 bg-white rounded-full" />
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Reduced Motion Fallback */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          canvas {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}