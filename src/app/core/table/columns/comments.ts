import {ColumnDef} from "@tanstack/angular-table";
import {PostComment} from "../../types/post-comment";

export const commentColumns: ColumnDef<PostComment>[] = [
  {
    accessorKey: 'postId',
  },
  {
    accessorKey: 'id',
  },
  {
    accessorKey: 'name',
  },
  {
    accessorKey: 'email'
  },
  {
    accessorKey: 'body',
  }
]
