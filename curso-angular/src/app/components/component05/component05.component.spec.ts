import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component05Component } from './component05.component';

describe('Component05Component', () => {
  let component: Component05Component;
  let fixture: ComponentFixture<Component05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component05Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
