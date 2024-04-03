import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadExtComponent } from './download-ext.component';

describe('DownloadExtComponent', () => {
  let component: DownloadExtComponent;
  let fixture: ComponentFixture<DownloadExtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownloadExtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DownloadExtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
