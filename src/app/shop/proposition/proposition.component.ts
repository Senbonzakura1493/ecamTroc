import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { FormBuilder, FormGroup,Validators,FormControl } from "@angular/forms";
import { TokenService } from '../../shared/token.service';
import { AuthStateService } from '../../shared/auth-state.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-proposition',
  templateUrl: './proposition.component.html',
  styleUrls: ['./proposition.component.scss']
})
export class PropositionComponent implements OnInit {
  isLoading$: Observable<boolean>;
  isAuth$: Boolean;
  propositionForm: FormGroup; 
  user_infos :any;
  constructor(public router: Router,
    public fb: FormBuilder,
    public authService: AuthService , public authState : AuthStateService) { 
      this.isLoading$ = this.authService.isLoading$; 
      this.authState.userAuthState.subscribe((data:any)=>{
        this.isAuth$ = data;
      })    
    }

  ngOnInit(): void {
  }
  initFormProposition(){
    this.propositionForm = this.fb.group({
      course_id :["",Validators.required],
      course_two_id:["",Validators.required],
      hours:["",Validators.required],
      schoolyear_id:["",Validators.required],
      description:["",Validators.required],
    })
}
}