import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticnavbarComponent } from './staticnavbar.component';

describe('StaticnavbarComponent', () => {
  let component: StaticnavbarComponent;
  let fixture: ComponentFixture<StaticnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
