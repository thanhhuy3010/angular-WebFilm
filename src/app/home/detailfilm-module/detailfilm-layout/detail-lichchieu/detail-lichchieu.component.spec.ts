import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLichchieuComponent } from './detail-lichchieu.component';

describe('DetailLichchieuComponent', () => {
  let component: DetailLichchieuComponent;
  let fixture: ComponentFixture<DetailLichchieuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailLichchieuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailLichchieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
