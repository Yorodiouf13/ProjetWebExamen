import { Component, OnInit } from '@angular/core';
import { ExamService } from '../../../services/exam.service';

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.css']
})
export class CalendrierComponent implements OnInit {
  exams: any[] = [];

  constructor(private examService: ExamService) {}

  ngOnInit(): void {
    this.getExams();
  }

  getExams(): void {
    this.examService.getExams().subscribe((data: any[]) => {
      this.exams = data;
    });
  }
}
