import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpResponse ,HttpHeaders} from '@angular/common/http';
import { TokenService } from '../../shared/token.service';

@Injectable({
  providedIn: 'root'
})
export class BoutiqueServiceService {
  isLoadingSubject: BehaviorSubject<boolean>;
  isLoading$: Observable<boolean>;

  itemsSubject: BehaviorSubject<boolean>;
  items$: Observable<boolean>;
  
  constructor(private http: HttpClient) { 
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
    this.isLoading$ = this.isLoadingSubject.asObservable();

    this.itemsSubject = new BehaviorSubject<boolean>(false);
    this.items$ = this.itemsSubject.asObservable();
  }

  // get all items from api 
  APIgetItems(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/collaborations',{observe: 'response'});
  }

}
