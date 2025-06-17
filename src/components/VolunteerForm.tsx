import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Phone, User as UserIcon, MessageSquareText, Handshake, CheckCircle, X } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

interface VolunteerFormProps {
  onSuccess?: () => void;
}

const availableSkills = [
  "Electronics Repair", "Furniture Repair", "Textile Mending", 
  "Bicycle Repair", "Jewelry Repair", "Woodwork", "Electrical Wiring",
  "Gardening", "Event Management", "Customer Service", "Teaching", "Other"
];

const VolunteerForm: React.FC<VolunteerFormProps> = ({ onSuccess }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSkillChange = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const { error } = await supabase.from('volunteers').insert({
        full_name: fullName,
        email: email,
        phone_number: phoneNumber,
        skills: selectedSkills,
        message: message,
      });

      if (error) {
        throw error;
      }

      setSuccessMessage('Thank you for volunteering! We will be in touch soon.');
      setFullName('');
      setEmail('');
      setPhoneNumber('');
      setSelectedSkills([]);
      setMessage('');
      if (onSuccess) {
        // Optionally close modal after a short delay to show success message
        setTimeout(() => onSuccess(), 2000);
      }
    } catch (err: any) {
      console.error('Error saving volunteer data:', err);
      setError(err.message || 'Failed to submit form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full mx-auto shadow-none border-none">
      <CardHeader className="text-center pb-4">
        <div className="flex justify-center mb-3">
          <div className="p-3 bg-green-100 rounded-full">
            <Handshake className="h-6 w-6 text-green-600" />
          </div>
        </div>
        <CardTitle className="text-2xl font-bold text-greenwise-800">Volunteer with Us</CardTitle>
        <CardDescription className="text-gray-600">Join our mission to promote repair and sustainability.</CardDescription>
      </CardHeader>
      <CardContent>
        {!successMessage ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="full-name" className="text-gray-700">Full Name</Label>
              <div className="relative">
                <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="full-name"
                  type="text"
                  placeholder="Your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="pl-10 border-greenwise-200 focus:border-green-500"
                  required
                />
              </div>
            </div>
            <div className="space-y-1">
              <Label htmlFor="email" className="text-gray-700">Email ID</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="your@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 border-greenwise-200 focus:border-green-500"
                  required
                />
              </div>
            </div>
            <div className="space-y-1">
              <Label htmlFor="phone" className="text-gray-700">Phone Number</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="pl-10 border-greenwise-200 focus:border-green-500"
                />
              </div>
            </div>
            
            <div className="space-y-1">
              <Label htmlFor="skills" className="text-gray-700">Skills</Label>
              <Select onValueChange={handleSkillChange} value="">
                <SelectTrigger id="skills" className="border-greenwise-200 focus:border-green-500">
                  <SelectValue placeholder="Select skills" />
                </SelectTrigger>
                <SelectContent>
                  {availableSkills.map((skill) => (
                    <SelectItem key={skill} value={skill}>
                      {skill}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="mt-2 flex flex-wrap gap-2">
                {selectedSkills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="bg-green-100 text-green-700 hover:bg-green-200 cursor-pointer"
                    onClick={() => handleSkillChange(skill)}
                  >
                    {skill} <X className="ml-1 h-3 w-3" />
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-1">
              <Label htmlFor="message" className="text-gray-700">Message</Label>
              <Textarea 
                id="message" 
                placeholder="Tell us more about your interest in volunteering..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-[100px] border-greenwise-200 focus:border-green-500"
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white"
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Submit Application'}
            </Button>
          </form>
        ) : (
          <div className="text-center py-8 px-4">
            <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <p className="text-lg font-semibold text-greenwise-700 mb-2">{successMessage}</p>
            <p className="text-gray-600">You can now close this form.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default VolunteerForm; 