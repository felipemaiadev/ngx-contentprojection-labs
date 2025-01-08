import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './template-router.module'
import { NgxDatatableModule } from '@swimlane/ngx-datatable';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes),
    NgxDatatableModule.forRoot({
      messages: {
        emptyMessage: 'No data to display', // Message to show when array is presented, but contains no values
        totalMessage: 'total', // Footer total message
        selectedMessage: 'selected' // Footer selected message
      }
    })
  ],
  exports:[]
})
export class TemplateModule { }
