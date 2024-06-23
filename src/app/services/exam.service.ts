import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamService {
  private apiUrl = 'http://localhost:3002/';

  constructor(private http: HttpClient) {}

  getClasses(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/classes`);
  }

  planExam(exam: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/exams`, exam);
  }

  getFutureExams(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/exams/future`);
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

  addExam(exam: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, exam);
  }

  getSubject(classParam: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/subjects?class=${classParam}`);
  }

  getMatiere(classes: string[]): Observable<string[]> {
    const params = { classes: classes.join(',') };
    return this.http.get<string[]>(`${this.apiUrl}/subjects`, { params });
  }


  getSubjects(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/subjects`);
  }
  
  createSubject(subject: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/subjects`, subject);
  }

  deleteSubject(subjectId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/subjects/${subjectId}`);
  }

  getQuestions(classParam: string, subjectParam: string): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.apiUrl}/questions?class=${classParam}&subject=${subjectParam}`);
  }

  submitAnswers(student: any, answers: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/answers`, { student, answers });
  }

  getStudentResults(studentId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/results?studentId=${studentId}`);
  }

  getExamCorrection(examId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/corrections?examId=${examId}`);
  }
  getSubjectsByClass(classId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/classes/${classId}/subjects`);
  }
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: string;
}
