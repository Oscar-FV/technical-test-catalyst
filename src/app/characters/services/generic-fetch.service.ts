import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, share } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GenericFetchService<T> {
  constructor(private http: HttpClient) {}

  fetchData(url: string): Observable<T> {
    {
      return this.http.get<T>(url).pipe(share());
    }
  }
}
