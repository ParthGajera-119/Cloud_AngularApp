import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post('https://91xzhf7jv4.execute-api.us-east-1.amazonaws.com/Production/login', { username, password });
  }

  signup(data: any) {
    return this.http.post('https://91xzhf7jv4.execute-api.us-east-1.amazonaws.com/Production/signup', data);
  }

  getPresignedUrl(fileName: string) {
    return this.http.get<{ url: string }>(`https://91xzhf7jv4.execute-api.us-east-1.amazonaws.com/Production/upload?file_name=${fileName}`);
  }

  uploadImage(file: File, presignedUrl: string) {
    const headers = { 'Content-Type': file.type }; // Set the content type to image/jpeg or as applicable
    return this.http.put(presignedUrl, file, { headers });
  }
}