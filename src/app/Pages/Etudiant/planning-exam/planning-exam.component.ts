import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ExamService } from '../../../services/exam.service';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-planning-exam',
  standalone: true,
  imports: [CommonModule, FullCalendarModule],
  templateUrl: './planning-exam.component.html',
  styleUrls: ['./planning-exam.component.css']
})
export class PlanningExamComponent implements OnInit {
  exams: any[] = [];
  calendarOptions: CalendarOptions;

  constructor(private examService: ExamService) {
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      plugins: [dayGridPlugin],
      events: []
    };
  }

  ngOnInit(): void {
    this.getExams();
  }

  getExams(): void {
    this.examService.getExams().subscribe((data: any[]) => {
      this.exams = data;
      this.generateTimetable();
    });
  }

  generateTimetable(): void {
    const events = this.exams.map(exam => ({
      title: `${exam.subject} - ${exam.class}`,
      start: `${exam.date}T${exam.time}`
    }));
    this.calendarOptions = {
      ...this.calendarOptions,
      events: events
    };
  }

  addExam(exam: any): void {
    this.examService.addExam(exam).subscribe((newExam: any) => {
      this.exams.push(newExam);
      this.generateTimetable();
    });
  }
}
