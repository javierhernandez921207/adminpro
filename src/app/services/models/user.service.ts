import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponse } from './response';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = 'https://localhost:44376/api/user';

  constructor(public _http: HttpClient) { }

  getClientes(): Observable<IResponse> {
    return this._http.get<IResponse>(this.url);
  }

}
