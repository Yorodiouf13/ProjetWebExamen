import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class SujetService {
  private apiUrl = 'http://localhost:3002/';

  constructor(private http: HttpClient) {}

  getClasses(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/classes`);
  }

  getMatiere(classes: string[]): Observable<string[]> {
    const params = { classes: classes.join(',') };
    return this.http.get<string[]>(`${this.apiUrl}/subjects`, { params });
  }

}
