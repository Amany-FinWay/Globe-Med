import { HttpClient, HttpParams } from '@angular/common/http';
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

  // onNavigateToService() {
  //   const loginTest = {
  //     username: "globemed@dbridges.net",
  //     password: "rxg7bDys$fVJY0F0",
  //     provideToken: "true"
  //   }
  //   const loginProd = {
  //     username: "globemed@dbridges.net",
  //     password: "!&qM74RQZSHqbieT",
  //     provideToken: "true"
  //   }
  //   if(this.appConfig.isRunningLocal == true) {
  //     this.httpClient.post(`${this.appConfig.baseLoginUrl}/auth/auth/login`, loginTest).subscribe({
  //       next: (response) => {},
  //       error: (error) => {}
  //     });
  //   } else{
  //     this.httpClient.post(`${this.appConfig.productionLoginUrl}/auth/auth/login`, loginProd).subscribe({
  //       next: (response) => {},
  //       error: (error) => {}
  //     });
  //   }
  //   this.router.navigate(['camera-capture']);
  // }
  onNavigateToService() {
    this.router.navigate(['camera-capture']);
    // Define credentials for both environments
    // const loginCredentials = {
    //   test: {
    //     username: "globemed@dbridges.net",
    //     password: "rxg7bDys$fVJY0F0",
    //     provideToken: "true"
    //   },
    //   production: {
    //     username: "globemed@dbridges.net",
    //     password: "!&qM74RQZSHqbieT",
    //     provideToken: "true"
    //   }
    // };
  
    // // Determine which credentials to use based on the environment
    // const credentials = this.appConfig.isRunningLocal 
    //   ? loginCredentials.test 
    //   : loginCredentials.production;
  
    // // Construct the query parameters
    // const params = new HttpParams()
    //   .set('username', credentials.username)
    //   .set('password', credentials.password)
    //   .set('provideToken', credentials.provideToken);
  
    // // Determine the URL based on the environment
    // const url = this.appConfig.isRunningLocal 
    //   ? `${this.appConfig.baseLoginUrl}/auth/auth/login`
    //   : `${this.appConfig.productionLoginUrl}/auth/auth/login`;
  

    //   this.httpClient.post(url, { params }).subscribe({
    //   next: (response) => {
    //     this.router.navigate(['camera-capture']);
    //     console.log('Login successful:', response);
    //   },
    //   error: (error) => {
    //     // Handle error response
    //     console.error('Login failed:', error);
    //   }
    // });
  }
}
    //http://api.dbridges.net/dev/auth/auth/login?username=globemed@dbridges.net&password=rxg7bDys$fVJY0F0&provideToken=true
    //http://api.dbridges.net/dev/auth/auth/login?username=globemed@dbridges.net&password=rxg7bDys$fVJY0F0&provideToken=true
