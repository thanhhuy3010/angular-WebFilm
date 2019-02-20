import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieComingsoonComponent } from './movie-comingsoon.component';

describe('MovieComingsoonComponent', () => {
  let component: MovieComingsoonComponent;
  let fixture: ComponentFixture<MovieComingsoonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieComingsoonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieComingsoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
