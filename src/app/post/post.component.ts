import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import {Post} from  '../post'; 
import {Observable,of} from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts:Post[];
  constructor(private postService:PostService) { }
  ngOnInit() {
   this.getPosts();
  }
  getPosts(){
  this.postService.get_posts().subscribe((res)=>this.posts=res);
  }
}