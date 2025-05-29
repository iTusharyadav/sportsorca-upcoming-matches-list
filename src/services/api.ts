import axios from 'axios';
import { ApiResponse } from '../types';

const BASE_URL = 'https://v3.football.api-sports.io';
const API_KEY = ''; // add your api key here

export const fetchUpcomingFixtures = async (): Promise<ApiResponse> => {
  const today = new Date().toISOString().split('T')[0];
  
  try {
    const response = await axios.get(`${BASE_URL}/fixtures`, {
      params: {
        date: today,
        league: 39, // Premier League
        season: 2023 // Current season
      },
      headers: {
        'x-apisports-key': API_KEY
      },
    });
    
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw {
        message: error.response?.data?.message || 'Failed to fetch fixtures',
        status: error.response?.status,
      };
    }
    throw { message: 'An unexpected error occurred' };
  }
};