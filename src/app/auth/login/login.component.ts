import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
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
    console.log(this.token.isValidToken())
    this.authState.userAuthState.subscribe(async(data)=>{
      this.isAuth$ = data
      setTimeout(() => {
        if(this.token.isLoggedIn()){
          this.router.navigateByUrl('/user-profile')
        }
        else {
          this.authService.logout().subscribe(data=>{
            if(data){
              this.router.navigateByUrl('/login')
            }
          })
        }
   
      }, );   
    });
    this.loginForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
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
    
  }

  onRegister(){
    this.register = true;
  }
  onGuestClick(){
    this.guest = true;
  }
}
