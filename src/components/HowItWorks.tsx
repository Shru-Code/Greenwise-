import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Bring Your Item",
      description: "Bring your broken item to our repair cafe during our scheduled sessions. Make sure it's something you can carry yourself.",
      icon: "📦"
    },
    {
      number: "02",
      title: "Check-in & Assessment",
      description: "Our team will assess your item and match you with the right repair expert. We'll explain what can be done and what parts might be needed.",
      icon: "📋"
    },
    {
      number: "03",
      title: "Learn & Repair",
      description: "Watch and learn as our repair experts fix your item. They'll explain the process and teach you basic repair skills for future use.",
      icon: "🔧"
    },
    {
      number: "04",
      title: "Test & Verify",
      description: "We'll test the repaired item to ensure it works properly. You'll get tips on maintenance and care to prevent future issues.",
      icon: "✅"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">How It Works</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Our simple four-step process makes repair easy and educational
        </p>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group h-full"
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-200 transform -translate-y-1/2 group-hover:bg-blue-400 transition-colors duration-300" />
                )}

                <div className="bg-white rounded-xl shadow-lg p-8 h-full flex flex-col transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:bg-blue-50">
                  {/* Number Badge */}
                  <div className="absolute -top-4 -left-4 w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg transform group-hover:scale-110 transition-transform duration-300 z-10">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="mt-6 flex-grow">
                    <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{step.icon}</div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 rounded-xl border-2 border-blue-200 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-[1.02] pointer-events-none" />
                </div>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-16 bg-white rounded-xl p-8 shadow-lg transform transition-all duration-300 hover:shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="bg-blue-50 rounded-xl p-6 transform transition-all duration-300 hover:shadow-md">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">What to Bring</h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-600 transform transition-all duration-300 hover:translate-x-2">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    Your broken item
                  </li>
                  <li className="flex items-center text-gray-600 transform transition-all duration-300 hover:translate-x-2">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    Any relevant accessories
                  </li>
                  <li className="flex items-center text-gray-600 transform transition-all duration-300 hover:translate-x-2">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    Basic information about the issue
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-xl p-6 transform transition-all duration-300 hover:shadow-md">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Important Notes</h3>
                <ul className="space-y-4">
                  <li className="flex items-start text-gray-600 transform transition-all duration-300 hover:translate-x-2">
                    <span className="text-blue-500 mr-3 text-xl">•</span>
                    <span>Repairs are free, but donations are welcome</span>
                  </li>
                  <li className="flex items-start text-gray-600 transform transition-all duration-300 hover:translate-x-2">
                    <span className="text-blue-500 mr-3 text-xl">•</span>
                    <span>Some items may need replacement parts (we'll guide you)</span>
                  </li>
                  <li className="flex items-start text-gray-600 transform transition-all duration-300 hover:translate-x-2">
                    <span className="text-blue-500 mr-3 text-xl">•</span>
                    <span>Not all items can be repaired - we'll be honest about this</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 