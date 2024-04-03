import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleBookmarkComponent } from './simple-bookmark.component';

describe('SimpleBookmarkComponent', () => {
  let component: SimpleBookmarkComponent;
  let fixture: ComponentFixture<SimpleBookmarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleBookmarkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimpleBookmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
