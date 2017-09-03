import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post/post.service';
import { Post } from '../service/post/post';

import { HttpEventType, HttpResponse } from '@angular/common/http'
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService]
})
export class PostComponent implements OnInit {
  post = new Post();
  totalData: number;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe((data) => console.log(data),
      (err) => console.log(err));

    this.postService.getPostData().subscribe((event) => {
      if (event.type === HttpEventType.DownloadProgress) {
        let totalData = event.total === undefined ? event.loaded : event.total;
        this.totalData = Math.round(100 * event.loaded / totalData);
        console.log(this.totalData);
      }
      else if (event instanceof HttpResponse) {
        console.log(event.body);
      }
    });

  }

  addPost() {
    this.postService.addPost(this.post).subscribe((data) => console.log(data),
      (err) => console.log(err));
    this.post = new Post();
  }
}
