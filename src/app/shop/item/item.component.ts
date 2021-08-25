import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import {ItemService} from './item.service';
import {BasketService} from '../basket/basket.service'
import { Observable,BehaviorSubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr'; 

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  private sub: any;
  private id : any;
  item: any ;
  availablecolors : any;
  items = [];
  selected_hours: string;
  isLoading$: Observable<boolean>;
  constructor(private toastr: ToastrService, private activatedRoute: ActivatedRoute,public itemService : ItemService, public BasketService : BasketService ) { 
      this.isLoading$ = this.itemService.isLoading$;
      this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = params['idItem'];
      this.itemService.isLoadingSubject.next(true);
      this.itemService.APIgetItem(this.id).subscribe((data:any)=>{
        if(data){
          console.log(data);
          this.item = data.body.item;
          this.items = data.body.items;
          this.availablecolors = this.items.length;

          setTimeout(() => {
            this.itemService.isLoadingSubject.next(false);
          }, );
        }
        
      })
    })
  }

  ngOnInit(): void {
  }

  addToCart(item) {
    this.BasketService.addToCart(item , this.selected_hours);
  }

 
}
