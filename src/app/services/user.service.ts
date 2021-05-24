import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "https://localhost:44333/api/User/";

  constructor(private http: HttpClient) { }

  getListUser(): Observable<any> {
    return this.http.get(this.url);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(this.url + id);
  }

  addUser(usuario: any): Observable<any> {
    return this.http.post(this.url, usuario);
  }

  updateUser(id: number, usuario: any): Observable<any> {
    return this.http.put(this.url + id, usuario);
  }

}
