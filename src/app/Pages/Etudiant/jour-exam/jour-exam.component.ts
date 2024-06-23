import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ExamService } from '../../../services/exam.service';
import  {QcmService } from '../../../services/qcm.service';

@Component({
  selector: 'app-jour-exam',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './jour-exam.component.html',
  styleUrls: ['./jour-exam.component.css']
})
export class JourExamComponent implements OnInit {
  examForm: FormGroup;
  classes: any[] = [];
  subjects: any[] = [];
  qcm: any;


  constructor(private formBuilder: FormBuilder, private examService: ExamService, private qcmService: QcmService) {
    this.examForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      classId: ['', Validators.required],
      subjectId: ['', Validators.required]
    });
  }

  // ngOnInit(): void {
  //   this.loadClasses();
  // }

  // loadClasses(): void {
  //   this.examService.getClasses().subscribe((data: string[]) => {
  //     this.classes = data;
  //   });
  // }

  // onClassChange(): void {
  //   this.examService.getSubject(this.student.class).subscribe((data: string[]) => {
  //     this.subjects = data;
  //   });
  // }

  // startExam(): void {
  //   this.examService.getQuestions(this.student.class, this.student.subject).subscribe((data: any[]) => {
  //     this.questions = data;
  //     this.examStarted = true;
  //   });
  // }

  // submitAnswers(): void {
  //   const answers = this.questions.map(question => ({
  //     questionId: question._id,
  //     selectedAnswer: question.selectedAnswer
  //   }));
  //   const studentInfo = {
  //     name: `${this.student.firstName} ${this.student.lastName}`,
  //     class: this.student.class,
  //     subject: this.student.subject
  //   };
  //   this.examService.submitAnswers(studentInfo, answers).subscribe(response => {
  //     console.log('Answers submitted successfully', response);
  //   });
  // }

  ngOnInit(): void {
    this.loadClasses();
  }

  loadClasses(): void {
    this.examService.getClasses().subscribe((data: any[]) => {
      this.classes = data;
    });
  }

  onClassChange(event: Event): void {
    const target = event.target as HTMLSelectElement; // Assertion de type
    const classId = target.value;
    if (classId) {
      this.examService.getSubjectsByClass(classId).subscribe((data: any[]) => {
        this.subjects = data;
      });
    }
  }

  onSubmit(): void {
    if (this.examForm.valid) {
      const { classId, subjectId } = this.examForm.value;
      this.qcmService.getQCMByClassAndSubject(classId, subjectId).subscribe(response => {
        this.qcm = response;
      });
    }
  }
}
