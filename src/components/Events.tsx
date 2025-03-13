
import React from 'react';
import AnimatedWrapper from './AnimatedWrapper';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Homer AI Workshop: Getting Started",
      date: "June 15, 2024",
      location: "San Francisco, CA",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      category: "Workshop",
      isVirtual: false
    },
    {
      id: 2,
      title: "AI Ethics and Responsible Implementation",
      date: "July 3, 2024",
      location: "Virtual Event",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      category: "Webinar",
      isVirtual: true
    },
    {
      id: 3,
      title: "Homer AI User Conference 2024",
      date: "August 22-23, 2024",
      location: "New York, NY",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      category: "Conference",
      isVirtual: false
    }
  ];

  return (
    <section id="events" className="py-24 relative overflow-hidden bg-gray-50">
      {/* Background decoration */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-homer/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedWrapper>
            <div className="mb-4 inline-block">
              <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-homer/10 text-homer text-sm font-medium">
                Mark Your Calendar
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient">Upcoming</span> Events
            </h2>
            
            <p className="text-muted-foreground text-lg">
              Join us at our upcoming events to learn, connect, and grow with the Homer AI community.
            </p>
          </AnimatedWrapper>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <AnimatedWrapper key={event.id} animation="fade-up" delay={index * 150}>
              <div className="event-card h-full rounded-2xl overflow-hidden">
                <div className="relative h-60">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <Badge variant="secondary" className={`${event.isVirtual ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                      {event.category}
                    </Badge>
                  </div>
                </div>
                <div className="relative z-20 bg-white p-6">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <div className="flex items-center text-muted-foreground text-sm mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    {event.date}
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    {event.location}
                  </div>
                  <Button 
                    className="w-full bg-homer hover:bg-homer-dark transition-colors"
                  >
                    Register Now
                  </Button>
                </div>
              </div>
            </AnimatedWrapper>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <AnimatedWrapper>
            <Button 
              variant="outline"
              size="lg" 
              className="border-homer text-homer hover:bg-homer/5"
            >
              View All Events
            </Button>
          </AnimatedWrapper>
        </div>
      </div>
    </section>
  );
};

export default Events;
