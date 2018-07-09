import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShowPostService {

  constructor(private http: HttpClient) { }

  getAllPosts() {
    return this.http.post('/api/post/getAllPosts', {});
  }

}
