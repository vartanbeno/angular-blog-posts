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

  public edit_title: String;
  public edit_description: String;

  constructor(private editPostService: EditPostService, private commonService: CommonService) {
    this.post = new Post();
  }

  ngOnInit() {
    this.commonService.postEdit_Observable.subscribe(res => {
      this.post = this.commonService.post_to_be_edited;
      this.edit_title = this.post.title;
      this.edit_description = this.post.description;
    })
  }

  updatePost() {
    if (this.post._id && this.edit_title && this.edit_description && this.post.datePosted) {
      this.post.title = this.edit_title;
      this.post.description = this.edit_description;
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
