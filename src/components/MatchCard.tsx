import React from 'react';
import { Fixture } from '../types';
import { formatMatchDate } from '../utils/formatDate';
import { Calendar, MapPin } from 'lucide-react';

interface MatchCardProps {
  match: Fixture;
}

const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border-l-4 border-l-emerald-700">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar size={16} className="mr-1" />
            <span>{formatMatchDate(match.date)}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <MapPin size={16} className="mr-1" />
            <span>{match.venue.name}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          {/* Home Team */}
          <div className="flex flex-col items-center w-2/5">
            <div className="h-16 w-16 flex items-center justify-center">
              <img 
                src={match.teams.home.logo} 
                alt={`${match.teams.home.name} logo`}
                className="max-h-16 max-w-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/64?text=Team';
                }}
              />
            </div>
            <h3 className="text-center font-semibold mt-2 text-gray-800">{match.teams.home.name}</h3>
          </div>
          
          {/* VS */}
          <div className="flex flex-col items-center w-1/5">
            <div className="bg-gray-100 rounded-full h-10 w-10 flex items-center justify-center">
              <span className="text-gray-800 font-bold text-sm">VS</span>
            </div>
          </div>
          
          {/* Away Team */}
          <div className="flex flex-col items-center w-2/5">
            <div className="h-16 w-16 flex items-center justify-center">
              <img 
                src={match.teams.away.logo} 
                alt={`${match.teams.away.name} logo`}
                className="max-h-16 max-w-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/64?text=Team';
                }}
              />
            </div>
            <h3 className="text-center font-semibold mt-2 text-gray-800">{match.teams.away.name}</h3>
          </div>
        </div>
        
        <div className="mt-4 pt-3 border-t border-gray-100 text-center text-sm text-gray-600">
          <span>{match.league.name} - {match.league.round}</span>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;