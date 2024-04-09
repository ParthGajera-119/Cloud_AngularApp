import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {delay} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  selectedFile: File | null = null;
  uploadResponse: string = '';

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    alert("File Uploaded Successfully");
    delay(5000);
    const apiUrl = 'https://91xzhf7jv4.execute-api.us-east-1.amazonaws.com/Production/upload';
    const payload = {
      Records: [
        {
          s3: {
            bucket: {
              name: "textractfiless3"
            },
            object: {
              key: "test.jpg"
            }
          }
        }
      ]
    };

    this.http.post(apiUrl, payload).subscribe({
      next: (response: any) => {
        // Extract and assign the body part of the response to uploadResponse
        this.uploadResponse = response.body;
      },
      error: (error) => {
        console.error('Error sending JSON:', error);
        alert('Failed to send JSON.');
      }
    });
  }
}