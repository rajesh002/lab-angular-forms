import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormvalidateComponent } from './formvalidate.component';

describe('FormvalidateComponent', () => {
  let component: FormvalidateComponent;
  let fixture: ComponentFixture<FormvalidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormvalidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormvalidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
