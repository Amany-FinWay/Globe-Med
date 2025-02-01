import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-camera-capture',
  templateUrl: './camera-capture.component.html',
  styleUrls: ['./camera-capture.component.scss']
})
export class CameraCaptureComponent implements AfterViewInit {
  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvasElement') canvasElement!: ElementRef<HTMLCanvasElement>;

  resolution = { width: 640, height: 480 };
  capturedImage: string | null = null;
  isCapturing: boolean = false; // Flag to prevent multiple captures

  constructor(
    private router: Router
  ) {}

  ngAfterViewInit() {
    this.startCamera();
  }

  async startCamera() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: this.resolution.width, height: this.resolution.height }
      });
      this.videoElement.nativeElement.srcObject = stream;
    } catch (error) {
      console.error('Error accessing the camera: ', error);
    }
  }

  captureImage() {
    const canvas = this.canvasElement.nativeElement;
    const video = this.videoElement.nativeElement;
    canvas.width = this.resolution.width;
    canvas.height = this.resolution.height;
    const context = canvas.getContext('2d');

    if (context) {
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      this.capturedImage = canvas.toDataURL('image/png');
      this.isCapturing = true;
    }
  }

  onSendImage() {
    this.router.navigate(['thank-you']);
  }
}
