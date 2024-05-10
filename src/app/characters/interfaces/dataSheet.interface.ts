import { Character } from './character.interface';
import { Episode } from './episode.interface';
import { Location } from './location.interface';

export interface dataSheet {
  character: Character;
  originLocation?: Location;
  currentLocation?: Location;
  firstApperance: Episode;
}
