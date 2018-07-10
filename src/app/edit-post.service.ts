import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './models/post.model';

@Injectable({
  providedIn: 'root'
})
export class EditPostService {

  constructor(private http: HttpClient) { }

  updatePost(post: Post) {
    return this.http.post('/api/post/updatePost', {
      id: post.id,
      title: post.title,
      description: post.description
    })
  }

}
