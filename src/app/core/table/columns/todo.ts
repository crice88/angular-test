import {ColumnDef} from "@tanstack/angular-table";
import {Todo} from "../../types/todo";

export const todoColumns: ColumnDef<Todo>[] = [
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
    accessorKey: 'completed',
  }
]
