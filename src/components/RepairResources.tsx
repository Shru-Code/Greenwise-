import React from 'react';

const RepairResources = () => {
  const resources = [
    {
      id: 1,
      title: "Repair Guides",
      description: "Step-by-step guides for common repairs",
      icon: "📚",
      link: "#guides"
    },
    {
      id: 2,
      title: "Tool Library",
      description: "Access to specialized repair tools",
      icon: "🔧",
      link: "#tools"
    },
    {
      id: 3,
      title: "Community Forum",
      description: "Connect with repair enthusiasts",
      icon: "👥",
      link: "#forum"
    },
    {
      id: 4,
      title: "Repair Events",
      description: "Find local repair workshops",
      icon: "📅",
      link: "#events"
    }
  ];

  return (
    <section id="resources" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Repair Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{resource.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <a
                href={resource.link}
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RepairResources; 