import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private httpClient: HttpClient) { }

  getBook(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/book/getBook');
  }
}
