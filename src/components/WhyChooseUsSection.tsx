import React from 'react';

const WhyChooseUsSection = () => {
  const problems = [
    {
      icon: "🚫",
      title: "Fake Carbon Credits",
      description: "Many companies sell credits from non-existent or already-destroyed forests, with no real environmental impact.",
      solution: "Blockchain verification ensures every credit represents real, measured carbon sequestration."
    },
    {
      icon: "💰",
      title: "Unfair Community Compensation",
      description: "Local communities and NGOs receive as little as 5-10% of carbon credit sales, while middlemen take most profits.",
      solution: "Direct blockchain payments ensure communities receive 60-70% of credit value immediately."
    },
    {
      icon: "🕵️",
      title: "Fake Agents & Brokers",
      description: "Fraudulent intermediaries sell worthless certificates or take payments without delivering any credits.",
      solution: "Smart contracts eliminate middlemen - transactions are direct and automatically executed."
    },
    {
      icon: "📄",
      title: "Double-Counting & Reselling",
      description: "Same carbon credits sold multiple times to different buyers, inflating supply without real impact.",
      solution: "Each ERC-1155 token is unique and traceable, preventing duplicate sales."
    },
    {
      icon: "🔍",
      title: "Lack of Transparency",
      description: "No way to verify if projects actually exist, are properly maintained, or have real environmental impact.",
      solution: "Live satellite monitoring, GPS verification, and public blockchain records for complete transparency."
    },
    {
      icon: "⏰",
      title: "Delayed or No Payments",
      description: "Communities wait months or years for payments, or never receive compensation despite selling credits.",
      solution: "Instant blockchain payments upon verification - no delays, no excuses."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light mb-6 text-gray-900">
            Why Choose Our Platform?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            The carbon credit industry is plagued with fraud, exploitation, and fake promises. 
            We&#39;re using blockchain technology to solve these critical problems.
          </p>
          <div className="bg-red-100 border border-red-200 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-red-800 font-medium">
              ⚠️ Did you know? Studies show that up to 85% of carbon offset projects fail to deliver promised climate benefits.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">{problem.icon}</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">{problem.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{problem.description}</p>
                </div>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-start space-x-2">
                  <span className="text-green-600 font-bold text-sm mt-0.5">✓ Our Solution:</span>
                  <p className="text-green-800 text-sm leading-relaxed">{problem.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-light mb-4 text-gray-900">
                The Traditional System is Broken
              </h3>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-center space-x-3">
                  <span className="text-red-500 font-bold">✗</span>
                  <span>Complex intermediary chains taking 80-90% of profits</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-red-500 font-bold">✗</span>
                  <span>No real-time verification of ecosystem health</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-red-500 font-bold">✗</span>
                  <span>Phantom projects that exist only on paper</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-red-500 font-bold">✗</span>
                  <span>Communities exploited by unscrupulous brokers</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-light mb-4 text-gray-900">
                Our Blockchain Solution
              </h3>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-center space-x-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Direct payments to communities via smart contracts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Live satellite and drone monitoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Every project GPS-verified and photographed</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>100% transparent, publicly verifiable records</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;