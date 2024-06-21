import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExamService } from '../../../services/exam.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sujet',
  templateUrl: './sujet.component.html',
  styleUrls: ['./sujet.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class SujetComponent implements OnInit {
  selectedClasses: string[] = [];
  subjects: string[] = [];
  selectedSubject: string = '';
  classes: string[] = [];
    
  constructor(private examService: ExamService, private router: Router) {}

  ngOnInit(): void {
    this.getClasses();
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

  createQCM(): void {
    this.router.navigate(['/create-qcm'], { queryParams: { classes: this.selectedClasses, subject: this.selectedSubject } });
  }
}
