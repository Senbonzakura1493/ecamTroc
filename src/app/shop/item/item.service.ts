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

  itemSubject: BehaviorSubject<any>;
  item$: Observable<any>;

  itemsSubject: BehaviorSubject<any>;
  items$: Observable<any>;
  
  constructor(private http: HttpClient) { 
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
    this.isLoading$ = this.isLoadingSubject.asObservable();

    this.itemSubject = new BehaviorSubject<any>(undefined);
    this.item$= this.itemSubject.asObservable();

    this.itemsSubject = new BehaviorSubject<any>(undefined);
    this.items$ = this.itemsSubject.asObservable();
  }

   // get one item from api and the same item in the other colors. 
   APIgetItem(id): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/items/'+ id,{observe: 'response'});
  }
}
