import { Flores } from './../models/flores';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FloresService {
  url = 'http://localhost:4000/api/flores/';

  constructor( private http: HttpClient) { }

  getFlores(): Observable<any>{
    return this.http.get(this.url);
  }

  deleteFlower(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  addFlower(flower: Flores): Observable<any> {
    return this.http.post(this.url, flower);
  }

  getFlower(id:string): Observable<any> {
    return this.http.get(this.url + id)
  }

  editFlower(id: string, flower: Flores): Observable<any> {
    return this.http.put(this.url + id, flower);
  }

  searchFlowers(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

}
