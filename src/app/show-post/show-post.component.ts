import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ShowPostService } from '../show-post.service';
import { CommonService } from '../common.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css'],
  providers: [ ShowPostService ]
})
export class ShowPostComponent implements OnInit {

  public posts: any = [];
  public post_to_delete;

  @ViewChild('closeBtn') closeBtn: ElementRef;

  constructor(private showPostService: ShowPostService, private commonService: CommonService) { }

  ngOnInit() {
    this.getAllPosts();
    this.commonService.postAdded_Observable.subscribe(res => {
      this.getAllPosts();
    })
  }

  getAllPosts() {
    this.showPostService.getAllPosts().subscribe(result => {
      console.log('result is ', result)
      this.posts = result['data'];
    })
  }

  editPost(post: Post) {
    this.commonService.setPostToEdit(post);
  }

  setDelete(post: Post) {
    this.post_to_delete = post;
  }

  unsetDelete() {
    this.post_to_delete = null;
  }

  deletePost() {
    this.showPostService.deletePost(this.post_to_delete._id).subscribe(res => {
      this.closeBtn.nativeElement.click();
      this.getAllPosts();
    })
  }

}
