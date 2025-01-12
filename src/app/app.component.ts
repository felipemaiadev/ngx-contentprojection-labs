import { Component, inject, TemplateRef, ViewChild, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateModule } from './template/template.module';
import { ColumnMode, NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';
import { NgSelectModule} from '@ng-select/ng-select';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TemplateModule, NgxDatatableModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Template Labs';


  
    @ViewChild('myTable') table: any;
  
    
    rows = [{name: "Felipe Maia", skills: "Back;Front;Devops", age: 25},
          {name: "Pedro Henrique", skills: "Back;Devops", age: 35},
          {name: "Jose Marcos", skills: "Back;Cloud", age: 38},
      ]
    
      columns = [{ name:"name", prop: "name", width:"100px" }, { name:"skills", prop: "skills", width:"100px"  }, { name:"age", prop: "age", width:"100px"  }];
    
    expanded: any = {};
  
    ColumnMode = ColumnMode;
    

    contentTpl = viewChild<TemplateRef<unknown>>('contentTpl')
    protected content: Node[][] = [];
    
    protected componentInputs = {
      suqad: [{name: "Felipe Maia", skills: "Back;Front;Devops"},
              {name: "Pedro Henrique", skills: "Back;Devops"},
              {name: "Jose Rodrigues", skills: "Back;Cloud"},
      ]
    }
   
    constructor() {
    }
    
  
  
  
    onPage(e:any){
      console.log(e)
    }
  
    onDetailToggle(e:any){
      console.log(e)
    }
  
    toggleExpandRow(row:any) {
      console.log(row)
    }
  
    ngOnInit(): void {
      // const table = new DataTables( this.selector , this.config)
      // this.gridInit();
      // this.vcr.createComponent(TableRowComponent);
    
    }
  
  
   
  
}
