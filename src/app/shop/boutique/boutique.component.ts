import { Component, OnInit } from '@angular/core';
import {BoutiqueServiceService} from './boutique-service.service';
import { Observable,BehaviorSubject } from 'rxjs';
import { ShopService } from '../shop/shop.service';
@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.scss']
})
export class BoutiqueComponent implements OnInit {
  isLoading$: Observable<boolean>;
  items : any;
  courses :any;
  schoolyears :any;
  filterValue1: any;
  filterValue2: any; 
  filterList = []; 
  constructor(public itemsService : BoutiqueServiceService, private shopServ : ShopService) {
    this.isLoading$ = this.itemsService.isLoading$;
    this.shopServ.getNextValueCourses().subscribe(courses => {
      this.courses = courses;
     
    } );
    this.shopServ.getNextValueSchoolyears().subscribe(schoolyears => {
      this.schoolyears = schoolyears;
    } );
   }
  ngOnInit(): void {
    this.itemsService.itemsSubject.subscribe((data:any)=>{
      if(data == false){
        this.itemsService.isLoadingSubject.next(true);
        this.itemsService.APIgetItems().subscribe(async(data:any)=>{
          if(data.status==200){
            this.items = data.body.collaborations;
            this.itemsService.itemsSubject.next(data.body.collaborations);
          setTimeout(() => {
            this.itemsService.isLoadingSubject.next(false);
          }, );
          }
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

  submitFilter(v1,v2){
    this.itemsService.isLoadingSubject.next(true);
    var v1_id ;
    this.courses.forEach(function (course) {
      if(course.name == v1){
        v1_id = course.id;
      }
    });
    var v2_id;
    this.schoolyears.forEach(function (scyear) {
      if(scyear.name == v2){
        v2_id = scyear.id;
      }
    });
    var listed= [];
    this.items.forEach(function (item) {
      if(item.schoolyear_id == v2_id && item.course_id == v1_id){
        listed.push(item);
      }
      return listed 
    });
    this.filterList = listed;
    this.itemsService.isLoadingSubject.next(false);

  }

}
