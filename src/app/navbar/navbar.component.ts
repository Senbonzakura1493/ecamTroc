import { Component, OnInit } from '@angular/core';
import { mixinColor } from '@angular/material/core';
import {MatDialog} from '@angular/material/dialog';
import {BasketComponent} from '../shop/basket/basket.component';
import {Overlay} from '@angular/cdk/overlay';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  opencart = false ;
  constructor(public dialog: MatDialog,public overlay: Overlay) { 
    
  }

  ngOnInit( ): void {

  }
 
  //fonctions d'ouverture des modals
  openDialog(mobile?): void {

    if(this.opencart == true ){
      this.dialog.closeAll()
      this.opencart = false;
    }
    else{
      if(mobile == true ){
        let dialogRef = this.dialog.open(BasketComponent, {
          height :"100%",
          width :"100%",
          panelClass:['mat-dialog-color','mat-dialog-color-mobile'],
          position: { right: '0'},
          autoFocus : false,
        },);
      }
      else{
      let dialogRef = this.dialog.open(BasketComponent, {
        height :"100%",
        width :"30%",
        panelClass: 'mat-dialog-color',
        position: { right: '0'},
        autoFocus : false,
      },);
    }
  
      this.opencart = true ;
    }
    
    
  }

}
