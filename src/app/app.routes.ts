import { Routes } from '@angular/router';
import { AccueilGeneralComponent } from './Pages/accueil-general/accueil-general.component';
import { AuthentificationComponent } from './Pages/authentification-page/authentification-page.component';
import { AccueilEtuComponent } from './Pages/Etudiant/accueil-etu/accueil-etu.component';
import { AccueilEnsComponent } from './Pages/Enseignant/accueil-ens/accueil-ens.component';
import { PlanningExamComponent } from './Pages/Etudiant/planning-exam/planning-exam.component';
import { JourExamComponent } from './Pages/Etudiant/jour-exam/jour-exam.component';
import { ResultatsComponent } from './Pages/Etudiant/resultats/resultats.component';


export const routes: Routes = [

    {
        path:'',
        redirectTo:'accueil-general',
        pathMatch:'full'
    },
    {
        path:'accueil-general',
        component:AccueilGeneralComponent
    },
    {
        path:'authentification-page',
        component:AuthentificationComponent
    },
    {
        path:'accueil-ens',
        component:AccueilEnsComponent
    },
    {
        path:'accueil-etu',
        component:AccueilEtuComponent
    },
    {
        path:'planning-exam',
        component:PlanningExamComponent
    },
    {
        path:'jour-exam',
        component:JourExamComponent
    },
    {
        path:'resultats',
        component:ResultatsComponent
    }
];
