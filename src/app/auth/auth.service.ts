import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpResponse ,HttpHeaders} from '@angular/common/http';
import { TokenService } from './../shared/token.service';

// User interface
export class User {
  name: String;
  email: String;
  password: String;
  password_confirmation: String
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoadingSubject: BehaviorSubject<boolean>;
  isLoading$: Observable<boolean>;

  profileInfoSubject: BehaviorSubject<boolean>;
  profileInfos$: Observable<boolean>;

  constructor(private http: HttpClient) { 
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
    this.isLoading$ = this.isLoadingSubject.asObservable();

    this.profileInfoSubject = new BehaviorSubject<any>(undefined);
    this.profileInfos$ = this.profileInfoSubject.asObservable();
  }

  // User registration
  register(user: User): Observable<any> {

    return this.http.post('http://127.0.0.1:8000/api/auth/register', user,{observe: 'response'});
  }

  // Login
  signin(user: any): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8000/api/auth/login', user,{observe: 'response'});
  }

  logout():Observable<any>{
    return this.http.post<any>('http://127.0.0.1:8000/api/auth/logout',{observe: 'response'});
  }
  // Access user profile
  profileUser(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/auth/user-profile',{observe: 'response'});
  }

  updateProfile(data): Observable<any>{
    return this.http.put('http://127.0.0.1:8000/api/auth/user-profile-update',data,{observe:'response'})
  }

  sendResetPasswordLink(data) {
    return this.http.post('http://127.0.0.1:8000/api/auth/reset-password-request', data,{observe: 'response'})
  }

  resetPassword(data) {
    return this.http.post('http://127.0.0.1:8000/api/auth/change-password', data,{observe: 'response'})
  }

  getNextValueIsLoading() : Observable<any>{

    return this.isLoadingSubject.asObservable(); }


  getNextValueProfileInfos() : Observable<any>{

      return this.profileInfoSubject.asObservable(); }

  // Access user profile
  getUserCollaborations(id): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/collaborations/'+id,{observe: 'response'});
  }
    
}




  


