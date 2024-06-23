import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PlanificationService } from '../../../services/planification.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-planification',
  templateUrl: './planification.component.html',
  styleUrls: ['./planification.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
})

export class PlanificationComponent implements OnInit {
  planForm: FormGroup;
  editForm: FormGroup;
  classes: any[] = []; 
  matieres: any[] = [];
  futureExams: any[] = [];
  editingExam: any = null;

  constructor(
    private fb: FormBuilder,
    private planificationService: PlanificationService,
  ) {
    this.planForm = this.fb.group({
      classIds: ['', Validators.required],
      matiereId: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required]
    });

    this.editForm = this.fb.group({
      classIds: ['', Validators.required],
      matiereId: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadClasses();
    this.loadFutureExams();
  }

  loadClasses(): void {
    this.planificationService.getClasses().subscribe((data: any[]) => {
      this.classes = data;
    });
  }

  // onClassChange(): void {
  //   const selectedClasses = this.planForm.get('classIds')?.value;
  //   if (selectedClasses.length > 0) {
  //     this.planificationService.getMatiere(selectedClasses).subscribe((data: any[]) => {
  //       this.matieres = data;
  //     });
  //   }
  //   // else {
  //   //   this.matieres = [];
  //   // }
  // }

  onClassChange(): void {
    let selectedClasses = this.planForm.get('classIds')?.value;
    // console.log('Selected classes (raw):', selectedClasses);  
    if (!Array.isArray(selectedClasses)) {
      selectedClasses = [selectedClasses];  
    }
    if (selectedClasses && Array.isArray(selectedClasses)) {
      // console.log('Selected classes (array):', selectedClasses);
      this.planificationService.getMatieres(selectedClasses).subscribe((data: any[]) => {
        this.matieres = data;
        // console.log('Matieres loaded:', this.matieres);  
      });
    } else {
      // console.error('Selected classes is not an array:', selectedClasses);
      this.matieres = [];
    }
  }

  loadFutureExams(): void {
    // console.log('entrer dans loadFutureExams()');
    this.planificationService.getFutureExams().subscribe((data: any[]) => {
      // console.log('Exams loaded:', data);
      this.futureExams = data;
    });
  }

  onSubmit(): void {
    if (this.planForm.valid) {
      console.log('Form submitted:', this.planForm.value);
      let exam = {...this.planForm.value };
      this.planificationService.planExam(exam).subscribe(response => {
        console.log('Exam planifié avec succès:', response);
        this.loadFutureExams();
        this.planForm.reset();
      });
    }
  }

  onDelete(examId: string): void {
    console.log('entrer dans onDelete()');
    this.planificationService.deleteExam(examId).subscribe(() => {
      console.log('Examen supprimé avec succès');
      this.loadFutureExams();
    });
  }

  onEdit(exam: any): void {
    this.editingExam = exam;
    this.editForm.patchValue({
      classIds: this.planForm.get('classIds')?.value,
      matiereId: this.planForm.get('matiereId')?.value,
      date: exam.date,
      time: exam.time
    });
  }
  onUpdate(exam: any): void {
    if (exam._id) {
      console.log('Updating exam:', exam);  // Log pour vérifier les données
      this.planificationService.updateExam(exam).subscribe(() => {
        this.loadFutureExams();
      });
    } else {
      console.error('exam._id is undefined');
    }
  }

  onCancelEdit(): void {
    this.editingExam = null;
    this.editForm.reset();
  }

}
