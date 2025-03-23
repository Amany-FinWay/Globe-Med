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
  isRunningLocal: boolean = true; //change it to false before publish over the server

  baseLoginUrl = "https://api.dbridges.net/dev";
  productionLoginUrl = " https://api.dbridges.net/prod";

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
