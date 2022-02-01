import { Todo } from 'models';
import { HttpClient } from 'shared/utils';

export class TodoService {
  constructor(private readonly http: HttpClient, private readonly baseUrl: string) {}

  fetchAll(): Promise<Todo[]> {
    return this.http.get<Todo[]>(`${this.baseUrl}/todos`);
  }
}
