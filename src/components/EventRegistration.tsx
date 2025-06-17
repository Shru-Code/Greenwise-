
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';

interface EventRegistrationProps {
  eventId: number;
  eventTitle: string;
}

const EventRegistration: React.FC<EventRegistrationProps> = ({ eventId, eventTitle }) => {
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleRegistration = async () => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to register for events.",
        variant: "destructive",
      });
      navigate('/auth');
      return;
    }

    setLoading(true);
    try {
      // Check if user is already registered
      const { data: existingRegistration, error: checkError } = await supabase
        .from('event_registrations')
        .select('id')
        .eq('event_id', eventId)
        .eq('user_id', user.id)
        .maybeSingle();

      if (checkError && checkError.code !== 'PGRST116') {
        throw checkError;
      }

      if (existingRegistration) {
        toast({
          title: "Already Registered",
          description: "You're already registered for this event!",
          variant: "default",
        });
        return;
      }

      // Register user for the event
      const { error } = await supabase
        .from('event_registrations')
        .insert({
          event_id: eventId,
          user_id: user.id,
          event_title: eventTitle,
        });

      if (error) {
        throw error;
      }

      toast({
        title: "Registration Successful!",
        description: `You've been registered for ${eventTitle}`,
      });

    } catch (error: any) {
      console.error('Registration error:', error);
      toast({
        title: "Registration Failed",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button 
      className="w-full bg-greenwise-600 hover:bg-greenwise-700 text-white" 
      size="sm"
      onClick={handleRegistration}
      disabled={loading}
    >
      {loading ? 'Registering...' : 'Register for Event'}
    </Button>
  );
};

export default EventRegistration;
