import { AfterViewInit, Component, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FileService } from 'src/services/file.service';

@Component({
  selector: 'app-camera-capture',
  templateUrl: './camera-capture.component.html',
  styleUrls: ['./camera-capture.component.scss']
})
export class CameraCaptureComponent implements AfterViewInit, OnDestroy {
  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvasElement') canvasElement!: ElementRef<HTMLCanvasElement>;

  resolution = { width: 640, height: 480 };
  capturedImage: string | null = null;
  encodedData: string | null = null;
  imageExtension: string = 'png';
  isCapturing: boolean = false;
  isLoading: boolean = false;
  errorMessage: string | null = null;

  constructor(
    private router: Router,
    private fileService: FileService
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
      console.error('Error accessing the camera:', error);
      this.errorMessage = 'Failed to access camera. Please try again.';
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
      this.encodedData = this.capturedImage.split(',')[1];
      this.isCapturing = true;
    } else {
      this.errorMessage = 'Failed to capture image.';
    }
  }

  onSendImage() {
    if (!this.encodedData) {
      this.errorMessage = 'Please capture an image first.';
      return;
    }

    this.isLoading = true;
    this.errorMessage = null;

    const payload = {
      source: 'globemed',
      imgBase64: `data:image/png;base64,${this.encodedData}`
    };

    this.fileService.sendImageData(payload).subscribe({
      next: (res) => {
        console.log('Image sent successfully:', res);
        this.isLoading = false;
        this.router.navigate(['thank-you'], { queryParams: { Result: res.Result } });
      },
      error: (err) => {
        console.error('Error sending image:', err);
        this.errorMessage = 'Failed to send image. Please try again.';
        this.isLoading = false;
      }
    });
  }

  ngOnDestroy() {
    const video = this.videoElement.nativeElement;
    if (video.srcObject) {
      const stream = video.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
    }
  }
}
