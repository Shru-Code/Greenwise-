
import React from 'react';
import { 
  Globe, 
  Brain, 
  Calendar, 
  BookOpen, 
  Wrench, 
  Users, 
  CheckCircle, 
  Building2, 
  Leaf
} from 'lucide-react';
import { Card } from '@/components/ui/card';

interface DiagramNodeProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  targetSection: string;
  isLast?: boolean;
}

const DiagramNode: React.FC<DiagramNodeProps> = ({ icon, title, description, targetSection, isLast }) => {
  const handleClick = () => {
    const element = document.getElementById(targetSection);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col items-center w-full md:w-64">
      <Card 
        className="w-full p-4 bg-white hover:shadow-lg transition-shadow duration-300 border-greenwise-200 cursor-pointer" 
        onClick={handleClick}
      >
        <div className="flex flex-col items-center text-center">
          <div className="h-12 w-12 rounded-full bg-greenwise-100 flex items-center justify-center text-greenwise-600 mb-3">
            {icon}
          </div>
          <h3 className="font-semibold text-greenwise-800 mb-2">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </Card>
      {!isLast && (
        <div className="h-8 w-0.5 bg-greenwise-200 my-2 hidden md:block" />
      )}
      {!isLast && (
        <div className="h-0.5 w-8 bg-greenwise-200 my-2 md:hidden" />
      )}
    </div>
  );
};

const BlockDiagram = () => {
  const steps = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Website Entry",
      description: "Start your repair journey online",
      targetSection: "hero"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI Assessment",
      description: "Get instant repairability feedback",
      targetSection: "repairability"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Event Registration",
      description: "Book your repair session",
      targetSection: "events"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Educational Content",
      description: "Learn repair basics",
      targetSection: "education"
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Repair Execution",
      description: "Get expert help fixing your items",
      targetSection: "events"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community Building",
      description: "Connect with local fixers",
      targetSection: "about"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Success Tracking",
      description: "Share your repair story",
      targetSection: "feedback"
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Community Impact",
      description: "See our collective impact",
      targetSection: "about"
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Environmental Impact",
      description: "Track waste reduction",
      targetSection: "feedback",
      isLast: true
    }
  ];

  return (
    <section id="workflow" className="section-padding bg-gradient-to-b from-earth-100 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-greenwise-800 mb-6">How It Works</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Follow our simple process to give your items a second life while contributing to a more sustainable future.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <DiagramNode
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              targetSection={step.targetSection}
              isLast={step.isLast}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlockDiagram;

