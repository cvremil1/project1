import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyYardComponent } from './dummy-yard.component';

describe('DummyYardComponent', () => {
  let component: DummyYardComponent;
  let fixture: ComponentFixture<DummyYardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DummyYardComponent]
    });
    fixture = TestBed.createComponent(DummyYardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
