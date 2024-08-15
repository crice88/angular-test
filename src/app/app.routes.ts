import { Routes } from '@angular/router';

import {TodoComponent} from "./pages/todo/todo.component";
import {PostComponent} from "./pages/post/post.component";
import {AlbumComponent} from "./pages/album/album.component";
import {CommentsComponent} from "./pages/post/comments/comments.component";

export const routes: Routes = [
  { path: 'todos', component: TodoComponent },
  { path: 'posts', component: PostComponent },
  { path: 'posts/:id/comments', component: CommentsComponent },
  { path: 'albums', component: AlbumComponent },
  { path: '',   redirectTo: '/todos', pathMatch: 'full' }
];
