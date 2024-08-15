import { Routes } from '@angular/router';

import {TodoComponent} from "./pages/todo/todo.component";
import {PostComponent} from "./pages/post/post.component";
import {AlbumComponent} from "./pages/album/album.component";

export const routes: Routes = [
  { path: 'todos', component: TodoComponent },
  { path: 'posts', component: PostComponent },
  { path: 'albums', component: AlbumComponent },
  { path: '',   redirectTo: '/todos', pathMatch: 'full' }
];
