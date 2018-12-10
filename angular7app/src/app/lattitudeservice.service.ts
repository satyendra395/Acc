import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LattitudeserviceService {

  baseUrl: string;
  constructor( private http: HttpClient) { }

  fetchNews(): Observable<any> {
    return this.http.get('../assets/locations.json');
  }
}

