import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FcInfoComponent } from './fc-info.component';

describe('FcInfoComponent', () => {
  let component: FcInfoComponent;
  let fixture: ComponentFixture<FcInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FcInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
