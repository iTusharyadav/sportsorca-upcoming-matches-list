import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} SportsOrca App
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Match data provided by API-Football
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;