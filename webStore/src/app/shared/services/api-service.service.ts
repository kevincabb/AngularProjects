import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OrderRequest } from 'src/app/models/OrderRequest';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  public api: string = environment.api;

  constructor(private http: HttpClient) { }

  initSession(request: OrderRequest[]): any{
    return this.http.post<any>(`${this.api}/purchaseorder/newSession`, request);
  }

  getPaymentResult(sessionId: string){
    return this.http.get<any>(`${this.api}/purchaseorder/bySession/${sessionId}`);
  }
}
