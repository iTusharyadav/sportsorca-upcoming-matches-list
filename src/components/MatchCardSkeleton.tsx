import React from 'react';

const MatchCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-l-gray-200">
      <div className="p-4 animate-pulse">
        <div className="flex justify-between items-center mb-4">
          <div className="h-4 bg-gray-200 rounded w-1/3"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        </div>
        
        <div className="flex justify-between items-center">
          {/* Home Team */}
          <div className="flex flex-col items-center w-2/5">
            <div className="h-16 w-16 bg-gray-200 rounded-full"></div>
            <div className="h-4 bg-gray-200 rounded w-4/5 mt-2"></div>
          </div>
          
          {/* VS */}
          <div className="flex flex-col items-center w-1/5">
            <div className="bg-gray-200 rounded-full h-10 w-10"></div>
          </div>
          
          {/* Away Team */}
          <div className="flex flex-col items-center w-2/5">
            <div className="h-16 w-16 bg-gray-200 rounded-full"></div>
            <div className="h-4 bg-gray-200 rounded w-4/5 mt-2"></div>
          </div>
        </div>
        
        <div className="mt-4 pt-3 border-t border-gray-100 flex justify-center">
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default MatchCardSkeleton;