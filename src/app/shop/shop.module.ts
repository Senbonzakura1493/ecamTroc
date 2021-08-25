import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop/shop.component';
import {AuthModule} from '../auth/auth.module'
import { ShopRoutingModule } from '../shop/shop-routing.module';
import { RouterModule } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { NewsComponent } from './shop/news/news.component';
import { LatestComponent } from './shop/latest/latest.component';
import { NoteHomeComponent } from './shop/note-home/note-home.component';
import { SliderComponent } from './shop/slider/slider.component';
import { LayoutComponent } from './layout/layout.component';
import {BoutiqueComponent}from './boutique/boutique.component'
import {MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import { CheckoutComponent } from './checkout/checkout.component';
import { PanierComponent } from './checkout/panier/panier.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ItemComponent} from './item/item.component';
@NgModule({
  declarations: [ShopComponent,
     BasketComponent, 
     ConditionsComponent, 
     NewsComponent, 
     LatestComponent, 
     NoteHomeComponent, 
     SliderComponent, 
     LayoutComponent, 
     BoutiqueComponent,
     ItemComponent,
     CheckoutComponent, PanierComponent,
     ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ShopRoutingModule,
    AuthModule
 
  ],
  exports:[ShopComponent ],
  providers:[{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}]
})
export class ShopModule { }
