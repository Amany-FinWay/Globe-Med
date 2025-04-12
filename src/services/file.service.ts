import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  constructor(private httpClient: HttpClient) {}

  public sendImageData(payload: {
    imgBase64: string;
    source: string;
  }): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoa('Dbridge:F@Gr$y74')
    });

    const url = 'https://test-abdelfattah74.pythonanywhere.com/digital_bridge/create_request';
    return this.httpClient.post(url, payload, { headers });
  }
}
