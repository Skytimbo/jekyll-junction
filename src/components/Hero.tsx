
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import AnimatedWrapper from './AnimatedWrapper';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      const moveX = (x - 0.5) * 20;
      const moveY = (y - 0.5) * 20;
      
      const bgElement = heroRef.current.querySelector('.hero-bg') as HTMLElement;
      const contentElement = heroRef.current.querySelector('.hero-content') as HTMLElement;
      
      if (bgElement) {
        bgElement.style.transform = `translate(${moveX * -0.5}px, ${moveY * -0.5}px)`;
      }
      
      if (contentElement) {
        contentElement.style.transform = `translate(${moveX * 0.2}px, ${moveY * 0.2}px)`;
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Background Elements */}
      <div className="hero-bg absolute inset-0 w-full h-full">
        <div className="absolute top-20 right-[10%] w-64 h-64 bg-homer/10 rounded-full filter blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-20 left-[5%] w-80 h-80 bg-homer/10 rounded-full filter blur-3xl animate-pulse-soft animation-delay-1000"></div>
        <div className="absolute top-40 left-[15%] w-96 h-96 bg-blue-200/20 rounded-full filter blur-3xl animate-pulse-soft animation-delay-2000"></div>
      </div>
      
      {/* Content */}
      <div className="hero-content container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedWrapper animation="fade-up" delay={200}>
            <div className="mb-6 inline-block">
              <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-homer/10 text-homer text-sm font-medium">
                Welcome to the Community
              </span>
            </div>
          </AnimatedWrapper>
          
          <AnimatedWrapper animation="fade-up" delay={400}>
            <h1 className="mb-6 font-bold tracking-tight">
              <span className="text-gradient">Homer AI User Group</span>
              <br />Join the Conversation
            </h1>
          </AnimatedWrapper>
          
          <AnimatedWrapper animation="fade-up" delay={600}>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto text-balance">
              Connect with fellow enthusiasts, learn from experts, and explore the future of AI technology. Stay updated with the latest Homer AI developments.
            </p>
          </AnimatedWrapper>
          
          <AnimatedWrapper animation="fade-up" delay={800}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-homer hover:bg-homer-dark transition-colors"
              >
                Join Our Community
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-homer text-homer hover:bg-homer/5"
              >
                Learn More
              </Button>
            </div>
          </AnimatedWrapper>
          
          <AnimatedWrapper animation="fade-up" delay={1000}>
            <div className="mt-12 flex justify-center">
              <div className="glass px-6 py-3 rounded-full flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i}
                      className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-600"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-medium">250+</span> members already joined
                </div>
              </div>
            </div>
          </AnimatedWrapper>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-70">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
