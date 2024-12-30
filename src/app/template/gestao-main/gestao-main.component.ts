import { Component, inject, OnInit, TemplateRef, Type, viewChild, ViewContainerRef } from '@angular/core';
import { NgComponentOutlet,  } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import DataTables, { Config, DataTablesStatic, DomSelector } from 'datatables.net';
import { TableRowComponent } from '../table-row/table-row.component';
import { TableRowTwoComponent } from '../table-row-two/table-row-two.component';
import { TableRowThreeComponent } from '../table-row-three/table-row-three.component';

@Component({
  selector: 'app-gestao-main',
  imports: [RouterOutlet, NgComponentOutlet, TableRowComponent, TableRowComponent],
  templateUrl: './gestao-main.component.html',
  styleUrl: './gestao-main.component.css'
})
export class GestaoMainComponent implements OnInit {
  
  vcr = inject(ViewContainerRef);
  contentTpl = viewChild<TemplateRef<unknown>>('contentTpl')
  protected content: Node[][] = [];
  
  protected component: Type<TableRowComponent> | null = null;
  protected componentInputs = {
    suqad: [{name: "Felipe Maia", skills: "Back;Front;Devops"},
            {name: "Pedro Henrique", skills: "Back;Devops"},
            {name: "Jose Rodrigues", skills: "Back;Cloud"},
    ]
  }
  /**
   *
   */
  constructor() {
  }
  
  selector : DomSelector = "gestao";

  config: Config = { 
    ajax: "https://jsonplaceholder.typicode.com/albums",
    
  }; 

  


  ngOnInit(): void {
    // const table = new DataTables( this.selector , this.config)
    // this.gridInit();
    // this.vcr.createComponent(TableRowComponent);
    this.vcr.createEmbeddedView(this.contentTpl()!).rootNodes
    console.log(this.vcr)
  }


  OpenOptionOne()
  {
    this.vcr.clear();
    this.vcr.createComponent(TableRowComponent);
  }


  OpenOptionTwo()
  {
    this.vcr.clear();
    this.vcr.createComponent(TableRowTwoComponent);
  }

  OpenOptionThree()
  {
    this.vcr.clear();
    this.vcr.createComponent(TableRowThreeComponent);
  }


  gridInit() {
    // Formatting function for row details - modify as you need
    function format(d: any) {
      // `d` is the original data object for the row
      return (
          '<dl>' +
          '<dt>Full name:</dt>' +
          '<dd>' +
          d.name +
          '</dd>' +
          '<dt>Extension number:</dt>' +
          '<dd>' +
          d.extn +
          '</dd>' +
          '<dt>Extra info:</dt>' +
          '<dd>And any further details here (images etc)...</dd>' +
          '</dl>'
      );
    }

    let table = new DataTables('#example', {
      ajax: '../ajax/data/objects.txt',
      columns: [
          {
              className: 'dt-control',
              orderable: false,
              data: null,
              defaultContent: ''
          },
          { data: 'userId' },
          { data: 'id' },
          { data: 'title' }
      ],
      order: [[1, 'asc']]
    });

      // Add event listener for opening and closing details
      table.on('click', 'td.dt-control', function (e) {
      //   let tr = e.target.closest('tr');
      //   let row = table.row(tr);

      //   if (row.child.isShown()) {
      //       // This row is already open - close it
      //       row.child.hide();
      //   }
      //   else {
      //       // Open this row
      //       row.child(format(row.data())).show();
      //   }

      });
  }
  

}
