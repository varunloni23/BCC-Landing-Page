'use client';

import React from 'react';
import LogoLoop from './LogoLoop';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiTypescript, 
  SiNodedotjs, 
  SiExpress, 
  SiPostgresql, 
  SiPython, 
  SiTensorflow,
  SiPolygon,
  SiIpfs,
  SiGooglemaps,
  SiAmazon
} from 'react-icons/si';

const TechStackSection = () => {
  const techLogos = [
    { node: <SiReact className="text-blue-500 text-6xl" />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs className="text-black text-6xl" />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTailwindcss className="text-cyan-500 text-6xl" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiTypescript className="text-blue-600 text-6xl" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiNodedotjs className="text-green-600 text-6xl" />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiExpress className="text-gray-700 text-6xl" />, title: "Express.js", href: "https://expressjs.com" },
    { node: <SiPostgresql className="text-blue-700 text-6xl" />, title: "PostgreSQL", href: "https://postgresql.org" },
    { node: <SiPython className="text-yellow-500 text-6xl" />, title: "Python", href: "https://python.org" },
    { node: <SiTensorflow className="text-orange-500 text-6xl" />, title: "TensorFlow", href: "https://tensorflow.org" },
    { node: <SiPolygon className="text-purple-600 text-6xl" />, title: "Polygon", href: "https://polygon.technology" },
    { node: <SiIpfs className="text-teal-500 text-6xl" />, title: "IPFS", href: "https://ipfs.tech" },
    { node: <SiGooglemaps className="text-green-500 text-6xl" />, title: "Google Maps API", href: "https://developers.google.com/maps" },
    { node: <SiAmazon className="text-orange-400 text-6xl" />, title: "AWS", href: "https://aws.amazon.com" },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light mb-6 text-gray-900">
            Powered by Cutting-Edge Technology
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our platform leverages the latest technologies in blockchain, AI, and cloud computing 
            to deliver secure, transparent, and scalable blue carbon credit solutions.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm -mx-8">
          <div style={{ height: '140px', position: 'relative', overflow: 'hidden' }}>
            <LogoLoop
              logos={techLogos}
              speed={15}
              direction="left"
              logoHeight={120}
              gap={80}
              pauseOnHover
              scaleOnHover
              fadeOut
              ariaLabel="Technology stack partners"
            />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔗</span>
            </div>
            <h3 className="text-xl font-medium mb-2 text-gray-900">Blockchain Infrastructure</h3>
            <p className="text-gray-600">
              Built on Polygon network with IPFS storage for transparent, immutable carbon credit records.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤖</span>
            </div>
            <h3 className="text-xl font-medium mb-2 text-gray-900">AI-Powered Analysis</h3>
            <p className="text-gray-600">
              Machine learning models powered by TensorFlow analyze satellite data for accurate carbon estimations.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">☁️</span>
            </div>
            <h3 className="text-xl font-medium mb-2 text-gray-900">Cloud-Native Platform</h3>
            <p className="text-gray-600">
              Scalable infrastructure on AWS with real-time data processing and global accessibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;