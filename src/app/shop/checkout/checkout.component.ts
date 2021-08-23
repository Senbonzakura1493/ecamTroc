import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { FormBuilder, FormGroup,Validators,FormControl } from "@angular/forms";
import { Observable,BehaviorSubject } from 'rxjs';
import {AuthStateService} from '../../shared/auth-state.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  
  isLoading$: Observable<boolean>;
  isAuth$ : Observable<boolean>;
  panier= 'active';
  profile ='';
  login :boolean;
  delivering ='';
  payement='';
  constructor(public authService: AuthService , private authState : AuthStateService) { 
    this.isLoading$ = this.authService.isLoading$
    this.isAuth$ = this.authState.userAuthState$;
    this.authState.userAuthState.subscribe((data:any)=>{
      this.login= !data;
    })
    
  }

  ngOnInit(): void {
    this.authState.userAuthState.subscribe((data:any)=>{
      this.login= !data;
    })
  }

  onChangeTabToPanier(){
    this.panier= 'active';
    this.profile ='';
    this.delivering ='';
    this.payement='';
    
  }
  onChangeTabToProfile(){
    if(this.login == false){
      this.authService.isLoadingSubject.next(true);
      this.authService.getNextValueProfileInfos().subscribe(async (data:any)=>{
        if(data){
          this.panier= '';
          this.profile ='active';
          this.delivering ='';
          this.payement='';
        }
        else {
          this.authService.profileUser().subscribe(async (data:any)=>{
            if(data.status==200){
              this.authService.profileInfoSubject.next(data.body)
              setTimeout(() => {
                this.panier= '';
                this.profile ='active';
                this.delivering ='';
                this.payement='';
              }, );   
            }
          })
        }
      })    
    }
    else {
        this.panier= '';
        this.profile ='active';
        this.delivering ='';
        this.payement='';
    }
    
  }
  onChangeTabToDelivering(){
    this.panier= '';
    this.profile ='';
    this.delivering ='active';
    this.payement='';
    
  }
  onChangeTabToPayement(){
    this.panier= '';
    this.profile ='';
    this.delivering ='';
    this.payement='active';
    
  }
 

}
