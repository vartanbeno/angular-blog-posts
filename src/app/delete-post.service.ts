import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeletePostService {

  constructor(private http: HttpClient) { }

  deletePost(id) {
    return this.http.post('/api/post/deletePost', { id: id });
  }

}
