import { Routes } from '@angular/router';
import { GestaoMainComponent } from './template/gestao-main/gestao-main.component';
import { GestaoColaboradoresComponent } from './template/gestao-colaboradores/gestao-colaboradores.component';
import { GestaoDepertamentosComponent } from './template/gestao-depertamentos/gestao-depertamentos.component';
import { GestaoEquipeComponent } from './template/gestao-equipe/gestao-equipe.component';

export const routes: Routes = [

    {   
        path:"gestao",
        loadChildren: () => import('./template/template.module').then(m => m.TemplateModule)
    }

];
