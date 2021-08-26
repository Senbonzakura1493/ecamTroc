import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { BasketService} from './basket.service'
@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  items = JSON.parse(localStorage.getItem('basket'))
  constructor(public dialogRef: MatDialogRef<BasketComponent>,public dialog: MatDialog, public basketService : BasketService) {
   
   }

  ngOnInit(): void {
  }
  closeDialog(){
    this.dialogRef.close()
  }

}
