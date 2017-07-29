import {
  Component, OnInit, Input, Output, EventEmitter,
  OnChanges, SimpleChanges , ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class UserdetailComponent implements OnInit, OnChanges {
  @Input() users: any[];
  @Input() title: string;
  @Output() onHide = new EventEmitter<boolean>();
  isVisible = true;
  constructor() { }

  ngOnChanges(obj: SimpleChanges) {
    console.log(obj);
  }

  ngOnInit() {
  }

  hideClick() {
    this.onHide.emit(true);
    this.isVisible = !this.isVisible;
  }

}
