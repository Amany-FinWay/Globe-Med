import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from 'src/environments/AppConfig';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public FilterBy(file: string) {
    return this.httpClient.post(`${AppConfig.config.serverURL}/bla/bla`, file);
  }
}
