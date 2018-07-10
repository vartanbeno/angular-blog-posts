import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Post } from '../models/post.model';
import { AddPostService } from '../add-post.service';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
  providers: [ AddPostService ]
})
export class AddPostComponent implements OnInit {

  public post: Post;
  @ViewChild('closeBtn') closeBtn: ElementRef;

  constructor(private addPostService: AddPostService, private commonService: CommonService) {
    this.post = new Post();
  }

  ngOnInit() {
  }

  addPost() {
    if (this.post.title && this.post.description) {
      this.addPostService.addPost(this.post).subscribe(res => {
        this.closeBtn.nativeElement.click();
        this.commonService.notifyPostAddition();
      })
    }
    else {
      alert('Both title and description are required.');
    }
  }

}
