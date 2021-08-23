import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../shop/layout/layout.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import {ChangePasswordComponent} from './change-password/change-password.component'
import { UserProfileComponent } from './user-profile/user-profile.component';
const routes: Routes = [{
  path : '',
  component : LayoutComponent, 
  children : [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'forgot-password', component: ForgotPasswordComponent},
    {path: 'change-password', component: ChangePasswordComponent },
    {path: 'user-profile', component: UserProfileComponent },
    {path: 'logout',  component : LogoutComponent },
    { path: '', redirectTo:'login', pathMatch:'full'}
  ]},
  
  
];;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
