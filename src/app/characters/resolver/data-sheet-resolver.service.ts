import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { dataSheet } from '../interfaces/dataSheet.interface';
import { CharactersService } from '../services/characters.service';
import { inject } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { GenericFetchService } from '../services/generic-fetch.service';
import { Episode } from '../interfaces/episode.interface';
import { Location } from '../interfaces/location.interface';

export const dataSheetResolver: ResolveFn<dataSheet> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  dataService: CharactersService = inject(CharactersService),
  dataService2: GenericFetchService<Episode> = inject(GenericFetchService),
  dataService3: GenericFetchService<Location> = inject(GenericFetchService),
) => {
  const routeID: number = +route.paramMap.get('id')!;
  let dataSheet: dataSheet = {} as dataSheet;

  dataService.searchCharacterByID(routeID).subscribe({
    next: (character: Character) => {
      dataSheet.character = character;

      dataService2.fetchData(dataSheet.character.episode[0]).subscribe({
        next: (episode: Episode) => {
          dataSheet.firstApperance = episode;
        },
        error: () => {},
      });

      if (dataSheet.character.location.url !== '') {
        dataService3.fetchData(dataSheet.character.location.url).subscribe({
          next: (location: Location) => {
            dataSheet.currentLocation = location;
          },
          error: () => {},
        });
      }

      if (dataSheet.character.origin.url !== '') {
        dataService3.fetchData(dataSheet.character.origin!.url).subscribe({
          next: (location: Location) => {
            dataSheet.originLocation = location;
          },
          error: () => {},
        });
      }
    },
    error: () => {},
  });

  return dataSheet;
};
