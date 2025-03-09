import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "./environment";

interface AppConfigModel {
  serverURL: string;
}

@Injectable({
  providedIn: 'root'
})

export class AppConfig {
  static config: AppConfigModel;
  isRunningLocal: boolean = false; //change it to true before publish over the server

  baseLoginUrl = "bla/bla";
  productionLoginUrl = "bla/bla";

  constructor(private http: HttpClient) {}

  loadConfig() {
    const jsonFile = `assets/config${environment.name}.json`;
    return new Promise<void>((resolve, reject) => {
      this.http.get(jsonFile).subscribe((response : any) => {
        AppConfig.config = <any>response;
        resolve();
      });
    });
  }
}
