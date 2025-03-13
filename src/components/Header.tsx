
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out py-4',
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a 
          href="#" 
          className="flex items-center gap-2 text-xl font-semibold text-foreground"
        >
          <div className="w-10 h-10 rounded-lg bg-homer flex items-center justify-center">
            <span className="text-white font-bold">H</span>
          </div>
          <span>Homer AI User Group</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a 
            href="#about" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </a>
          <a 
            href="#resources" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Resources
          </a>
          <a 
            href="#contact" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </nav>
        
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            className="hidden md:inline-flex"
          >
            Sign In
          </Button>
          <Button 
            size="sm"
            className="bg-homer hover:bg-homer-dark transition-colors"
          >
            Join Group
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
