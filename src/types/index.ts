export interface Team {
  id: number;
  name: string;
  logo: string;
}

export interface FixtureVenue {
  id: number;
  name: string;
  city: string;
}

export interface FixtureStatus {
  long: string;
  short: string;
  elapsed: number | null;
}

export interface FixtureScore {
  home: number | null;
  away: number | null;
}

export interface FixtureTeams {
  home: Team;
  away: Team;
}

export interface FixtureGoals {
  home: number | null;
  away: number | null;
}

export interface Fixture {
  id: number;
  referee: string | null;
  timezone: string;
  date: string;
  timestamp: number;
  venue: FixtureVenue;
  status: FixtureStatus;
  league: {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
    round: string;
  };
  teams: FixtureTeams;
  goals: FixtureGoals;
  score: {
    halftime: FixtureScore;
    fulltime: FixtureScore;
    extratime: FixtureScore;
    penalty: FixtureScore;
  };
}

export interface ApiResponse {
  get: string;
  parameters: Record<string, string>;
  errors: string[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: Fixture[];
}

export interface ApiError {
  message: string;
  status?: number;
}