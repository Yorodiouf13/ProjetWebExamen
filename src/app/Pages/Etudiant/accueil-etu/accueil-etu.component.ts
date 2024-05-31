import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil-etu',
  standalone: true,
  imports: [],
  templateUrl: './accueil-etu.component.html',
  styleUrl: './accueil-etu.component.css'
})
export class AccueilEtuComponent {

  constructor(private router: Router) { }
  navigateToPlanningExam() {
    this.router.navigate(['planning-exam']);
  }

}
