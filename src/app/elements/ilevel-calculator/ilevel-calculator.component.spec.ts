import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IlevelCalculatorComponent } from './ilevel-calculator.component';

describe('IlevelCalculatorComponent', () => {
  let component: IlevelCalculatorComponent;
  let fixture: ComponentFixture<IlevelCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IlevelCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IlevelCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
