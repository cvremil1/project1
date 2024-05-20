import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractViewChartComponent } from './contract-view-chart.component';

describe('ContractViewChartComponent', () => {
  let component: ContractViewChartComponent;
  let fixture: ComponentFixture<ContractViewChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContractViewChartComponent]
    });
    fixture = TestBed.createComponent(ContractViewChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
