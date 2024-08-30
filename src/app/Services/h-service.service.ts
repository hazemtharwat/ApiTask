import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environement } from '../environements/environement';

@Injectable({
  providedIn: 'root'
})
export class HServiceService {
 private readonly _HttpClient=inject(HttpClient)


 getData():Observable<any>{
  return this._HttpClient.get(`${environement.BaseURl}/api/v1/products`);
 }
}
