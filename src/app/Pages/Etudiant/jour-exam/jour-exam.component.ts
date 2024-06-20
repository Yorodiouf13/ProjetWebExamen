import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExamService } from '../../../services/exam.service';

@Component({
  selector: 'app-jour-exam',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './jour-exam.component.html',
  styleUrls: ['./jour-exam.component.css']
})
export class JourExamComponent implements OnInit {
  student: any = {};
  questions: any[] = [];
  classes: string[] = [];
  subjects: string[] = [];
  examStarted = false;

  constructor(private examService: ExamService) {}

  ngOnInit(): void {
    this.loadClasses();
  }

  loadClasses(): void {
    this.examService.getClasses().subscribe((data: string[]) => {
      this.classes = data;
    });
  }

  onClassChange(): void {
    this.examService.getSubject(this.student.class).subscribe((data: string[]) => {
      this.subjects = data;
    });
  }

  startExam(): void {
    this.examService.getQuestions(this.student.class, this.student.subject).subscribe((data: any[]) => {
      this.questions = data;
      this.examStarted = true;
    });
  }

  submitAnswers(): void {
    const answers = this.questions.map(question => ({
      questionId: question._id,
      selectedAnswer: question.selectedAnswer
    }));
    const studentInfo = {
      name: `${this.student.firstName} ${this.student.lastName}`,
      class: this.student.class,
      subject: this.student.subject
    };
    this.examService.submitAnswers(studentInfo, answers).subscribe(response => {
      console.log('Answers submitted successfully', response);
    });
  }
}
