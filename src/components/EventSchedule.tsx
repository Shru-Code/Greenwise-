
import React from 'react';
import { CalendarDays, Clock, MapPin } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import EventRegistration from './EventRegistration';

const events = [
  {
    id: 1,
    title: "May Repair Cafe",
    date: "May 15, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "Visakha Public Library, Beach Road",
    specialFocus: "Electronics & Small Appliances",
    registrationLink: "#",
  },
  {
    id: 2,
    title: "June Repair Cafe",
    date: "June 19, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "MVP Colony Community Hall",
    specialFocus: "Furniture & Woodworking",
    registrationLink: "#",
  },
  {
    id: 3,
    title: "July Repair Cafe",
    date: "July 17, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "Rushikonda Beach Eco Park",
    specialFocus: "Clothing & Textiles",
    registrationLink: "#",
  }
];

const EventSchedule = () => {
  return (
    <section id="events" className="section-padding bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Upcoming Events</h2>
        <p className="text-lg text-gray-700 mb-10 max-w-3xl">
          Join us at our monthly repair events in Visakhapatnam. Bring your broken items and learn how to fix them with the help of our skilled volunteers!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-3 bg-greenwise-600"></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-greenwise-800 mb-3">{event.title}</h3>
                <p className="text-sm text-greenwise-600 font-medium mb-4">
                  Special Focus: {event.specialFocus}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-700">
                    <CalendarDays className="h-5 w-5 mr-3 text-greenwise-600" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Clock className="h-5 w-5 mr-3 text-greenwise-600" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <MapPin className="h-5 w-5 mr-3 text-greenwise-600" />
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <EventRegistration eventId={event.id} eventTitle={event.title} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventSchedule;
