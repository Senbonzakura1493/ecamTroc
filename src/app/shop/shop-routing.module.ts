import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { BoutiqueComponent} from './boutique/boutique.component'
import {ItemComponent} from './item/item.component'
import { LayoutComponent } from './layout/layout.component';
import { PropositionComponent } from './proposition/proposition.component';

const approutes: Routes = [{
  path : '',
  component : LayoutComponent, 
  children : [
    {path: 'collaborations', component: BoutiqueComponent},
    {path: 'proposition',component: PropositionComponent},
    {path: 'collaborations/:idItem', component: ItemComponent},
    {path: 'home',  component : ShopComponent },
    { path: '', redirectTo:'home', pathMatch:'full'}
  ]},
  
  
];


@NgModule({
  imports: [RouterModule.forChild(approutes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
