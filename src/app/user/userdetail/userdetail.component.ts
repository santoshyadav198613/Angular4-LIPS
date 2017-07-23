import { Component, OnInit ,  Input } from '@angular/core';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
  @Input() users: any[];
  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}
