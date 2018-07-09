import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { AddPostService } from '../add-post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  public post: Post;

  constructor(private addPostService: AddPostService) { }

  ngOnInit() {
  }

  addPost() {
    if (this.post.title && this.post.description) {
      this.addPostService.addPost(this.post).subscribe(res => {
        console.log('result is ', res);
      })
    }
    else {
      alert('Both title and description are required.');
    }
  }

}
