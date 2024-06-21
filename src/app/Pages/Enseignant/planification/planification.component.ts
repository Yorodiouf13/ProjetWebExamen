import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExamService } from '../../../services/exam.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-planification',
  templateUrl: './planification.component.html',
  styleUrls: ['./planification.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]  // Ajoutez FormsModule ici
})
export class PlanificationComponent implements OnInit {
  exam: any = { classes: [], subject: '', date: '', time: '' };
  classes: string[] = [];
  subjects: string[] = [];
  exams: any[] = [];
  selectedClasses: string[] = [];

  constructor(private examService: ExamService) {}

  ngOnInit(): void {
    this.getClasses();
    this.getExams();
  }

  getClasses(): void {
    this.examService.getClasses().subscribe((data: string[]) => {
      this.classes = data;
    });
  }

  onClassesChange(): void {
    this.examService.getMatiere(this.selectedClasses).subscribe((data: string[]) => {
      this.subjects = data;
    });
  }

  planExam(): void {
    this.exam.classes = this.selectedClasses;
    this.examService.planExam(this.exam).subscribe(response => {
      console.log('Examen planifié avec succès', response);
      this.getExams(); // Mettre à jour la liste des examens après en avoir planifié un nouveau
    });
  }

  getExams(): void {
    this.examService.getFutureExams().subscribe((data: any[]) => {
      this.exams = data;
    });
  }

  deleteExam(examId: string): void {
    this.examService.deleteExam(examId).subscribe(response => {
      console.log('Examen supprimé avec succès', response);
      this.getExams(); // Mettre à jour la liste des examens après en avoir supprimé un
    });
  }

  updateExam(exam: any): void {
    this.examService.updateExam(exam).subscribe(response => {
      console.log('Examen mis à jour avec succès', response);
      this.getExams(); // Mettre à jour la liste des examens après en avoir mis à jour un
    });
  }
}
