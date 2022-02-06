import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { IUser } from '../shared-classes-and-types/IUser';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}
  _url: string = 'https://jsonplaceholder.typicode.com/users';
  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this._url).pipe(
      catchError((err) => {
        return throwError(() => err.message || 'lost in the desert');
      })
    );
  }
}
