import { Routes } from '@angular/router';
import { AccueilGeneralComponent } from './Pages/accueil-general/accueil-general.component';
import { AuthentificationComponent } from './Pages/authentification-page/authentification-page.component';
import { AccueilEtuComponent } from './Pages/Etudiant/accueil-etu/accueil-etu.component';
import { AccueilEnsComponent } from './Pages/Enseignant/accueil-ens/accueil-ens.component';
import { PlanningExamComponent } from './Pages/Etudiant/planning-exam/planning-exam.component';
import { JourExamComponent } from './Pages/Etudiant/jour-exam/jour-exam.component';
import { ResultatsComponent } from './Pages/Etudiant/resultats/resultats.component';
import { PlanificationComponent } from './Pages/Enseignant/planification/planification.component';
import { CalendarComponent } from './Pages/Enseignant/calendrier/calendrier.component';
import { SujetComponent } from './Pages/Enseignant/sujet/sujet.component';


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
        path:'planningExam',
        component:PlanningExamComponent
    },
    {
        path:'jourExam',
        component:JourExamComponent
    },
    {
        path:'resultats',
        component:ResultatsComponent
    },
    { 
        path: 'planification', 
        component: PlanificationComponent
    },
    { 
        path: 'calendrier', 
        component: CalendarComponent  
    },
    
    { 
        path: 'sujet', 
        component: SujetComponent
    }
];
