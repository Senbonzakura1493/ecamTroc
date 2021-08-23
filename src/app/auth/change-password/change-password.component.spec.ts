import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ChangePasswordComponent } from './change-password.component';
import { RouterTestingModule } from "@angular/router/testing";
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
describe('ChangePasswordComponent', () => {
  let component: ChangePasswordComponent;
  let fixture: ComponentFixture<ChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePasswordComponent ],
      imports: [
        RouterModule,
        HttpClientModule,
        RouterTestingModule.withRoutes([])
      ],
      providers: [ MatDialogRef, FormBuilder],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
