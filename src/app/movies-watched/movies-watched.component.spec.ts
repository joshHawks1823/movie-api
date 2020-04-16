import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesWatchedComponent } from './movies-watched.component';

describe('MoviesWatchedComponent', () => {
  let component: MoviesWatchedComponent;
  let fixture: ComponentFixture<MoviesWatchedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesWatchedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesWatchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
