import { Routes } from '@angular/router';
import { AccueilGeneralComponent } from './Pages/accueil-general/accueil-general.component';
import { AuthentificationComponent } from './Pages/authentification-page/authentification-page.component';
import { AccueilEtuComponent } from './Pages/Etudiant/accueil-etu/accueil-etu.component';
import { AccueilEnsComponent } from './Pages/Enseignant/accueil-ens/accueil-ens.component';


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
        path:'accueil-etu',
        component:AccueilEtuComponent
    },
    {
        path:'accueil-ens',
        component:AccueilEnsComponent
    }
];
