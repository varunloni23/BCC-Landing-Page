'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import ShinyText from './ShinyText';
import ShinyButton from './ShinyButton';

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Handle play error (e.g., user interaction required)
      });
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="max-w-4xl px-6 text-center text-white">
          <h1 className="mb-6 text-5xl font-light leading-tight md:text-6xl lg:text-7xl">
            <ShinyText 
              text="Where the next wave of" 
              disabled={false} 
              speed={3} 
              className="block" 
            />
            <span className="block font-medium text-blue-300">
              <ShinyText 
                text="ocean restoration" 
                disabled={false} 
                speed={2.5} 
                className="" 
              />
            </span>
            <ShinyText 
              text="happens with Blue Carbon" 
              disabled={false} 
              speed={3.5} 
              className="block" 
            />
          </h1>
          
          <p className="mb-8 text-lg font-light leading-relaxed text-gray-200 md:text-xl lg:text-2xl">
            Blue Carbon Credits protect and restore coastal ecosystems, 
            capturing carbon while preserving marine biodiversity for future generations.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ShinyButton 
              speed={2} 
              className="bg-white text-black hover:bg-gray-100"
              onClick={() => window.location.href = 'http://localhost:3000/login'}
            >
              Explore Blue Carbon
            </ShinyButton>
            <button className="rounded-full border border-white/30 px-8 py-4 text-lg font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/50">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white">
        <div className="flex flex-col items-center">
          <span className="text-sm font-light">Scroll to explore</span>
          <div className="mt-2 h-6 w-[1px] bg-white/50 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;