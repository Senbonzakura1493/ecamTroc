import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


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
{path: '404', component: PageNotFoundComponent},
{path: '**', redirectTo: '/404'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
