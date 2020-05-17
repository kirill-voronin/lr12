import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MyWorker } from '../worker.model';

@Injectable({
  providedIn: 'root'
})
export class HttpClientsService {

  routeApi = "http://localhost:3000/clients";
  constructor(private http: HttpClient) { }

  getClient():Promise<any>{
    return this.http.get(this.routeApi).toPromise();
  }

  postClient(data: MyWorker){
    return this.http.post(this.routeApi, data).toPromise();
  }

  putClient(data){
    return this.http.put(this.routeApi+`/${data.id}`,data).toPromise();
  }

  deleteClient(id){
    return this.http.delete(this.routeApi + `/${id}`).toPromise();
  }
}
