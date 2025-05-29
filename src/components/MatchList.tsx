import React from 'react';
import { Fixture } from '../types';
import MatchCard from './MatchCard';
import MatchCardSkeleton from './MatchCardSkeleton';

interface MatchListProps {
  matches: Fixture[];
  isLoading: boolean;
}

const MatchList: React.FC<MatchListProps> = ({ matches, isLoading }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <MatchCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (matches.length === 0) {
    return (
      <div className="text-center py-10">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">No matches found</h3>
        <p className="text-gray-500">Check back later for upcoming matches</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {matches.map((match) => (
        <MatchCard key={match.id} match={match} />
      ))}
    </div>
  );
};

export default MatchList;