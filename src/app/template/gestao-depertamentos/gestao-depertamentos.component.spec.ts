import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoDepertamentosComponent } from './gestao-depertamentos.component';

describe('GestaoDepertamentosComponent', () => {
  let component: GestaoDepertamentosComponent;
  let fixture: ComponentFixture<GestaoDepertamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestaoDepertamentosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestaoDepertamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
