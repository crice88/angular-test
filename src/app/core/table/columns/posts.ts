import { Post } from "../../types/post";
import {ColumnDef} from "@tanstack/angular-table";

export const postColumns: ColumnDef<Post>[] = [
  {
    accessorKey: 'userId',
  },
  {
    accessorKey: 'id',
  },
  {
    accessorKey: 'title',
    cell: info => `<a href="posts/${info.row.original.id}/comments">${info.row.original.title}</a>`
  },
  {
    accessorKey: 'body',
  }
]
