export interface Company {
  id: string;
  name: string;
  logo: string;
  industry: string;
  description: string;
  website: string;
  size: string;
  headquarters: string;
  locations: CompanyLocation[];
  rating: number;
  experiences: Experience[];
}

export interface CompanyLocation {
  city: string;
  country: string;
  isHeadquarters: boolean;
  hiringFor: string[]; // roles they hire for at this location
}

export interface Experience {
  id: string;
  studentName: string;
  batch: string;
  college: string; // College name or "Off-campus" for off-campus placements
  role: string;
  package: string;
  experienceType: 'Internship' | 'Full-time' | 'PPO'; // PPO = Pre-Placement Offer (intern converted)
  difficulty: 'Easy' | 'Medium' | 'Hard';
  difficultyNote: string; // Note that difficulty is subjective
  process: string[];
  requirements: Requirement[];
  topics: Topic[];
  tips: string[];
  timeline: string;
  selected: boolean;
  location: string; // which office location
  date: string;
  isPPOConverted?: boolean; // if internship was converted to PPO
  isOffCampus: boolean; // whether this was an off-campus placement
}

export interface Requirement {
  category: string;
  details: string[];
}

export interface Topic {
  subject: string;
  importance: 'High' | 'Medium' | 'Low';
  resources: string[];
}

export interface SuccessRates {
  overall: number;
  internship: number;
  fullTime: number;
  ppoConversion: number;
}
