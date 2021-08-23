import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ItemService } from './item.service';
import { ToastInjector, ToastrModule, TOAST_CONFIG } from 'ngx-toastr';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { InjectionToken } from '@angular/core';

describe('ItemService', () => {
  let service: ItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule,
        HttpClientModule,
        ToastrModule,
        BrowserDynamicTestingModule
        ],
      providers:[ToastrModule,InjectionToken,ToastInjector]

    });
    service = TestBed.inject(ItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
