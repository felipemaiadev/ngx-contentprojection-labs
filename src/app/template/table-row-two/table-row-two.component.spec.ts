import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRowTwoComponent } from './table-row-two.component';

describe('TableRowTwoComponent', () => {
  let component: TableRowTwoComponent;
  let fixture: ComponentFixture<TableRowTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableRowTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableRowTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
