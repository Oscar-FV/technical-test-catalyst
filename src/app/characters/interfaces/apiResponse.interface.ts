import { Character } from './character.interface';
import { Info } from './info.interface';

export interface ApiResponse {
  info: Info;
  results: Character[];
}
