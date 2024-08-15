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
  },
  {
    accessorKey: 'body',
  }
]
