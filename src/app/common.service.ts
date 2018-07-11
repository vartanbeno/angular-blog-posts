import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from './models/post.model';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public postAdded_Observable = new Subject();

  public postEdit_Observable = new Subject();
  public post_to_be_edited;

  public post_to_be_deleted;

  constructor() {
    this.post_to_be_edited = new Post();
  }

  notifyPostAddition() {
    this.postAdded_Observable.next();
  }

  notifyPostEdit() {
    this.postEdit_Observable.next();
  }

  setPostToEdit(post: Post) {
    this.post_to_be_edited = post;
    this.notifyPostEdit();
  }

  setPostToDelete(post: Post) {
    this.post_to_be_deleted = post;
  }

  unSetPostToDelete() {
    this.post_to_be_deleted = null;
  }

}
