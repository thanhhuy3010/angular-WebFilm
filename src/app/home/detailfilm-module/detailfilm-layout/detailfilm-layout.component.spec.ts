import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailfilmLayoutComponent } from './detailfilm-layout.component';

describe('DetailfilmLayoutComponent', () => {
  let component: DetailfilmLayoutComponent;
  let fixture: ComponentFixture<DetailfilmLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailfilmLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailfilmLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
