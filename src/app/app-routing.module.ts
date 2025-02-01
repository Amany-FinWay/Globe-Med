import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CameraCaptureComponent } from './camera-capture/camera-capture.component';
import { HomeComponent } from './home/home.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'camera-capture', component: CameraCaptureComponent},
  {path: 'thank-you', component: ThankYouComponent},
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
