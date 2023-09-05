import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineasNegociosComponent } from './lineas-negocios.component';

describe('LineasNegociosComponent', () => {
  let component: LineasNegociosComponent;
  let fixture: ComponentFixture<LineasNegociosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineasNegociosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineasNegociosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
