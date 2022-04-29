import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdtechplayerComponent } from './edtechplayer.component';

describe('EdtechplayerComponent', () => {
  let component: EdtechplayerComponent;
  let fixture: ComponentFixture<EdtechplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdtechplayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdtechplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
