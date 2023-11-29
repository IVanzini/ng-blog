import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Post } from '../../models/post';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent implements OnInit {

  post?: Post;

  constructor(private bs: BlogService, private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");

    this.bs.getPostById(id!)
    .pipe(
      tap(p => console.log(p))
    )
    .subscribe(post => this.post = post);
  }

}
