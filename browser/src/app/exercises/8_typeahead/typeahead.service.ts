import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay, map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TypeaheadService {

  apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=';


  constructor(private http: HttpClient) { }

  search(term: string): Observable<any> {
    return this.http.get(this.apiUrl + term).pipe(
      map((response: any) => response.items.map(this.itemToResult)),
      catchError(err => of([]))
    );
  }

  itemToResult(result: any): any {
    return {
      title: result.volumeInfo.title,
      id: result.id
    }
  }
}
