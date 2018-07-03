import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DosthComponent } from './dosth.component';

describe('DosthComponent', () => {
  let component: DosthComponent;
  let fixture: ComponentFixture<DosthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DosthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DosthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
