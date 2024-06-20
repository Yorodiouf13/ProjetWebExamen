import { Component, OnInit } from '@angular/core';
import { ExamService } from '../../../services/exam.service';

@Component({
  selector: 'app-resultats',
  templateUrl: './resultats.component.html',
  styleUrls: ['./resultats.component.css']
})
export class ResultatsComponent implements OnInit {
  studentResults: any[] = [];

  constructor(private examService: ExamService) {}

  ngOnInit(): void {
    this.getStudentResults();
  }

  getStudentResults(): void {
    // Supposons que l'identifiant de l'étudiant soit stocké dans le localStorage
    const studentId = localStorage.getItem('studentId');
    if (studentId) {
      this.examService.getStudentResults(studentId).subscribe((data: any[]) => {
        this.studentResults = data;
      });
    } else {
      console.error('No student ID found in localStorage.');
    }
  }
  
  viewCorrection(examId: string): void {
    // Logique pour afficher la correction d'un examen spécifique
    this.examService.getExamCorrection(examId).subscribe((correction: any) => {
      console.log(correction); // Afficher la correction dans la console pour l'instant
      // Vous pouvez afficher cette correction dans une modal ou une nouvelle page
    });
  }
}
