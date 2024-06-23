import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanificationService {
  private apiUrl = 'http://localhost:3002/';

  constructor(private http: HttpClient) {}

  getClasses(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/classes`);
  }

  planExam(exam: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/exams`, exam);
  }

  deleteExam(examId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/exams/${examId}`);
  }

  updateExam(exam: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/exams/${exam.id}`, exam);
  }
  
  getExams(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getMatiere(classes: string[]): Observable<string[]> {
    const params = { classes: classes.join(',') };
    return this.http.get<string[]>(`${this.apiUrl}/subjects`, { params });
  }

  
  getFutureExams(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/exams`);
  }

}
