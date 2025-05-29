import React from 'react';
import { Percent as Football } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-emerald-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Football size={32} className="mr-3" />
          <div>
            <h1 className="text-2xl font-bold">SportsOrca</h1>
            <p className="text-emerald-200 text-sm">Upcoming Matches List</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;