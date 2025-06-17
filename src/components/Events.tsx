import React, { useState } from 'react';
import workshopImage from './workshop.jpg';
import communityImage from './community.jpg';
import symposiumImage from './symposium.jpg';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import Modal from './Modal';
import SignInForm from './SignInForm';
import { useToast } from '@/hooks/use-toast';

const Events = () => {
  const { user } = useAuth();
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const { toast } = useToast();
  const [loadingEventId, setLoadingEventId] = useState<number | null>(null);

  const events = [
    {
      id: 1,
      title: "Repair Workshop 2024",
      date: "June 15, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Community Center, Vizag",
      image: workshopImage,
      description: "A hands-on workshop teaching basic repair skills",
      attendees: "25 spots available"
    },
    {
      id: 2,
      title: "Community Repair Day",
      date: "October 18,2025",
      time: "9:00 AM - 6:00 PM",
      location: "City Hall, Vizag",
      image: communityImage,
      description: "Bring your broken items for free repair assistance",
      attendees: "Open to all"
    },
    {
      id: 3,
      title: "Tech Repair Event",
      date: " August 20, 2024",
      time: "11:00 AM - 3:00 PM",
      location: "Tech Hub, Vizag",
      image: symposiumImage,
      description: "Expert talks on sustainable technology repair",
      attendees: "50 spots available"
    }
  ];

  const openSignInModal = () => setIsSignInModalOpen(true);
  const closeSignInModal = () => setIsSignInModalOpen(false);

  const handleSignInSuccess = () => {
    closeSignInModal();
    toast({
      title: "Signed In Successfully",
      description: "You are now signed in. Please click Register Now again to complete registration.",
      variant: "default",
    });
  };

  const handleRegister = async (eventId: number, eventTitle: string, eventDate: string, eventTime: string, eventLocation: string) => {
    if (!user) {
      toast({
        title: "Sign In Required",
        description: "Please sign in to register for this event.",
        variant: "destructive",
      });
      openSignInModal();
      return;
    }

    setLoadingEventId(eventId);

    try {
      const { error } = await supabase.from('event_registrations').insert({
        user_id: user.id,
        event_id: eventId,
        event_title: eventTitle,
        event_date: eventDate,
      });

      if (error) {
        console.error('Supabase insert error:', error);
        throw error;
      }

      toast({
        title: "Registration Successful!",
        description: `You are successfully registered for ${eventTitle} on ${eventDate} at ${eventTime} (${eventLocation}). We look forward to seeing you!`, 
        variant: "default",
      });
    } catch (err: any) {
      console.error('Error registering for event:', err);
      toast({
        title: "Registration Failed",
        description: err.message || 'Failed to register. Please try again.',
        variant: "destructive",
      });
    } finally {
      setLoadingEventId(null);
    }
  };

  return (
    <section id="events" className="section-padding bg-gradient-to-b from-background to-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
            <Calendar className="h-6 w-6 text-primary" />
          </div>
          <h2 className="heading-2 text-gradient">Upcoming Events</h2>
          <p className="text-neutral-light max-w-2xl mx-auto mt-4">
            Join our community events to learn repair skills, get your items fixed, and contribute to a more sustainable future.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="card group">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img
                  src={event.image}
                  alt={event.title}
                  className={`w-full h-full transition-transform duration-300 group-hover:scale-105 ${
                    event.id === 2 ? 'object-contain' : 'object-cover'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold text-white mb-1">{event.title}</h3>
                  <div className="flex items-center text-white/90 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {event.date}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center text-neutral-light">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-neutral-light">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center text-neutral-light">
                    <Users className="h-4 w-4 mr-2" />
                    <span className="text-sm">{event.attendees}</span>
                  </div>
                </div>
                <p className="mt-4 text-neutral">{event.description}</p>
                <div className="mt-6">
                  <Button
                    onClick={() => handleRegister(event.id, event.title, event.date, event.time, event.location)}
                    className="w-full py-2 px-4"
                    disabled={loadingEventId === event.id}
                  >
                    {loadingEventId === event.id ? 'Registering...' : 'Register Now'}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal isOpen={isSignInModalOpen} onClose={closeSignInModal} title="Sign In to Register">
        <SignInForm onSignInSuccess={handleSignInSuccess} />
      </Modal>
    </section>
  );
};

export default Events;