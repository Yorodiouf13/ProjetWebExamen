import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SujetService } from '../../../services/sujet.service';

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
    
  constructor(private sujetService: SujetService, private router: Router) {}

  ngOnInit(): void {
    this.getClasses();
  }

  getClasses(): void {
    this.sujetService.getClasses().subscribe((data: string[]) => {
      this.classes = data;
    });
  }

  onClassesChange(): void {
    this.sujetService.getMatiere(this.selectedClasses).subscribe((data: string[]) => {
      this.subjects = data;
    });
  }

  createQCM(): void {
    this.router.navigate(['/create-qcm'], { queryParams: { classes: this.selectedClasses, subject: this.selectedSubject } });
  }
}
