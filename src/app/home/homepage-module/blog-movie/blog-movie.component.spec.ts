import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogMovieComponent } from './blog-movie.component';

describe('BlogMovieComponent', () => {
  let component: BlogMovieComponent;
  let fixture: ComponentFixture<BlogMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
