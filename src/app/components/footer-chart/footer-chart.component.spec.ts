import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterChartComponent } from './footer-chart.component';

describe('FooterChartComponent', () => {
  let component: FooterChartComponent;
  let fixture: ComponentFixture<FooterChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterChartComponent]
    });
    fixture = TestBed.createComponent(FooterChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
