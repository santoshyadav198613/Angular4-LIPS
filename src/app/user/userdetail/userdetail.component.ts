import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
  @Input() users: any[];
  @Input() title: string;
  @Output() onHide = new EventEmitter<boolean>();
  isVisible = true;
  constructor() { }

  ngOnInit() {
  }

  hideClick() {
    this.onHide.emit(true);
    this.isVisible = false;
  }

}
