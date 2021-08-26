import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop/shop.component';
import { ShopRoutingModule } from '../shop/shop-routing.module';

import { ConditionsComponent } from './conditions/conditions.component';
import { NewsComponent } from './shop/news/news.component';
import { LatestComponent } from './shop/latest/latest.component';
import { NoteHomeComponent } from './shop/note-home/note-home.component';
import { SliderComponent } from './shop/slider/slider.component';
import {BoutiqueComponent}from './boutique/boutique.component'
import {MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ItemComponent} from './item/item.component';
import { AuthModule } from '../auth/auth.module';
import { LayoutComponent } from './layout/layout.component';
import { PropositionComponent } from './proposition/proposition.component';


@NgModule({
  declarations: [ShopComponent, 
     ConditionsComponent, 
     NewsComponent, 
     LatestComponent, 
     NoteHomeComponent, 
     SliderComponent, 
     BoutiqueComponent,
     ItemComponent,
     LayoutComponent,
     PropositionComponent
     ],
  imports: [
    CommonModule,
    HttpClientModule,
    ShopRoutingModule,
    AuthModule
  ],
  exports:[ShopComponent],
  providers:[{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}]
})
export class ShopModule { }
