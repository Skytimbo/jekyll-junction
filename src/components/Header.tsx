import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Shield } from 'lucide-react';

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
          href="/" 
          className="text-xl font-semibold text-homer"
        >
          HUG
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a 
            href="/" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </a>
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
            className="hidden md:inline-flex gap-1"
            onClick={() => window.location.href = '/admin'}
          >
            <Shield className="h-4 w-4" />
            <span>Admin</span>
          </Button>
          
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] sm:w-[300px]">
              <nav className="flex flex-col gap-4 mt-8">
                <a 
                  href="/" 
                  className="text-base font-medium text-foreground px-2 py-2 rounded-md hover:bg-muted transition-colors"
                >
                  Home
                </a>
                <a 
                  href="#about" 
                  className="text-base font-medium text-foreground px-2 py-2 rounded-md hover:bg-muted transition-colors"
                >
                  About
                </a>
                <a 
                  href="#resources" 
                  className="text-base font-medium text-foreground px-2 py-2 rounded-md hover:bg-muted transition-colors"
                >
                  Resources
                </a>
                <a 
                  href="#contact" 
                  className="text-base font-medium text-foreground px-2 py-2 rounded-md hover:bg-muted transition-colors"
                >
                  Contact
                </a>
                <div className="border-t my-4"></div>
                <a 
                  href="/admin" 
                  className="text-base font-medium text-foreground px-2 py-2 rounded-md hover:bg-muted transition-colors flex items-center gap-2"
                >
                  <Shield className="h-4 w-4" />
                  <span>Admin</span>
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
