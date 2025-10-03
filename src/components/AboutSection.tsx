import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-light mb-6 text-gray-900">
              What is Blue Carbon?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Blue carbon refers to carbon dioxide captured and stored by coastal and marine ecosystems. 
              These vital habitats - including mangroves, salt marshes, and seagrass meadows - are among 
              the most effective carbon sinks on Earth.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              When protected or restored, these ecosystems can sequester carbon at rates up to 10 times 
              higher than terrestrial forests, making them critical allies in the fight against climate change.
            </p>
          </div>
          <div className="bg-blue-50 p-8 rounded-2xl">
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">🌊</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Ocean Protection</h3>
                  <p className="text-gray-600">Preserving marine biodiversity</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Carbon Sequestration</h3>
                  <p className="text-gray-600">Capturing CO2 from the atmosphere</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">🏝️</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Coastal Resilience</h3>
                  <p className="text-gray-600">Natural protection from storms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;