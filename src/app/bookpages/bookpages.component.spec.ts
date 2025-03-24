import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookpagesComponent } from './bookpages.component';

describe('BookpagesComponent', () => {
  let component: BookpagesComponent;
  let fixture: ComponentFixture<BookpagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookpagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
