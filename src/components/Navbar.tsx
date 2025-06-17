import React, { useState } from 'react';
import { Button } from "./ui/button";
import { Menu, X, Leaf, Wrench, Info, MessageSquare, Calendar, BookOpen, Lightbulb, HeartHandshake, Sparkles } from 'lucide-react';
import AuthButton from './AuthButton';
import Modal from './Modal';
import VolunteerForm from './VolunteerForm';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openVolunteerModal = () => {
    setIsVolunteerModalOpen(true);
    setIsMenuOpen(false); // Close mobile menu if open
  };

  const closeVolunteerModal = () => {
    setIsVolunteerModalOpen(false);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'events', label: 'Events', icon: <Calendar className="h-4 w-4 mr-2" /> },
    { id: 'education', label: 'Education', icon: <BookOpen className="h-4 w-4 mr-2" /> },
    { id: 'how-it-works', label: 'How It Works', icon: <Lightbulb className="h-4 w-4 mr-2" /> },
    { id: 'about', label: 'About Us', icon: <Info className="h-4 w-4 mr-2" /> },
    { id: 'faq', label: 'FAQ', icon: <MessageSquare className="h-4 w-4 mr-2" /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <Leaf className="h-8 w-8 text-green-600 transition-transform duration-300 group-hover:rotate-12" />
                <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-blue-600 rounded-full"></div>
              </div>
              <span className="text-xl font-bold text-gradient">Repair Wise</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button 
                key={item.id}
                variant="ghost" 
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4"
                onClick={() => scrollToSection(item.id)}
              >
                {item.icon}
                {item.label}
              </Button>
            ))}
            <Link to="/repairability">
              <Button
                variant="ghost"
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4"
              >
                <Sparkles className="h-4 w-4 mr-2" />
                AI Checker
              </Button>
            </Link>
            <Button 
              onClick={openVolunteerModal}
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-50"
            >
              <HeartHandshake className="h-4 w-4 mr-2" />
              Volunteer
            </Button>
            <AuthButton />
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Button 
                key={item.id}
                variant="ghost" 
                className="w-full justify-start text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                onClick={() => scrollToSection(item.id)}
              >
                {item.icon}
                {item.label}
              </Button>
            ))}
            <Link to="/repairability">
              <Button
                variant="ghost"
                className="w-full justify-start text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              >
                <Sparkles className="h-4 w-4 mr-2" />
                AI Checker
              </Button>
            </Link>
            <Button 
              onClick={openVolunteerModal}
              variant="outline"
              className="w-full justify-start border-green-600 text-green-600 hover:bg-green-50"
            >
              <HeartHandshake className="h-4 w-4 mr-2" />
              Volunteer
            </Button>
            <div className="pt-2">
              <AuthButton />
            </div>
          </div>
        </div>
      )}
      <Modal isOpen={isVolunteerModalOpen} onClose={closeVolunteerModal} title="Become a Volunteer">
        <VolunteerForm onSuccess={closeVolunteerModal} />
      </Modal>
    </nav>
  );
};

export default Navbar;
