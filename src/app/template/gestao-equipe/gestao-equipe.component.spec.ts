import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoEquipeComponent } from './gestao-equipe.component';

describe('GestaoEquipeComponent', () => {
  let component: GestaoEquipeComponent;
  let fixture: ComponentFixture<GestaoEquipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestaoEquipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestaoEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
