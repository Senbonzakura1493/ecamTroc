import { Component, OnInit } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
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
 
  
  

}
