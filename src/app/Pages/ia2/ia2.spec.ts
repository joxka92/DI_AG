import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IA2 } from './ia2';

describe('IA2', () => {
  let component: IA2;
  let fixture: ComponentFixture<IA2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IA2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IA2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
