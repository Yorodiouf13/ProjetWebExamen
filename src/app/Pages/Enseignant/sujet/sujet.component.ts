import { Component, OnInit } from '@angular/core';
import { ExamService } from '../../../services/exam.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sujet',
  templateUrl: './sujet.component.html',
  styleUrls: ['./sujet.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]  // Ajoutez FormsModule ici
})
export class SujetComponent implements OnInit {
  subjects: any[] = [];
  newSubject: any = {};

  constructor(private examService: ExamService) {}

  ngOnInit(): void {
    this.getSubjects();
  }

  getSubjects(): void {
    this.examService.getSubjects().subscribe((data: any[]) => {
      this.subjects = data;
    });
  }

  createSubject(): void {
    this.examService.createSubject(this.newSubject).subscribe(response => {
      this.subjects.push(response);
      this.newSubject = {};
    });
  }

  deleteSubject(subjectId: string): void {
    this.examService.deleteSubject(subjectId).subscribe(response => {
      this.subjects = this.subjects.filter(subject => subject.id !== subjectId);
    });
  }
}
