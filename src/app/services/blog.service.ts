import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.SERVER_URL}/posts`);
  }

  getPostById(id: string): Observable<Post> {
    return this.http.get<Post>(`${environment.SERVER_URL}/posts/${id}`);
  }
}
