import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoMainComponent } from './gestao-main.component';

describe('GestaoMainComponent', () => {
  let component: GestaoMainComponent;
  let fixture: ComponentFixture<GestaoMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestaoMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestaoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
