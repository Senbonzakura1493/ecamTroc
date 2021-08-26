import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { LatestComponent } from './latest.component';

describe('LatestComponent', () => {
  let component: LatestComponent;
  let fixture: ComponentFixture<LatestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterModule,RouterTestingModule],
      declarations: [ LatestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
