import { generateMockedTodos } from 'mocks/api';
import { HttpClient } from 'shared/utils';

import { TodoService } from './todo.service';

describe("TodoService", () => {
  const baseUrl = "http://localhost";
  const httpClient = new HttpClient();
  const todoService = new TodoService(httpClient, baseUrl);

  it("Should handle fetchAll", async () => {
    const todos = generateMockedTodos();
    const spy = jest.spyOn(httpClient, "get").mockResolvedValue(todos);
    const result = await todoService.fetchAll();

    expect(spy).toHaveBeenCalledWith(`${baseUrl}/todos`);
    expect(result).toEqual(todos);
  });
});
