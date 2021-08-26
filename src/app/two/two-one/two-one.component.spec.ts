import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoOneComponent } from './two-one.component';

describe('TwoOneComponent', () => {
  let component: TwoOneComponent;
  let fixture: ComponentFixture<TwoOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
