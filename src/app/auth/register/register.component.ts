import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup } from "@angular/forms";
import { TokenService } from '../../shared/token.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  errors = null;

  constructor(private token: TokenService,
    public router: Router,
    public fb: FormBuilder,
    public authService: AuthService
  ) {
    this.registerForm = this.fb.group({
      email: [''],
      password: [''],
      password_confirmation: ['']
    })
   }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.registerForm.value){
      this.authService.register(this.registerForm.value).subscribe(
        result => {
          if(result.status=201){
            //toaster profil créé
            var creditentials = {
              email :this.registerForm.controls.email.value,
              password :this.registerForm.controls.password.value
            }
            setTimeout(() => {
              this.authService.signin(creditentials).subscribe(
                result => {
                  this.responseHandler(result);
                }
              );
              this.router.navigate(['/']);
            },1000 );
            
          }
        },
        error => {
          this.errors = error.error;
        },
        () => {
          this.registerForm.reset()
          this.router.navigate(['login']);
        }
      )
    }
    
  }
  // Handle response
  responseHandler(data){
    this.token.handleData(data.access_token);
  }

}
