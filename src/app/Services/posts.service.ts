import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { IPost } from '../shared-classes-and-types/IPost';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}
  _url: string = 'https://jsonplaceholder.typicode.com/posts';
  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this._url).pipe(
      catchError((err) => {
        return throwError(() => err.message || 'lost in the desert');
      })
    );
  }
}
