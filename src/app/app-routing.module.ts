import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import {LayoutComponent} from './shop/layout/layout.component';

const routes: Routes = [{ 
  path: '',
  loadChildren: () =>
  import('./shop/shop.module').then((m) => m.ShopModule) 
},
{ 
  path: 'auth',
  loadChildren: () =>
  import('./auth/auth.module').then((m) => m.AuthModule) 
},
 
{path: 'contact', component: ContactComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
