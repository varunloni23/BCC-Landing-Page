import React from 'react';

const CTASection = () => {
  const teamMembers = [
    "Varun Loni",
    "Raza Shaikh", 
    "Jauwwad Nallamandu",
    "Vaishnavi Kulkarni",
    "Shreya Habib",
    "Preeti Jadhav"
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-4xl mx-auto">
        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light mb-6 text-gray-900">
            Meet Our Team
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
            <h3 className="text-2xl font-medium mb-4 text-blue-600">
              CODERUSH XP
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              We are a passionate team of developers and blockchain enthusiasts committed to 
              revolutionizing the carbon credit industry through transparent, verifiable, and 
              community-focused solutions.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-medium text-gray-900">{member}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Contact Information</h4>
              <p className="text-gray-600">
                <span className="font-medium">Email:</span>{' '}
                <a href="mailto:coderushxp@gmail.com" className="text-blue-600 hover:text-blue-700 transition-colors">
                  coderushxp@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;