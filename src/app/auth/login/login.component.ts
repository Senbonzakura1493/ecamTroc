import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup } from "@angular/forms";
import { TokenService } from '../../shared/token.service';
import { AuthStateService } from '../../shared/auth-state.service';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() fromCheckout :boolean;
  isLoading$ : Observable<boolean>;
  isAuth$ : boolean;
  register :boolean = false ;
  loginForm: FormGroup;
  errors = null;
  profile_infos : any;
  guest : boolean = false ;
  constructor(
    public router: Router,
    public fb: FormBuilder,
    public authService: AuthService,
    private token: TokenService,
    private authState: AuthStateService,
    private toast : ToastrService
  ) { 
    this.isLoading$ = this.authService.isLoading$
    this.authState.userAuthState.subscribe(async(data:boolean)=>{
      this.isAuth$ = data;
      setTimeout(() => {
        if(this.isAuth$ == true  && this.fromCheckout == undefined){
          this.router.navigateByUrl('/user-profile')
        }
        // si je suis connecté et que je viens du checkout idem 
        this.authService.getNextValueProfileInfos().subscribe(async (data:any)=>{
          if(this.isAuth$ == true  && data != undefined && this.fromCheckout == undefined){
            this.router.navigateByUrl('/user-profile')
          }
      })
      }, );   
    });
    this.loginForm = this.fb.group({
      email: [],
      password: []
    })
   }

  ngOnInit(): void {
   
  }
  onSubmit() {
    this.authService.isLoadingSubject.next(true);
    this.authService.signin(this.loginForm.value).subscribe(
      result => {
        console.log(result)
        if(result.status==200){
        this.profile_infos = result.body.user_info;
        this.authService.profileInfoSubject.next(result.body.user_info)
        this.responseHandler(result);
        setTimeout(() => {
          this.toast.success('Vous êtes connecté ! ');
        }, );
        }
      },
      error => {
        this.errors = error.error;
        this.toast.error(this.errors.error)
      },() => {
        this.authState.setAuthState(true);
        this.loginForm.reset()
      }
    );
    
}

  // Handle response
  responseHandler(data){
    this.token.handleData(data.body.access_token);
    if(this.fromCheckout == true){
      this.router.navigate[('/checkout')];
    }
  }

  onRegister(){
    this.register = true;
  }
  onGuestClick(){
    this.guest = true;
  }
}
