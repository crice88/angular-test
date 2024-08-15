import { Component } from '@angular/core';
import {ColumnDef} from "@tanstack/angular-table";
import {TableComponent} from "../../core/templates/table/table.component";
import {todoColumns} from "../../core/table/columns/todo";
import {Todo} from "../../core/types/todo";
import {TodoService} from "../../core/services/todo.service";

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    TableComponent
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  todos!: Todo[];
  columns: ColumnDef<Todo>[] = todoColumns;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((data) => {
      this.todos = data;
    })
  }
}
