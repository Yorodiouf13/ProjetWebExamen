import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExamService } from '../../../services/exam.service';

@Component({
  selector: 'app-planification',
  templateUrl: './planification.component.html',
  styleUrls: ['./planification.component.css'],
  standalone: true,
  imports: [FormsModule]  // Ajoutez FormsModule ici
})
export class PlanificationComponent implements OnInit {
  exam: any = {};

  constructor(private examService: ExamService) {}

  ngOnInit(): void {}

  planExam(): void {
    this.examService.planExam(this.exam).subscribe(response => {
      console.log('Examen planifié avec succès', response);
    });
  }
}
