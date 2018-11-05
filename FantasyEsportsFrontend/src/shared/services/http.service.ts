import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export enum URI {
  LOGIN = '/account/login',
  REGISTER = '/account/register'
}

@Injectable()
export class HttpService {
  private host: string;

  constructor(private httpClient: HttpClient) {
    this.host = 'https://malow.duckdns.org:8754';
  }

  post(uri: URI, body: any): Observable<any> {
    return this.httpClient.post(this.host + uri, body);
  }

  get(uri: URI): Observable<any> {
    return this.httpClient.get(this.host + uri);
  }
}
