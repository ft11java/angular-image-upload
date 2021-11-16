import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdatabaseFileComponent } from './viewdatabase-file.component';

describe('ViewdatabaseFileComponent', () => {
  let component: ViewdatabaseFileComponent;
  let fixture: ComponentFixture<ViewdatabaseFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewdatabaseFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdatabaseFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
