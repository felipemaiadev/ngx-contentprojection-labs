import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import DataTables, { Config, DataTablesStatic, DomSelector } from 'datatables.net';

@Component({
  selector: 'app-gestao-main',
  imports: [RouterOutlet],
  templateUrl: './gestao-main.component.html',
  styleUrl: './gestao-main.component.css'
})
export class GestaoMainComponent implements OnInit {
  

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
    const table = new DataTables( this.selector , this.config)
    
    table.data 
    this.gridInit();
  }


  gridInit(){
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
