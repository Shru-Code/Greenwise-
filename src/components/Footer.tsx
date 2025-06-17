import React from 'react';
import { Leaf } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center mb-4">
            <Leaf className="h-6 w-6 text-greenwise-400 mr-2" />
            <span className="text-xl font-heading font-bold">Greenwise Repair Cafe</span>
          </div>
          <p className="text-gray-400 mb-6 max-w-2xl">
            A community initiative promoting repair culture and sustainability in Visakhapatnam.
          </p>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Greenwise Repair Cafe, Visakhapatnam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
