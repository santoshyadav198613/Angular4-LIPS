import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { ApiEndpoint } from '../api/Iapi';
import { EndPoint, apiEndPoint } from '../api/api.value';

import { Post } from './post';
@Injectable()
export class PostService {
  apiEndPoint: string;
  token: string;
  constructor(private http: HttpClient, @Inject(EndPoint) apiEndPoint: ApiEndpoint) {
    this.apiEndPoint = apiEndPoint.endPoint;
    this.token = apiEndPoint.token;
  }

  getPosts() {
    return this.http.get<Post[]>(this.apiEndPoint + 'posts', { headers: new HttpHeaders().set('token', this.token) });
  }

  addPost(post: Post) {
    return this.http.post(this.apiEndPoint + 'posts', post);
  }


  getPostData() {
    let request = new HttpRequest('GET', this.apiEndPoint + 'posts', { reportProgress: true });
    return this.http.request(request);

  }
}
