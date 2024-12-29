import { Routes } from '@angular/router';
import { GestaoMainComponent } from './gestao-main/gestao-main.component';
import { GestaoColaboradoresComponent } from './gestao-colaboradores/gestao-colaboradores.component';
import { GestaoDepertamentosComponent } from './gestao-depertamentos/gestao-depertamentos.component';
import { GestaoEquipeComponent } from './gestao-equipe/gestao-equipe.component';

export const routes: Routes = [

    {path:"", component: GestaoMainComponent,
        children:[
         {path: "colaboradores", component: GestaoColaboradoresComponent},
         {path: "departamentos", component: GestaoDepertamentosComponent},
         {path: "equipes", component: GestaoEquipeComponent}
        ]
    }
];