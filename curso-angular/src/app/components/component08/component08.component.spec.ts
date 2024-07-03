import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component08Component } from './component08.component';

describe('Component08Component', () => {
  let component: Component08Component;
  let fixture: ComponentFixture<Component08Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component08Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
