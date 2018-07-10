import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('addPost') addBtn: ElementRef;

  constructor(private commonService: CommonService) {
    this.commonService.postEdit_Observable.subscribe(res => {
      this.addBtn.nativeElement.click();
    })
  }

  ngOnInit() {
  }

}
