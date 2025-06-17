import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Recycle, HandHelping, Lightbulb, Trash2 } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are a community-driven repair initiative in Visakhapatnam, dedicated to promoting sustainability and reducing waste through repair and reuse.
          </p>
        </div>

        {/* Mission and Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Mission</h3>
            <p className="text-gray-600 mb-4">
              To create a sustainable community where repair is the first choice, not the last resort. We aim to reduce waste, save resources, and build a more environmentally conscious city.
            </p>
            <p className="text-gray-600">
              Our work aligns with the United Nations Sustainable Development Goal 12 (Responsible Consumption and Production), focusing on reducing waste through prevention, reduction, recycling, and reuse.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Vision</h3>
            <p className="text-gray-600 mb-4">
              We envision a future where repair is accessible to everyone, where skills are shared freely, and where communities work together to reduce their environmental impact.
            </p>
            <p className="text-gray-600">
              Through education and hands-on experience, we're building a culture of repair that values sustainability, resourcefulness, and community support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
