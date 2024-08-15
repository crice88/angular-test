import { Component } from '@angular/core';
import {CommentService} from "../../../core/services/comment.service";
import {ActivatedRoute} from "@angular/router";
import {ColumnDef} from "@tanstack/angular-table";
import {commentColumns} from "../../../core/table/columns/comments";
import {PostComment} from "../../../core/types/post-comment";
import {TableComponent} from "../../../core/templates/table/table.component";

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [
    TableComponent
  ],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent {
  comments: PostComment[] = []
  columns: ColumnDef<PostComment>[] = commentColumns
  constructor(private commentService: CommentService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id: number = Number(this.route.snapshot.params['id']);
    this.commentService.getComments(id).subscribe((data) => {
      this.comments = data;
    })
  }
}
