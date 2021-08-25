import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  schoolyearsSubject: BehaviorSubject<boolean>;
  schoolyears$: Observable<boolean>;

  coursesSubject: BehaviorSubject<boolean>;
  courses$: Observable<boolean>;
  constructor(private http: HttpClient) { 

    this.schoolyearsSubject = new BehaviorSubject<boolean>(false);
    this.schoolyears$ = this.schoolyearsSubject.asObservable();

    this.coursesSubject = new BehaviorSubject<boolean>(false);
    this.courses$ = this.coursesSubject.asObservable();
  }

   // get all collaborations from api 
  APIgetSchoolyears(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/schoolyears',{observe: 'response'});
  }
  APIgetCourses(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/courses',{observe: 'response'});
  }

  getNextValueCourses() : Observable<any>{

    return this.coursesSubject.asObservable(); }
  getNextValueSchoolyears() : Observable<any>{

      return this.schoolyearsSubject.asObservable(); }

}
