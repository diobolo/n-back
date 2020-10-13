import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NBackComponent } from './n-back.component';

describe('NBackComponent', () => {
  let component: NBackComponent;
  let fixture: ComponentFixture<NBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
