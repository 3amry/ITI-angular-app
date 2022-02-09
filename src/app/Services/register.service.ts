import { HttpClient } from '@angular/common/http';
import { User } from './../user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}
  _url = 'http://localhost:4000/register';
  register(user: User) {
    return this.http.post(this._url, user);
  }
}
