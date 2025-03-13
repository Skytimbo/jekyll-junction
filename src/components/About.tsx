
import React from 'react';
import AnimatedWrapper from './AnimatedWrapper';
import { Separator } from '@/components/ui/separator';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-gray-50">
      {/* Background decoration */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-homer/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <AnimatedWrapper animation="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient">About</span> Our Group
              </h2>
              
              <p className="text-muted-foreground mb-6">
                The Homer AI User Group is a community of enthusiasts, professionals, and curious minds united by our interest in artificial intelligence and its applications through Homer AI.
              </p>
              
              <p className="text-muted-foreground mb-6">
                Founded in 2023, our group aims to create a collaborative space where members can share knowledge, explore new AI concepts, and build meaningful connections with others in the field.
              </p>
              
              <div className="space-y-4 mt-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-homer/10 flex items-center justify-center text-homer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Community Driven</h4>
                    <p className="text-sm text-muted-foreground">Built by and for AI enthusiasts</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-homer/10 flex items-center justify-center text-homer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Knowledge Sharing</h4>
                    <p className="text-sm text-muted-foreground">Learning resources and workshops</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-homer/10 flex items-center justify-center text-homer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Innovation Focus</h4>
                    <p className="text-sm text-muted-foreground">Pushing the boundaries of AI</p>
                  </div>
                </div>
              </div>
            </AnimatedWrapper>
          </div>
          
          <AnimatedWrapper animation="fade-up" delay={300}>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                  alt="User Group Meeting" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 glass p-6 rounded-xl max-w-xs shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-homer flex items-center justify-center text-white font-bold">
                    H
                  </div>
                  <div>
                    <h4 className="font-medium">Monthly Meetings</h4>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Join our regular meetups to discuss the latest in AI technology and Homer platform developments.
                </p>
              </div>
            </div>
          </AnimatedWrapper>
        </div>
        
        <div className="mt-24">
          <Separator className="my-8" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <AnimatedWrapper delay={100}>
              <div className="space-y-2">
                <p className="text-4xl font-bold text-homer">250+</p>
                <p className="text-sm text-muted-foreground">Active Members</p>
              </div>
            </AnimatedWrapper>
            
            <AnimatedWrapper delay={300}>
              <div className="space-y-2">
                <p className="text-4xl font-bold text-homer">48</p>
                <p className="text-sm text-muted-foreground">Events Hosted</p>
              </div>
            </AnimatedWrapper>
            
            <AnimatedWrapper delay={500}>
              <div className="space-y-2">
                <p className="text-4xl font-bold text-homer">12</p>
                <p className="text-sm text-muted-foreground">Cities Worldwide</p>
              </div>
            </AnimatedWrapper>
            
            <AnimatedWrapper delay={700}>
              <div className="space-y-2">
                <p className="text-4xl font-bold text-homer">95%</p>
                <p className="text-sm text-muted-foreground">Member Satisfaction</p>
              </div>
            </AnimatedWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
