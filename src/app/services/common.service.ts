import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http : HttpClient) { }
  getProfileDetails(): Observable<any> {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.get(url);
  }
}
