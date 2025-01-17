import { Component, effect, inject, OnInit, signal, TemplateRef, Type, ViewChild, viewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { CommonModule, NgComponentOutlet, NgFor, NgIf,  } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TableRowComponent } from '../table-row/table-row.component';
import { TableRowTwoComponent } from '../table-row-two/table-row-two.component';
import { TableRowThreeComponent } from '../table-row-three/table-row-three.component';
import { toObservable } from '@angular/core/rxjs-interop';




import { ColumnMode, NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { UserService } from '@template/services/user.service';
import { User } from '@template/models/entities/user.model';
import { DataService } from '@template/services/data.service';
import { ModalDismissReasons, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '@template/modal-time/modal-time.component';
import {MatIconModule} from '@angular/material/icon';
import { ModalNovoColabordorComponent } from '@template/modal-time-novo/modal-time-novo.component';

@Component({
  selector: 'app-gestao-main',
  imports: [RouterOutlet,
            FormsModule,
            NgSelectModule,
            MatIconModule,
            NgxDatatableModule,
            CommonModule,
            ModalComponent,
            ModalNovoColabordorComponent],
  templateUrl: './gestao-main.component.html',
  styleUrl: './gestao-main.component.css',
  encapsulation: ViewEncapsulation.None
})
export class GestaoMainComponent implements OnInit{

  @ViewChild('myTable') table: any;

  modalRef?: NgbModalRef;

  users$?: Observable<Array<User>>;

  rows: any[] = [];

  rowsRx = signal<any[]>([]);

  rows$?: Observable<any[]>;

  selectNames?: Array<string>;

  closeResult = '';

  row = [{id: 0, name: "Felipe Maia", skills: [{id: 1, name: "Docker" },{id:2, name:"Kubernets"}], age: 25, disable: true } ,
        {id: 1,name: "G. Allejo", skills: [{id: 1, name: "Docker" },{id:3, name:"Argo CI"}], age: 35, disable: false},
        {id: 2,name: "Ariel Ortega", skills: [{id: 1, name: "Docker" },{id:4, name:"Grafana"}], age: 38, disable: true},
        {id: 3,name: "Diego Armando", skills: [{id: 1, name: "Docker" },{id:2, name:"Kubernets"}], age: 38, disable: false}]

   columns = [{ name:"name", prop: "name", width:"100px" }, { name:"skills", prop: "skills", width:"100px"  }, { name:"age", prop: "age", width:"100px"  }, {prop: 'actions', name: 'Actions'}];

  timeout?: any;

  expanded: any = {};

  ColumnMode = ColumnMode;

  vcr = inject(ViewContainerRef);
  contentTpl = viewChild<TemplateRef<unknown>>('contentTpl')
  // protected content: Node[][] = [];

  protected component: Type<TableRowComponent> | null = null;
  protected componentInputs = {
    suqad: [{ id: 0, name: "Felipe Maia", skills: "Back;Front;Devops"},
            { id: 1, name: "Pedro Henrique", skills: "Back;Devops"},
            { id: 2,name: "Jose Rodrigues", skills: "Back;Cloud"},
    ]
  }

  constructor(private userService: UserService,
              private modal: NgbModal,
  ) {

    this.rows = this.row;
    effect(() => console.log(`Rows Atualizadas:${this.rowsRx.length}`), {debugName:"effect in rows"});

    this.rows$ = toObservable(this.rowsRx);

    this.rows$.subscribe((value) => {
      // console.table(value);
    })

    this.users$ = this.userService.ListUsers();

    this.users$.subscribe((users) => console.log(users))
  }


  onPage(e:any){
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log('paged!', e);
    }, 100);
  }

  onDetailToggle(e:any){
    console.log('Detail Toggled', e);
  }

  toggleExpandRow(row:any) {
    console.log('Toggled Expand Row!', row);
    this.table.rowDetail.toggleExpandRow(row);
  }

  ngOnInit(): void {
    // const table = new DataTables( this.selector , this.config)
    // this.gridInit();
    // this.vcr.createComponent(TableRowComponent);
    // this.vcr.createEmbeddedView(this.contentTpl()!).rootNodes
    // console.log(this.vcr)

    this.rowsRx.update((value) => [...this.rows]);

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

  ChangeToggleState(row: any){
    console.log(row);
      row.disable = ! row.disable;
    console.log(row);


    // console.table(this.rows)

    const rowsMod =  this.rows.map((item) =>
    {
      if(row.id === item.id) row.disable = item.disable
      return item
    });

    this.rows = rowsMod;

    this.rowsRx.update((value) => [...value])

    // console.table(this.rowsRx)

  }

  AddMember()
  {
    this.rowsRx.update((value) => {
      const lastId = value.at(-1);
      const newMember = {id: lastId.id + 1, name: "Fulano Maia", skills: "Back;Front;Devops;Pedreiro;Ladrilheiro", age: 45, disable: false}
      return [...value, newMember ]
    })
  }

 getSkills(row:any)
 {
  const { skills } = row
  // console.log(skills)
  const resumoSkills =  skills.map(({ name }: any) =>  name )
  // console.log(resumoSkills)
  return resumoSkills
 }


  RemoveMember()
  {

  }

  closeSelection()
  {
    console.log(this.selectNames);
  }




  open(row: any) {
    this.modalRef = this.modal.open(ModalComponent, {
      centered: true,
			backdrop: 'static',
			ariaLabelledBy: 'edit',

		});

    console.log(row)

    this.modalRef.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  // gridInit() {
  //   // Formatting function for row details - modify as you need
  //   function format(d: any) {
  //     // `d` is the original data object for the row
  //     return (
  //         '<dl>' +
  //         '<dt>Full name:</dt>' +
  //         '<dd>' +
  //         d.name +
  //         '</dd>' +
  //         '<dt>Extension number:</dt>' +
  //         '<dd>' +
  //         d.extn +
  //         '</dd>' +
  //         '<dt>Extra info:</dt>' +
  //         '<dd>And any further details here (images etc)...</dd>' +
  //         '</dl>'
  //     );
  //   }

  //   let table = new DataTables('#example', {
  //     ajax: '../ajax/data/objects.txt',
  //     columns: [
  //         {
  //             className: 'dt-control',
  //             orderable: false,
  //             data: null,
  //             defaultContent: ''
  //         },
  //         { data: 'userId' },
  //         { data: 'id' },
  //         { data: 'title' }
  //     ],
  //     order: [[1, 'asc']]
  //   });

  //     // Add event listener for opening and closing details
  //     table.on('click', 'td.dt-control', function (e) {
  //     //   let tr = e.target.closest('tr');
  //     //   let row = table.row(tr);

  //     //   if (row.child.isShown()) {
  //     //       // This row is already open - close it
  //     //       row.child.hide();
  //     //   }
  //     //   else {
  //     //       // Open this row
  //     //       row.child(format(row.data())).show();
  //     //   }

  //     });
  // }


}
