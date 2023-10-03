import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyConventerComponent } from './currency-conventer.component';

describe('CurrencyConventerComponent', () => {
  let component: CurrencyConventerComponent;
  let fixture: ComponentFixture<CurrencyConventerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrencyConventerComponent]
    });
    fixture = TestBed.createComponent(CurrencyConventerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
