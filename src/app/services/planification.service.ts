import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanificationService {
  private apiUrl = 'http://localhost:3002/api';  // URL de base de votre backend

  constructor(private http: HttpClient) {}

  getClasses(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/classes`);
  }

  planExam(exam: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/examens`, exam);
  }

  deleteExam(examId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/examens/${examId}`);
  }

  updateExam(exam: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/examens/${exam._id}`, exam);
  }

  getFutureExams(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/examens/future`);
  }

  // 
  getMatieres(classes: string[]): Observable<any[]> {
    // if (!Array.isArray(classes)) {
    //   console.error('Expected classes to be an array, but got:', classes);
    //   return new Observable(observer => {
    //     observer.error('Expected classes to be an array');
    //   });
    // }
    const params = { classes: classes.join(',') };
    // console.log('Request params for getMatieres:', params);  // Journalisation des paramètres de requête
    return this.http.get<any[]>(`${this.apiUrl}/matieres/byClass`, { params });
  }
}
