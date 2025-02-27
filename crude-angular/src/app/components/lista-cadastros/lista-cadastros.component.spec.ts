import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCadastrosComponent } from './lista-cadastros.component';

describe('ListaCadastrosComponent', () => {
  let component: ListaCadastrosComponent;
  let fixture: ComponentFixture<ListaCadastrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaCadastrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCadastrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
