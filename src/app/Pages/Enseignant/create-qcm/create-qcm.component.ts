import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamService } from '../../../services/exam.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-qcm',
  templateUrl: './create-qcm.component.html',
  styleUrls: ['./create-qcm.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]  
})

export class CreateQCMComponent implements OnInit {
  classes: string[] = [];
  subject: string = '';
  questions: any[] = [{ question: '', answers: [{ text: '', correct: false }] }];

  constructor(private route: ActivatedRoute, private router: Router, private examService: ExamService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.classes = params['classes'].split(',');
      this.subject = params['subject'];
    });
  }

  addQuestion(): void {
    this.questions.push({ question: '', answers: [{ text: '', correct: false }] });
  }

  addAnswer(questionIndex: number): void {
    this.questions[questionIndex].answers.push({ text: '', correct: false });
  }

  removeQuestion(index: number): void {
    this.questions.splice(index, 1);
  }

  removeAnswer(questionIndex: number, answerIndex: number): void {
    this.questions[questionIndex].answers.splice(answerIndex, 1);
  }

  saveQCM(): void {
    const qcmData = {
      classes: this.classes,
      subject: this.subject,
      questions: this.questions
    };
    this.examService.saveQCM(qcmData).subscribe(response => {
      console.log('QCM enregistré avec succès', response);
      this.router.navigate(['/sujet']);
    });
  }
}
