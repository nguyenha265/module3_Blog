import {Injectable} from '@angular/core';
import {ITodo} from '../interface/itodo';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private readonly API_URL = 'http://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {
  }

  getTodos(count = 100): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(this.API_URL).pipe(
      map(response => response.filter((todo, i) => i < count))
    );
  }

  getTodoById(id: number): Observable<ITodo> {
    return this.http.get<ITodo>(`${this.API_URL}/${id}`);
  }

  createTodo(todo: Partial<ITodo>): Observable<ITodo> {
    return this.http.post<ITodo>(this.API_URL, todo);
  }

  deleteTodo(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }

  updateTodo(todo: ITodo): Observable<ITodo> {
    return this.http.patch<ITodo>(`${this.API_URL}/${todo.id}`, todo);
  }
}
