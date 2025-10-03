import React from 'react';

const ProcessSection = () => {
  const processSteps = [
    {
      step: 1,
      icon: "🌱",
      title: "Field Researchers / Local Communities Collect Data",
      description: "Soil samples, photos, GPS location of mangroves, seagrass, or marsh area"
    },
    {
      step: 2,
      icon: "🚁",
      title: "Drones and Satellites Map the Area",
      description: "Captures images to analyze ecosystem health automatically (e.g., mangrove density, seagrass condition)"
    },
    {
      step: 3,
      icon: "🤖",
      title: "AI/ML Models Process Data",
      description: "Analyze images + soil samples + GPS data → Estimate how much carbon is stored naturally"
    },
    {
      step: 4,
      icon: "📸",
      title: "Upload Proof + Data to System",
      description: "Researchers / Communities upload photos, documents, GPS coordinates, and AI-calculated carbon data"
    },
    {
      step: 5,
      icon: "✅",
      title: "Verifier (Expert) Approves Data",
      description: "Checks accuracy of uploaded data and AI estimations → Approves project"
    },
    {
      step: 6,
      icon: "🏷️",
      title: "Blockchain Stores Data Permanently",
      description: "All project details, proofs, and CO₂ estimations are recorded immutably on Polygon Blockchain → Tamper-proof record"
    },
    {
      step: 7,
      icon: "🌍",
      title: "Digital Carbon Credit Tokens Issued",
      description: "ERC-1155 tokens represent verified carbon credits based on the stored data"
    },
    {
      step: 8,
      icon: "📊",
      title: "Interactive Map Displays Verified Projects",
      description: "Companies and individuals can view projects and their verified carbon impact visually"
    },
    {
      step: 9,
      icon: "💸",
      title: "Buyers Purchase Carbon Credits",
      description: "Companies aiming to offset emissions can purchase carbon credit tokens"
    },
    {
      step: 10,
      icon: "🔐",
      title: "Every Credit and Transaction Verifiable on Blockchain",
      description: "Full transparency → Every token issuance and purchase is publicly verifiable on Polygon Explorer"
    },
    {
      step: 11,
      icon: "🌱",
      title: "Local Communities Receive Rewards",
      description: "Verified credits → Monetary incentives paid to communities directly, helping them further protect ecosystems"
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light mb-6 text-gray-900">
            Our Transparent Process
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From field research to blockchain verification, every step in our process ensures 
            authentic, verifiable, and impactful blue carbon credits that truly benefit local communities.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-600 h-full"></div>

          {/* Timeline Steps */}
          <div className="space-y-12">
            {processSteps.map((step, index) => {
              const isLeft = step.step % 2 === 1;
              
              return (
                <div key={index} className="relative flex items-center justify-center">
                  {/* Step Number Circle (Center) */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                      <span className="font-bold text-lg">{step.step}</span>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-5/12 ${isLeft ? 'pr-16' : 'pl-16'}`}>
                      <div className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 ${isLeft ? 'text-right' : 'text-left'}`}>
                        <div className={`flex items-center ${isLeft ? 'justify-end' : 'justify-start'} mb-4`}>
                          <div className={`w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center ${isLeft ? 'ml-4' : 'mr-4'}`}>
                            <span className="text-2xl">{step.icon}</span>
                          </div>
                          {isLeft && (
                            <h3 className="font-medium text-gray-900 text-lg leading-tight">
                              {step.title}
                            </h3>
                          )}
                          {!isLeft && (
                            <h3 className="font-medium text-gray-900 text-lg leading-tight">
                              {step.title}
                            </h3>
                          )}
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                        
                        {/* Connection Line to Center */}
                        <div className={`absolute top-1/2 transform -translate-y-1/2 ${isLeft ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'} w-16 h-[2px] bg-blue-300`}>
                          <div className={`absolute ${isLeft ? 'right-0' : 'left-0'} top-1/2 transform -translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full`}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-light mb-4 text-gray-900">
              Powered by Blockchain Technology
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our process leverages Polygon blockchain for maximum transparency, ensuring every carbon credit 
              is authentic, traceable, and permanently verifiable. No more fake credits or hidden middlemen.
            </p>
            <div className="flex justify-center space-x-6 text-sm">
              <div className="bg-white px-4 py-2 rounded-full shadow-sm">
                <span className="font-medium text-gray-900">Polygon Network</span>
              </div>
              <div className="bg-white px-4 py-2 rounded-full shadow-sm">
                <span className="font-medium text-gray-900">ERC-1155 Tokens</span>
              </div>
              <div className="bg-white px-4 py-2 rounded-full shadow-sm">
                <span className="font-medium text-gray-900">100% Transparent</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;