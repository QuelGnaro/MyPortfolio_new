import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  sendEmail(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/submit`, data);
  }
}
