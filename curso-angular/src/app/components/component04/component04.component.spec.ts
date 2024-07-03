import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component04Component } from './component04.component';

describe('Component04Component', () => {
  let component: Component04Component;
  let fixture: ComponentFixture<Component04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component04Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
