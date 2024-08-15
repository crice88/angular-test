import {ColumnDef} from "@tanstack/angular-table";
import {Album} from "../../types/album";

export const albumColumns: ColumnDef<Album>[] = [
  {
    accessorKey: 'userId',
  },
  {
    accessorKey: 'id',
  },
  {
    accessorKey: 'title',
  }
]
