import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Post } from '../../models/post';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit {

  //posts: Post[] = [];
  posts$?:  Observable<Post[]>; // async pipe: non c'è bisogno di fare il subscribe nè l'unsubscribe

  constructor(private bs: BlogService) {

  }

  ngOnInit(): void {
    this.posts$ = this.bs.getPosts()
    .pipe(
      tap(posts => console.log(posts))
    );
    //.subscribe(posts => this.posts = posts);
  }

}
