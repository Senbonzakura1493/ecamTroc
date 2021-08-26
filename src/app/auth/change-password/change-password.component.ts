import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {ActivatedRoute} from '@angular/router';
import { AuthService } from '../auth.service';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm: FormGroup;
  errors = null;
  constructor(
    public router: Router,
    public fb: FormBuilder,
    route: ActivatedRoute,
    public authService: AuthService,private toast : ToastrService
  ) { 
    this.changePasswordForm = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required],
      password_confirmation: ['',Validators.required],
      passwordToken: ['']
    })
    route.queryParams.subscribe((params) => {
      this.changePasswordForm.controls['passwordToken'].setValue(params['token']);
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.authService.resetPassword(this.changePasswordForm.value).subscribe(
      result => {
        this.toast.success('Password has been updated');
        this.changePasswordForm.reset();
        this.router.navigate(['/login']);
      },
      error => {
        this.toast.error('Une erreur est survenue')
        this.handleError(error);
      }
    );
  }

  handleError(error) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
      } else {
          // server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      return throwError(errorMessage);
  }

}
