import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRowThreeComponent } from './table-row-three.component';

describe('TableRowThreeComponent', () => {
  let component: TableRowThreeComponent;
  let fixture: ComponentFixture<TableRowThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableRowThreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableRowThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
