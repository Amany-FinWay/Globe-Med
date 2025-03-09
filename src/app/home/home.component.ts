import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppConfig } from 'src/environments/AppConfig';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  constructor(
    private router: Router,
    private appConfig: AppConfig,
    private httpClient: HttpClient
  ) {}

  onNavigateToService() {
    const login = {
      username: "",
      password: ""
    }
    if(this.appConfig.isRunningLocal == true) {
      this.httpClient.post(`${this.appConfig.baseLoginUrl}/bla/bla`, login).subscribe({
        next: (response) => {},
        error: (error) => {}
      });
    } else{
      this.httpClient.post(`${this.appConfig.productionLoginUrl}/bla/bla`, login).subscribe({
        next: (response) => {},
        error: (error) => {}
      });
    }
    this.router.navigate(['camera-capture']);
  }
}
