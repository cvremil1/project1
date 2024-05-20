import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompuseComponent } from './compuse.component';

describe('CompuseComponent', () => {
  let component: CompuseComponent;
  let fixture: ComponentFixture<CompuseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompuseComponent]
    });
    fixture = TestBed.createComponent(CompuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
