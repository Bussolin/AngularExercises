import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component06Component } from './component06.component';

describe('Component06Component', () => {
  let component: Component06Component;
  let fixture: ComponentFixture<Component06Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component06Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
