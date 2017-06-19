import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkerBudgetComponent } from './marker-budget.component';

describe('MarkerBudgetComponent', () => {
  let component: MarkerBudgetComponent;
  let fixture: ComponentFixture<MarkerBudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkerBudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkerBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
