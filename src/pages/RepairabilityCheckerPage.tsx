import React from 'react';
import RepairabilityChecker from '@/components/RepairabilityChecker';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const RepairabilityCheckerPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <RepairabilityChecker />
      </main>
      <Footer />
    </div>
  );
};

export default RepairabilityCheckerPage; 