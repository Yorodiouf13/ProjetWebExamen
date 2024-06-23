import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QcmService {
  private apiUrl = 'http://localhost:3002/qcms';

  constructor(private http: HttpClient) {}

  createQCM(qcm: any): Observable<any> {
    return this.http.post(this.apiUrl, qcm);
  }

  updateQCM(qcmId: string, qcm: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${qcmId}`, qcm);
  }

  deleteQCM(qcmId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${qcmId}`);
  }

  getQCMByClassAndSubject(classId: string, subjectId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${classId}/${subjectId}`);
  }
}
