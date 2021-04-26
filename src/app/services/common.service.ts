import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  isTermsAgree: boolean = false;
  isRegistered: boolean = false;

  isHeaderVisible = new Subject<boolean>();
  constructor() {
  }
}
