import React, { useState } from 'react';
import { Key, AlertCircle } from 'lucide-react';

interface ApiKeyFormProps {
  onSubmit: (apiKey: string) => void;
  error: string | null;
}

const ApiKeyForm: React.FC<ApiKeyFormProps> = ({ onSubmit, error }) => {
  const [apiKey, setApiKey] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKey.trim()) {
      onSubmit(apiKey.trim());
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100 text-emerald-700 mb-4">
          <Key size={24} />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">API Key Required</h2>
        <p className="text-gray-600 mt-1">
          Please enter your API-Football API key to fetch match data
        </p>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-700 flex items-start">
          <AlertCircle size={20} className="mr-2 flex-shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700 mb-1">
            API Key
          </label>
          <input
            type="text"
            id="apiKey"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            placeholder="Enter your API key"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
        >
          Load Matches
        </button>
      </form>

      <div className="mt-4 text-sm text-gray-500">
        <p>
          Don't have an API key? <a href="https://www.api-football.com/documentation" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800">Sign up for free</a> at API-Football.
        </p>
      </div>
    </div>
  );
};

export default ApiKeyForm;