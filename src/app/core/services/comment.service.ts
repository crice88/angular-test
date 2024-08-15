import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PostComment} from "../types/post-comment";

@Injectable({providedIn: 'root'})
export class CommentService {
  constructor(private http: HttpClient) {}

  getComments(id: number): Observable<PostComment[]> {
    return this.http.get<PostComment[]>(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  }
}
