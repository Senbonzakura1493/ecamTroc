import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  resetForm: FormGroup;
  errors = null;
  successMsg : boolean = false;

  constructor(public fb: FormBuilder,
    public authService: AuthService, private toast :ToastrService) { }

  ngOnInit(): void {
    this.resetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }
  onSubmit(){
    this.authService.sendResetPasswordLink(this.resetForm.value).subscribe(
      (result) => {
        if(result.status == 200){
          this.successMsg = true;
          this.toast.success('Email envoyé');
        }
      },(error) => {
        this.errors = error.error.message;
        this.toast.warning(this.errors)
      })
  }

}
