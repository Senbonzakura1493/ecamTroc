import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup,Validators,FormControl } from "@angular/forms";
import { TokenService } from '../../shared/token.service';
import { AuthStateService } from '../../shared/auth-state.service';
import { Observable,BehaviorSubject } from 'rxjs';
import { ShopService } from 'src/app/shop/shop/shop.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  isLoading$: Observable<boolean>;
  isAuth$ : boolean;
  active_profile = "active";
  active_orders ="";
  profile = true;
  orders = false;
  previous = false;
  collaborations : any;
  user_id:any;
  courses:any;
  schoolyears:any;
  constructor(public router: Router,
    public fb: FormBuilder,private shopserv: ShopService,
    public authService: AuthService, public authState :AuthStateService) {
      this.isLoading$ = this.authService.isLoading$; 
      this.authService.isLoadingSubject.next(true);
      this.authState.userAuthState.subscribe(async(data:boolean)=>{
        this.isAuth$ = data;
        if(data == true ){
          this.authService.getNextValueProfileInfos().subscribe((data:any)=>{
            if(data != undefined){
              this.user_id = data.id;
              this.shopserv.getNextValueCourses().subscribe(courses => {
                this.courses = courses;
               
              } );
              this.shopserv.getNextValueSchoolyears().subscribe(schoolyears => {
                this.schoolyears = schoolyears;
              } );
              this.authService.getUserCollaborations(this.user_id).subscribe(data=>{
                if(data != null){
                this.collaborations = data.body;
                this.authService.collaborationsUserSubject.next(data.body);
                } 
              })
            }
           })     
          
        }
        
        
      })
    }

  ngOnInit(): void {
    
  }

  onChangeTabToOrders(){
    this.active_profile = "";
    this.active_orders = "active";
    this.profile = false;
    this.orders = true;
  }
  onChangeTabToProfile(){
    this.active_profile = "active";
    this.active_orders ="";
    this.profile = true;
    this.orders = false;
  }
  onShowPreviousOrders(){
    this.previous = true;
  }
  onHidePreviousOrders(){
    this.previous = false;
  }

}
