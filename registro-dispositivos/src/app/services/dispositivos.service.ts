import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DispositivosService {

  constructor(private http: HttpClient) { }

  getDevices() {
    return this.http.get('/assets/dispositivos.json')
  }
}
