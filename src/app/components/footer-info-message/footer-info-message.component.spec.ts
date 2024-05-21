import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterInfoMessageComponent } from './footer-info-message.component';

describe('FooterInfoMessageComponent', () => {
  let component: FooterInfoMessageComponent;
  let fixture: ComponentFixture<FooterInfoMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterInfoMessageComponent]
    });
    fixture = TestBed.createComponent(FooterInfoMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
