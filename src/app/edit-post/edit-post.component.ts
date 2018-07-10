import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Post } from '../models/post.model';
import { EditPostService } from '../edit-post.service';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
  providers: [ EditPostService ]
})
export class EditPostComponent implements OnInit {

  public post: Post;
  @ViewChild('closeBtn') closeBtn: ElementRef;

  constructor(private editPostService: EditPostService, private commonService: CommonService) {
    this.post = new Post();
  }

  ngOnInit() {
    this.commonService.postEdit_Observable.subscribe(res => {
      this.post = this.commonService.post_to_be_edited;
    })
  }

  updatePost() {
    if (this.post._id && this.post.title && this.post.description) {
      this.editPostService.updatePost(this.post).subscribe(res => {
        this.closeBtn.nativeElement.click();
        this.commonService.notifyPostEdit();
      })
    }
    else {
      alert('Both title and description are required.');
    }

  }

}