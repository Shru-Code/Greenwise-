import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import HowItWorks from '../components/HowItWorks';
import RepairEducationCenter from '../components/RepairEducationCenter';
import FAQ from '../components/FAQ';
import Team from '../components/Team';
import Events from '../components/Events';
import Feedback from '../components/Feedback';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutUs />
      <HowItWorks />
      <RepairEducationCenter />
      <FAQ />
      <Team />
      <Events />
      <Feedback />
      <Footer />
    </div>
  );
};

export default Index;
