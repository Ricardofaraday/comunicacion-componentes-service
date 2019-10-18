import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoBbComponent } from './hijo-bb.component';

describe('HijoBbComponent', () => {
  let component: HijoBbComponent;
  let fixture: ComponentFixture<HijoBbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HijoBbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HijoBbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
