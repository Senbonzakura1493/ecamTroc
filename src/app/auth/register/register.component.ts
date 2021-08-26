import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup } from "@angular/forms";
import { TokenService } from '../../shared/token.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  errors = null;

  constructor(private token: TokenService,private toast:ToastrService,
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
    if(this.registerForm.value.password.length < 6){
      this.toast.warning("Le mot de passe doit faire plus de 6 caractères")
    }
    else {
      if(this.registerForm.value){
        this.authService.register(this.registerForm.value).subscribe(
          result => {
            if(result.status=201){
              this.toast.success("Compte créé avec succès ! ")
              setTimeout(() => {
                this.authService.isLoadingSubject.next(false);
                this.router.navigate(['/']);
              }, );
              
            }
          },
          error => {
            this.toast.error("Une erreur est survenu")
            this.errors = error.error;
          },
          () => {
            this.registerForm.reset()
            this.router.navigate(['login']);
          }
        )
      }
    }
   
    
  }
  // Handle response
  responseHandler(data){
    this.token.handleData(data.access_token);
  }

}
