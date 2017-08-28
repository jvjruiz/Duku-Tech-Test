import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldGroupComponent } from './form-field-group.component';

describe('FormFieldGroupComponent', () => {
  let component: FormFieldGroupComponent;
  let fixture: ComponentFixture<FormFieldGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFieldGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
