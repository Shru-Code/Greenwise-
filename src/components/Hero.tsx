import React from 'react';
import { Button } from "./ui/button";
import { Wrench, Recycle, Users, ArrowRight } from 'lucide-react';

const Hero = () => {
  const features = [
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Expert Repair",
      description: "Skilled volunteers ready to help"
    },
    {
      icon: <Recycle className="w-6 h-6" />,
      title: "Sustainable",
      description: "Reduce waste, save resources"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community",
      description: "Learn and share repair skills"
    }
  ];

  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-white via-blue-50 to-green-50 overflow-hidden pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-200 via-green-200 to-yellow-200" />
      </div>

      <div className="container mx-auto px-4 py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Repair, Reuse,{' '}
              <span className="text-gradient">Revive</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Join Visakhapatnam's repair community. Learn to fix, maintain, and extend the life of your belongings while reducing waste and saving money.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
                onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Find Repair Events
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:scale-105 transition-transform duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 text-blue-600">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
