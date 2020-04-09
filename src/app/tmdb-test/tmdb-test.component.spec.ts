import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TmdbTestComponent } from "./tmdb-test.component";

describe("TmdbTestComponent", () => {
  let component: TmdbTestComponent;
  let fixture: ComponentFixture<TmdbTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TmdbTestComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmdbTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
