
import React from 'react';
import { Button } from '@/components/ui/button';
import { Home, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="w-full bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-xl font-semibold text-homer">
          HUG Admin
        </div>

        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex items-center gap-1" 
            onClick={() => navigate('/')}
          >
            <Home className="h-4 w-4" />
            <span>Back to Site</span>
          </Button>
          
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <LogOut className="h-4 w-4" />
            <span>Sign Out</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
