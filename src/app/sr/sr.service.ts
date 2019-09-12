import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { List } from  './list';
import { Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SrService {

  constructor(private httpClient: HttpClient) {  }

  rlist(): Observable<List[]>{
    return this.httpClient.get<List[]>(`./assets/api.json`);
  }
}
