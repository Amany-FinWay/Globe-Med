import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {
  resultMsg!: string;
  
  constructor(
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.resultMsg = this.activatedRouter.snapshot.queryParams['Result'];
    
    setTimeout(() => {
      this.router.navigate(['home']);
    }, 6000)
  }
}
