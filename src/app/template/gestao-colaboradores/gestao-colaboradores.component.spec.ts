import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoColaboradoresComponent } from './gestao-colaboradores.component';

describe('GestaoColaboradoresComponent', () => {
  let component: GestaoColaboradoresComponent;
  let fixture: ComponentFixture<GestaoColaboradoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestaoColaboradoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestaoColaboradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
