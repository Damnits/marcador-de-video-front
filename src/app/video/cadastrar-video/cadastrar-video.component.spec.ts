import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarVideoComponent } from './cadastrar-video.component';

describe('CadastrarVideoComponent', () => {
  let component: CadastrarVideoComponent;
  let fixture: ComponentFixture<CadastrarVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
