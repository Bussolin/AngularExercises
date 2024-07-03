import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component07Component } from './component07.component';

describe('Component07Component', () => {
  let component: Component07Component;
  let fixture: ComponentFixture<Component07Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component07Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
