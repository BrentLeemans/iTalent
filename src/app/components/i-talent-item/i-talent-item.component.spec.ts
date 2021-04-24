import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ITalentItemComponent } from './i-talent-item.component';

describe('ITalentItemComponent', () => {
  let component: ITalentItemComponent;
  let fixture: ComponentFixture<ITalentItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ITalentItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ITalentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
