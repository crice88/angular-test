import { Component } from '@angular/core';
import {PostService} from "../../core/services/post.service";
import {Post} from "../../core/types/post";
import {ColumnDef, FlexRenderDirective} from "@tanstack/angular-table";
import {postColumns} from "../../core/table/columns/posts";
import {TableComponent} from "../../core/templates/table/table.component";

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [FlexRenderDirective, TableComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  posts!: Post[];
  columns: ColumnDef<Post>[] = postColumns;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((data) => {
      this.posts = data;
    })
  }
}
