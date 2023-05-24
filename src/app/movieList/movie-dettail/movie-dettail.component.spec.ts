import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDettailComponent } from './movie-dettail.component';

describe('MovieDettailComponent', () => {
  let component: MovieDettailComponent;
  let fixture: ComponentFixture<MovieDettailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieDettailComponent]
    });
    fixture = TestBed.createComponent(MovieDettailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
