import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownGeneratorComponent } from './markdown-generator.component';

describe('MarkdownGeneratorComponent', () => {
  let component: MarkdownGeneratorComponent;
  let fixture: ComponentFixture<MarkdownGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkdownGeneratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarkdownGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
