import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { FormBuilder, FormGroup,Validators,FormControl } from "@angular/forms";
import { TokenService } from '../../shared/token.service';
import { AuthStateService } from '../../shared/auth-state.service';
import { Observable } from 'rxjs';
import { PropositionService } from './proposition.service';
import { ToastrService } from 'ngx-toastr'; 
import { ShopService } from '../shop/shop.service';
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
  courses :any;
  schoolyears :any;
  constructor(private toastr: ToastrService,public router: Router,
    public fb: FormBuilder,
    public authService: AuthService , public authState : AuthStateService, private propositionService : PropositionService, private shopserv : ShopService) { 
      this.isLoading$ = this.authService.isLoading$; 
      this.authService.isLoadingSubject.next(true);
      this.authState.userAuthState.subscribe((data:any)=>{
        this.isAuth$ = data;
        this.shopserv.getNextValueCourses().subscribe(courses => {
          this.courses = courses;
          console.log(courses)
        } );
        this.shopserv.getNextValueSchoolyears().subscribe(schoolyears => {
          this.schoolyears = schoolyears;
          console.log(schoolyears)
        } );
        setTimeout(() => {
          this.initFormProposition();
          this.authService.isLoadingSubject.next(false);
        }, );
        
      
      })    
    }

  ngOnInit(): void {
    
    

  }
  initFormProposition(){
    this.propositionForm = this.fb.group({
      f_student_id : [1, Validators.required],
      course_id :["",Validators.required],
      course_two_id:["",Validators.required],
      hours:["",Validators.required],
      schoolyear_id:["",Validators.required],
      description:["",Validators.required],
      status:[0,Validators.required]
    })
  }

  submitProposition(){
    this.propositionService.APIpostCollab(this.propositionForm.value).subscribe(
      result => {
       if(result.status == 201){
         this.toastr.success("Ta proposition a bien été ajoutée")
         this.router.navigateByUrl('/collaborations')
       }
      },
      error => {
        this.toastr.warning("Oups , un problème est survenu. Veuillez réessayer.")
        console.log(error)
      },
    );

   
  }
}