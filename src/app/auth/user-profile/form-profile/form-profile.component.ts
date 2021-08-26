import { Component, OnInit,Input} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { FormBuilder, FormGroup,Validators,FormControl } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { AuthStateService } from '../../../shared/auth-state.service';
import { Observable,BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-form-profile',
  templateUrl: './form-profile.component.html',
  styleUrls: ['./form-profile.component.scss']
})
export class FormProfileComponent implements OnInit {
  isLoading$: Observable<boolean>;
  isAuth$: Boolean;
  @Input() fromCheckout :boolean;
  profileForm: FormGroup; 
  user_infos :any;
 
  constructor(public router: Router,
    public fb: FormBuilder,
    public authService: AuthService , public authState : AuthStateService, private toast :ToastrService) { 
      this.isLoading$ = this.authService.isLoading$; 
      this.authState.userAuthState.subscribe(async(data:any)=>{
        this.isAuth$ = data;
        if(this.isAuth$ == true){
          this.authService.getNextValueProfileInfos().subscribe((data:any)=>{
            this.user_infos = data;
           
            if(data != undefined){
                this.initFormProfile();
                setTimeout(() => {
                  this.authService.isLoadingSubject.next(false)
                }, );
              }
            else {
                this.authService.profileUser().subscribe((data:any)=>{
                  this.user_infos= data.body
                  this.authService.profileInfoSubject.next(data.body);
                  if(data != undefined){
                    this.initFormProfile();
                    setTimeout(() => {
                      this.authService.isLoadingSubject.next(false)
                    }, );
                  }
                })
              }
         
          })
        }
        if(this.isAuth$ == false){
          this.router.navigateByUrl('login');
        }
      })    
    }

  ngOnInit(): void {

  }

  initFormProfile(){
    this.profileForm = this.fb.group({
      email: new FormControl({value: this.user_infos.email,disabled :true}, Validators.required),
      firstname :[this.user_infos.firstname ,Validators.required],
      lastname:[this.user_infos.lastname ,Validators.required],
      schoolyear:[this.user_infos.schoolyear ,Validators.required],
      phone:[this.user_infos.phone ,Validators.required],
      
    })
    
  }

  onUpdateProfile(){
    this.authService.updateProfile(this.profileForm.value).subscribe((data:any)=>{
      if(data.status == 201 ){
        this.toast.success('profile mis à jours ! ')
      }
      
    },error => {
      this.toast.error('Une erreur est survenue lors de la mise à jours.')
    },)
  }
}
