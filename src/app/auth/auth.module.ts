import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { Routes, RouterModule } from '@angular/router';
import {AuthRoutingModule} from './auth-routing.module'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FormProfileComponent } from './user-profile/form-profile/form-profile.component';

@NgModule({
  declarations: [LoginComponent, LogoutComponent, RegisterComponent, ForgotPasswordComponent, ChangePasswordComponent, UserProfileComponent, FormProfileComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    FormProfileComponent,
    LoginComponent, LogoutComponent, RegisterComponent, ForgotPasswordComponent, ChangePasswordComponent
  ]
 
})
export class AuthModule { }
