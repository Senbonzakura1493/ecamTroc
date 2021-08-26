import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import {ItemService} from './item.service';

import { Observable,BehaviorSubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr'; 
import { BoutiqueServiceService } from '../boutique/boutique-service.service';
import { ShopService } from '../shop/shop.service';
import { AuthStateService } from 'src/app/shared/auth-state.service';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  private sub: any;
  isAuth$: Boolean;
  id : any;
  collab: any ;
  isLoading$: Observable<boolean>;
  courses :any;
  schoolyears:any
  constructor(private toastr: ToastrService, private shopServ :ShopService,
    private activatedRoute: ActivatedRoute,private itemService : ItemService,private authState :AuthStateService,
    private boutiqueService:BoutiqueServiceService
     ) { 
       this.itemService.isLoadingSubject.next(true);
      this.authState.userAuthState.subscribe((data:any)=>{
        this.isAuth$ = data;
      })
     this.activatedRoute.params.subscribe(data=>{
      this.id = data['idItem'];
     })
     this.shopServ.getNextValueCourses().subscribe(courses => {
      this.courses = courses;
     
    } );
    this.shopServ.getNextValueSchoolyears().subscribe(schoolyears => {
      this.schoolyears = schoolyears;
    } ); 
     setTimeout(() => {
      this.boutiqueService.itemsSubject.subscribe((data:any)=>{
        if(data != undefined){
          this.collab = data.find(x => x.id == this.id)
        }
        this.itemService.isLoadingSubject.next(false);
      })
    }, );
   
  }

  ngOnInit(): void {
  }

  submitCollab() {
   
  }

 
}
