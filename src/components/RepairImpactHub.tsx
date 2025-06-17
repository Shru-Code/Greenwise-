import React, { useState } from 'react';

const RepairImpactHub = () => {
  const [activeTab, setActiveTab] = useState('environmental');

  const impactData = {
    environmental: {
      title: "Environmental Impact",
      stats: [
        { value: "2.5K", label: "Items Repaired", icon: "🛠️" },
        { value: "1.2K", label: "CO₂ Saved (kg)", icon: "🌱" },
        { value: "850", label: "Waste Diverted (kg)", icon: "♻️" }
      ],
      description: "Our repair initiatives have significantly reduced electronic waste and carbon emissions in the community."
    },
    social: {
      title: "Social Impact",
      stats: [
        { value: "500+", label: "People Trained", icon: "👥" },
        { value: "15", label: "Communities Served", icon: "🏘️" },
        { value: "95%", label: "Satisfaction Rate", icon: "⭐" }
      ],
      description: "Empowering communities through repair education and skill development."
    },
    economic: {
      title: "Economic Impact",
      stats: [
        { value: "₹2.5L", label: "Money Saved", icon: "💰" },
        { value: "200+", label: "Jobs Created", icon: "💼" },
        { value: "45", label: "Local Partners", icon: "🤝" }
      ],
      description: "Creating sustainable economic opportunities through repair initiatives."
    }
  };

  return (
    <section id="impact" className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Repair Impact Hub</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover how our repair initiatives are making a real difference in our community
        </p>

        {/* Impact Tabs */}
        <div className="flex justify-center mb-8">
          {Object.keys(impactData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 mx-2 rounded-full transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-blue-50'
              }`}
            >
              {impactData[tab].title}
            </button>
          ))}
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {impactData[activeTab].stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Impact Description */}
        <div className="bg-white rounded-xl p-8 shadow-lg max-w-3xl mx-auto">
          <p className="text-gray-700 text-lg text-center">
            {impactData[activeTab].description}
          </p>
        </div>

        {/* Interactive Timeline */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-center mb-8">Our Journey</h3>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            <div className="space-y-8">
              {[
                { year: "2023", event: "Launched Repair Education Program" },
                { year: "2024", event: "Expanded to 15 Communities" },
                { year: "2025", event: "Aiming for 100% Repair Literacy" }
              ].map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className="w-1/2 p-4">
                    <div className="bg-white rounded-lg p-4 shadow-md">
                      <div className="text-blue-600 font-bold">{milestone.year}</div>
                      <div className="text-gray-700">{milestone.event}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RepairImpactHub; 