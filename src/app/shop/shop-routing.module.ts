import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { BoutiqueComponent} from './boutique/boutique.component'
import {ItemComponent} from './item/item.component'
import {CheckoutComponent} from './checkout/checkout.component'
import { LayoutComponent } from './layout/layout.component';

const approutes: Routes = [{
  path : '',
  component : LayoutComponent, 
  children : [
    {path: 'collaborations', component: BoutiqueComponent},
    {path: 'items/:idItem', component: ItemComponent},
    {path: 'checkout',component: CheckoutComponent},
    {path: 'shop',  component : ShopComponent },
    { path: '', redirectTo:'shop', pathMatch:'full'}
  ]},
  
  
];


@NgModule({
  imports: [RouterModule.forChild(approutes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
