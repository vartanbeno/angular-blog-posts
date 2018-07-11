import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonService } from '../common.service';
import { Post } from '../models/post.model';
import { DeletePostService } from '../delete-post.service';
import { ShowPostService } from '../show-post.service';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.css'],
  providers: [ DeletePostService ]
})
export class DeletePostComponent implements OnInit {

  public post: Post;
  @ViewChild('closeBtn') closeBtn: ElementRef;

  constructor(
    private deletePostService: DeletePostService,
    private showPostService: ShowPostService,
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.post = this.commonService.post_to_be_deleted;
  }

  unsetDelete() {
    this.commonService.unSetPostToDelete();
  }

  deletePost() {
    this.deletePostService.deletePost(this.commonService.post_to_be_deleted._id).subscribe(res => {
      this.closeBtn.nativeElement.click();
      this.showPostService.getAllPosts();
    })
  }

}
