import { Component, Input, OnInit, Optional, Self } from '@angular/core';
import { NgbActiveModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectComponent } from '@ng-select/ng-select';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user.service';
import { DataService } from '../services/data.service';
import { of } from 'rxjs';
import { User } from '../models/entities/user.model';


@Component({
  selector: `modal-edit-colaborador`,
  templateUrl: './modal-time.component.html',
  styleUrls: ['./modal-time.component.css'],
  imports:[NgSelectComponent, CommonModule]
})
export class ModalComponent implements OnInit {
  
  
  @Input() modalRef?: NgbModalRef
  
  skills: any = [];
  selected: any;
  constructor(
    public activeModal: NgbActiveModal,
    @Optional() private dataService: DataService
  ) {}

  ngOnInit() {
    this.skills = this.dataService.getSkills("");
    // this.skills = of([]);
    console.log(this.activeModal)
  }

  close(reason: string): void {
    console.log(reason);
    this.activeModal.close(reason);
  }
}
