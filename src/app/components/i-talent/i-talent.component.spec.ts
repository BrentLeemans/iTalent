import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ITalentComponent } from './i-talent.component';

describe('ITalentComponent', () => {
  let component: ITalentComponent;
  let fixture: ComponentFixture<ITalentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ITalentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ITalentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
