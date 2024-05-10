import { Origin } from './origin.interface';
import { LocationLK } from './location.interface';

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: LocationLK;
  image: string;
  episode: string[];
  url: string;
  created: string;
}
