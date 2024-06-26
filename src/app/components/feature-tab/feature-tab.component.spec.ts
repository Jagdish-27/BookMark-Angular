import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureTabComponent } from './feature-tab.component';

describe('FeatureTabComponent', () => {
  let component: FeatureTabComponent;
  let fixture: ComponentFixture<FeatureTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeatureTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
