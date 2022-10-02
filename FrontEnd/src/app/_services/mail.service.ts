import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  private BaseUrl = environment.ApiUrl;

  constructor(private http: HttpClient) { }

  sendMessage(message: any) {
    return this.http.post(this.BaseUrl + 'email', message);
  }
}
