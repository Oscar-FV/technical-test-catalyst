import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { Observable, catchError, of, share } from 'rxjs';
import { ApiResponse } from '../interfaces/apiResponse.interface';
import { dataSheet } from '../interfaces/dataSheet.interface';
import { Location } from '../interfaces/location.interface';
import { Episode } from '../interfaces/episode.interface';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private apiUrl: string = 'https://rickandmortyapi.com/api';
  constructor(private http: HttpClient) {}

  searchCharacters(list: number[]) {
    const url = `${this.apiUrl}/character/${list.toString()}`;

    return this.http.get<Character[]>(url).pipe(catchError(() => of([])));
  }

  searchFilterByCharacterName(name: string): Observable<ApiResponse> {
    const url = `${this.apiUrl}/character/?name=${name}`;

    return this.http.get<ApiResponse>(url).pipe(share());
  }

  searchCharacterByID(id: number): Observable<Character> {
    const url = `${this.apiUrl}/character/${id}`;
    return this.http.get<Character>(url).pipe(share());
  }

  searchLocation(url: string): Observable<Location> {
    {
      return this.http.get<Location>(url).pipe(share());
    }
  }

  searchEpisode(url: string): Observable<Episode> {
    {
      return this.http.get<Episode>(url).pipe(share());
    }
  }
}
