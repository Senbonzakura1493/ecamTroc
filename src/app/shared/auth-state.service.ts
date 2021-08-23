import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';
import { TokenService } from '../shared/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {
  userAuthState$ : Observable<boolean>;
  private userState = new BehaviorSubject<boolean>(this.token.isLoggedIn());
  userAuthState = this.userState.asObservable();

  constructor(public token: TokenService) {
    this.userAuthState$ = this.userState.asObservable();
   }
   setAuthState(value: boolean) {
    this.userState.next(value);
  }
  getAuthState() {
    return this.userState.asObservable();
  }
}
