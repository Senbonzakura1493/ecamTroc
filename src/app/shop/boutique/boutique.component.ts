import { Component, OnInit } from '@angular/core';
import {BoutiqueServiceService} from './boutique-service.service';
import { Observable,BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.scss']
})
export class BoutiqueComponent implements OnInit {
  isLoading$: Observable<boolean>;
  items : any;
  constructor(public itemsService : BoutiqueServiceService) {
    this.isLoading$ = this.itemsService.isLoading$;
   }
  ngOnInit(): void {
    this.itemsService.itemsSubject.subscribe((data:any)=>{
      if(data == false){
        this.itemsService.isLoadingSubject.next(true);
        this.itemsService.APIgetItems().subscribe(async(data:any)=>{
          console.log(data);
          this.items = data.body.collaborations;
          this.itemsService.itemsSubject.next(data.body.collaborations)
          setTimeout(() => {
            this.itemsService.isLoadingSubject.next(false);
          }, );
          
        })
      }
      else{
        this.itemsService.itemsSubject.subscribe((data:any)=>{
          this.items=data;
          setTimeout(() => {
            this.itemsService.isLoadingSubject.next(false);
          }, );
        })
       
      }  
    })
    
      
  }

}
