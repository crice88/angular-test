import { Component } from '@angular/core';
import {PostService} from "../../core/services/post.service";
import {Post} from "../../core/types/post";
import {createAngularTable, FlexRenderDirective, getCoreRowModel, Table} from "@tanstack/angular-table";
import {postColumns} from "../../core/table/columns/posts";

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [FlexRenderDirective],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  table!: Table<Post>;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((data) => {
      this.table = createAngularTable(() => ({
        data: data,
        columns: postColumns,
        getCoreRowModel: getCoreRowModel(),
        debugTable: true
      }))
    })
  }
}
