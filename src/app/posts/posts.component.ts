import { Component, OnInit } from '@angular/core';
import { PostsService } from '../Services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  constructor(private postsService: PostsService) {}
  posts: any;
  errMsg: any;
  ngOnInit(): void {
    this.postsService.getPosts().subscribe(
      (data) => {
        this.posts = data;
      },
      (err) => {
        this.errMsg = err;
      }
    );
  }
}
