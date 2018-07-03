import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsComComponent } from './news-com.component';

describe('NewsComComponent', () => {
  let component: NewsComComponent;
  let fixture: ComponentFixture<NewsComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
