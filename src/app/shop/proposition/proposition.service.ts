import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PropositionService {
 
  isLoadingSubject: BehaviorSubject<boolean>;
  isLoading$: Observable<boolean>;

  collaborationsSubject: BehaviorSubject<boolean>;
  collaborations$: Observable<boolean>;

  constructor(private http: HttpClient) {
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
    this.isLoading$ = this.isLoadingSubject.asObservable();

    this.collaborationsSubject = new BehaviorSubject<boolean>(false);
    this.collaborations$ = this.collaborationsSubject.asObservable();
   }

   // Post a proposition 
  APIpostCollab(data): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/collaborations/store',data, {observe: 'response'});
  }
}
