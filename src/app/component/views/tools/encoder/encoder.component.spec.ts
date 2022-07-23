import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncoderComponent } from './encoder.component';

describe('EncoderComponent', () => {
  let component: EncoderComponent;
  let fixture: ComponentFixture<EncoderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncoderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
