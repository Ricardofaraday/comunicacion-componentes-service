import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoAAComponent } from './hijo-aa.component';

describe('HijoAAComponent', () => {
  let component: HijoAAComponent;
  let fixture: ComponentFixture<HijoAAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HijoAAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HijoAAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
