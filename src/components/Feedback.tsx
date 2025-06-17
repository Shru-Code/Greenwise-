import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { MessageSquare, Star } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const Feedback = () => {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !rating || !comments) return;
    
    setLoading(true);
    
    try {
      const { error } = await supabase
        .from('feedback')
        .insert({
          name,
          email,
          rating,
          comments,
        });

      if (error) {
        throw error;
      }

      toast({
        title: "Feedback submitted!",
        description: "Thank you for sharing your experience with us.",
      });
      
      // Reset form
      setName('');
      setEmail('');
      setRating(0);
      setComments('');
    } catch (error: any) {
      console.error('Error submitting feedback:', error);
      toast({
        title: "Error",
        description: "Failed to submit feedback. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="feedback" className="section-padding bg-gradient-to-b from-background to-surface">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
            <MessageSquare className="h-6 w-6 text-primary" />
          </div>
          <h2 className="heading-2 text-gradient">Share Your Experience</h2>
          <p className="text-neutral-light max-w-2xl mx-auto mt-4">
            Have you attended one of our repair events? We'd love to hear about your experience!
            Your feedback helps us improve our service and inspire others to join the repair movement.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="bg-primary/5 border-b">
              <CardTitle className="flex items-center justify-center">
                <MessageSquare className="h-5 w-5 mr-2 text-primary" />
                Event Feedback Form
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input 
                      id="name" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Label>How would you rate your experience?</Label>
                  <div className="flex justify-center space-x-2">
                    {[1, 2, 3, 4, 5].map((value) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setRating(value)}
                        className="focus:outline-none"
                      >
                        <Star
                          className={`h-8 w-8 transition-colors ${
                            value <= rating
                              ? 'fill-primary text-primary'
                              : 'text-gray-300 hover:text-primary/50'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="comments">Tell us about your experience</Label>
                  <Textarea 
                    id="comments" 
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    placeholder="What did you like? What could we improve? Did you successfully repair your item?" 
                    className="min-h-[150px]"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={loading || !name || !email || !rating || !comments}
                >
                  {loading ? "Submitting..." : "Submit Feedback"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
