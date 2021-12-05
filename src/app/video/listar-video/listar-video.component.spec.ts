import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarVideoComponent } from './listar-video.component';

describe('ListarVideoComponent', () => {
  let component: ListarVideoComponent;
  let fixture: ComponentFixture<ListarVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
