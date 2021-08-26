import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpResponse ,HttpHeaders} from '@angular/common/http';
import { TokenService } from '../../shared/token.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  isLoadingSubject: BehaviorSubject<boolean>;
  isLoading$: Observable<boolean>;

  collabSubject: BehaviorSubject<any>;
  collab$: Observable<any>;

  
  constructor(private http: HttpClient) { 
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
    this.isLoading$ = this.isLoadingSubject.asObservable();

    this.collabSubject = new BehaviorSubject<any>(undefined);
    this.collab$= this.collabSubject.asObservable();

 
  }

   // get one item from api and the same item in the other colors. 
   APIUpdateCollab(id,data): Observable<any> {
    return this.http.put('http://127.0.0.1:8000/api/collaborations/'+ id,data,{observe: 'response'});
  }
}
