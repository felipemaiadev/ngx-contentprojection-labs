import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './template-router.module'
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { DataService } from './services/data.service';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgSelectModule, 
    MatIconModule,
    NgxDatatableModule.forRoot({
      messages: {
        emptyMessage: 'No data to display', // Message to show when array is presented, but contains no values
        totalMessage: 'total', // Footer total message
        selectedMessage: 'selected' // Footer selected message
      }
    }),
  ],
  exports:[],
  providers:[
    provideHttpClient()
  ]
})
export class TemplateModule { }
