import React from 'react';

const EcosystemsSection = () => {
  const ecosystems = [
    {
      title: "Mangrove Forests",
      description: "Tropical coastal forests that store carbon in both biomass and deep soil layers",
      image: "🌿",
      stats: "Store 3-4x more carbon per hectare than terrestrial forests"
    },
    {
      title: "Salt Marshes",
      description: "Tidal wetlands that capture carbon through rapid plant growth and sediment accumulation",
      image: "🌾",
      stats: "Can sequester carbon for thousands of years"
    },
    {
      title: "Seagrass Meadows",
      description: "Underwater flowering plants that create extensive root systems storing carbon",
      image: "🌱",
      stats: "Cover <1% of ocean floor but store 10% of marine carbon"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light mb-6 text-gray-900">
            Blue Carbon Ecosystems
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            These remarkable coastal habitats are nature&#39;s most efficient carbon storage systems, 
            protecting our climate while supporting incredible biodiversity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ecosystems.map((ecosystem, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">{ecosystem.image}</div>
              <h3 className="text-xl font-medium mb-4 text-gray-900">{ecosystem.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{ecosystem.description}</p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm font-medium text-blue-800">{ecosystem.stats.replace("<", "&lt;")}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemsSection;