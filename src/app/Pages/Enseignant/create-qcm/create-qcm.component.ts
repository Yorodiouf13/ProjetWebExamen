// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { ExamService } from '../../../services/exam.service';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-create-qcm',
//   templateUrl: './create-qcm.component.html',
//   styleUrls: ['./create-qcm.component.css'],
//   standalone: true,
//   imports: [FormsModule, CommonModule]  
// })

// export class CreateQCMComponent implements OnInit {
//   classes: string[] = [];
//   subject: string = '';
//   questions: any[] = [{ question: '', answers: [{ text: '', correct: false }] }];

//   constructor(private route: ActivatedRoute, private router: Router, private examService: ExamService) {}

//   ngOnInit(): void {
//     this.route.queryParams.subscribe(params => {
//       this.classes = params['classes'].split(',');
//       this.subject = params['subject'];
//     });
//   }

//   addQuestion(): void {
//     this.questions.push({ question: '', answers: [{ text: '', correct: false }] });
//   }

//   addAnswer(questionIndex: number): void {
//     this.questions[questionIndex].answers.push({ text: '', correct: false });
//   }

//   removeQuestion(index: number): void {
//     this.questions.splice(index, 1);
//   }

//   removeAnswer(questionIndex: number, answerIndex: number): void {
//     this.questions[questionIndex].answers.splice(answerIndex, 1);
//   }

//   saveQCM(): void {
//     const qcmData = {
//       classes: this.classes,
//       subject: this.subject,
//       questions: this.questions
//     };
//     this.examService.saveQCM(qcmData).subscribe(response => {
//       console.log('QCM enregistré avec succès', response);
//       this.router.navigate(['/sujet']);
//     });
//   }
// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { QcmService } from '../../../services/qcm.service';

@Component({
  selector: 'app-create-qcm',
  templateUrl: './create-qcm.component.html',
  styleUrls: ['./create-qcm.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule]  // Ajoutez FormBuilder ici
})
export class CreateQcmComponent implements OnInit {
  qcmForm: FormGroup;

  constructor(private fb: FormBuilder, private qcmService: QcmService) {
    this.qcmForm = this.fb.group({
      classId: ['', Validators.required],
      subjectId: ['', Validators.required],
      questions: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.addQuestion();
  }

  get questions(): FormArray {
    return this.qcmForm.get('questions') as FormArray;
  }

  addQuestion(): void {
    const questionGroup = this.fb.group({
      questionText: ['', Validators.required],
      options: this.fb.array([])
    });
    this.questions.push(questionGroup);
    this.addOption(questionGroup);
  }

  addOption(questionGroup: FormGroup): void {
    const options = questionGroup.get('options') as FormArray;
    options.push(this.fb.group({
      text: ['', Validators.required],
      isCorrect: [false, Validators.required]
    }));
  }

  removeQuestion(index: number): void {
    this.questions.removeAt(index);
  }

  removeOption(questionIndex: number, optionIndex: number): void {
    const options = (this.questions.at(questionIndex) as FormGroup).get('options') as FormArray;
    options.removeAt(optionIndex);
  }

  onSubmit(): void {
    if (this.qcmForm.valid) {
      this.qcmService.createQCM(this.qcmForm.value).subscribe(response => {
        console.log('QCM created', response);
      });
    }
  }
}
