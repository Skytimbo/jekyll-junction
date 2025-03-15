
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Resources from '@/components/Resources';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import PageImage from '@/components/PageImage';

const Index = () => {
  // Smooth scroll implementation
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A') {
        const href = (target as HTMLAnchorElement).getAttribute('href');
        if (href && href.startsWith('#') && href.length > 1) {
          e.preventDefault();
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
            const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
          }
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased overflow-x-hidden">
      <Header />
      <main className="relative">
        {/* Home page images */}
        <div className="relative w-full">
          <PageImage pageId="home" />
        </div>
        
        <Hero />
        
        <div id="about" className="relative w-full">
          <PageImage pageId="about" />
          <About />
        </div>
        
        <div id="resources" className="relative w-full">
          <PageImage pageId="resources" />
          <Resources />
        </div>
        
        <div id="contact" className="relative w-full">
          <PageImage pageId="contact" />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
