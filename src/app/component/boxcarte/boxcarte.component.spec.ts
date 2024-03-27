import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxcarteComponent } from './boxcarte.component';

describe('BoxcarteComponent', () => {
  let component: BoxcarteComponent;
  let fixture: ComponentFixture<BoxcarteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoxcarteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoxcarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
