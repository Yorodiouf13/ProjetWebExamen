// import { Component, OnInit } from '@angular/core';
// import { ExamService } from '../../../services/exam.service';

// @Component({
//   selector: 'app-calendrier',
//   templateUrl: './calendrier.component.html',
//   styleUrls: ['./calendrier.component.css']
// })
// export class CalendrierComponent implements OnInit {
//   exams: any[] = [];

//   constructor(private examService: ExamService) {}

//   ngOnInit(): void {
//     this.getExams();
//   }

//   getExams(): void {
//     this.examService.getExams().subscribe((data: any[]) => {
//       this.exams = data;
//     });
//   }
// }

import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../../../services/calendar.service';
import { FullCalendarModule } from '@fullcalendar/angular';

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.css'],
  standalone: true,
  imports: [FullCalendarModule]  // Ajoutez CalendarService ici en tant que fournisseur de service dans le composant principal
})
export class CalendarComponent implements OnInit {
  events: any[] = [];

  constructor(private calendarService: CalendarService) {}

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.calendarService.getEvents().subscribe((data: any[]) => {
      this.events = data;
    });
  }
}

