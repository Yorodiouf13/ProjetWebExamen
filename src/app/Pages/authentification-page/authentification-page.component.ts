import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink} from '@angular/router';


@Component({
  selector: 'app-authentification',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './authentification-page.component.html',
  styleUrl: './authentification-page.component.css'
})

export class AuthentificationComponent {

  loginobj: any = {
    Email: '',
    Password: '' 
  };

  constructor(private router: Router) {}

  onloginobj() {
    if(this.loginobj.Email == "etu@esp.sn" && this.loginobj.Password == "123456"){
      this.router.navigate(['accueil-etu'])
    } 
    else if(this.loginobj.Email == "ens@esp.sn" && this.loginobj.Password == "123456"){
      this.router.navigate(['accueil-ens'])
    }
      else {
      alert('mot de passe ou Email incorrecte')
      }

  }

}
