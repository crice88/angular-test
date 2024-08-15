import {Component, Input} from '@angular/core';
import {
  ColumnDef,
  createAngularTable,
  FlexRenderDirective,
  getCoreRowModel,
  Table
} from "@tanstack/angular-table";
import {Todo} from "../../types/todo";

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [FlexRenderDirective],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() data: Todo[] = [];
  @Input() columns!: ColumnDef<Todo>[]
  table!: Table<Todo>;

  ngOnInit(): void {
    this.table = createAngularTable(() => ({
      data: this.data,
      columns: this.columns,
      getCoreRowModel: getCoreRowModel(),
      debugTable: true
    }))
  }
}
