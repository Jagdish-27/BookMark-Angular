import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicChangeComponent } from './dynamic-change.component';

describe('DynamicChangeComponent', () => {
  let component: DynamicChangeComponent;
  let fixture: ComponentFixture<DynamicChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicChangeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DynamicChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
