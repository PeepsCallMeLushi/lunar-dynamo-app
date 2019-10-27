import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FcRulesComponent } from './fc-rules.component';

describe('FcRulesComponent', () => {
  let component: FcRulesComponent;
  let fixture: ComponentFixture<FcRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FcRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
