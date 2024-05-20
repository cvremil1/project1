import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandViewchartComponent } from './expand-viewchart.component';

describe('ExpandViewchartComponent', () => {
  let component: ExpandViewchartComponent;
  let fixture: ComponentFixture<ExpandViewchartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpandViewchartComponent]
    });
    fixture = TestBed.createComponent(ExpandViewchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
