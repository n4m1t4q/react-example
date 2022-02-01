import { generateMockedTodos } from 'mocks/api';
import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { TodoList } from './todo-list.component';

describe("TodoList", () => {
  const todos = generateMockedTodos();
  let isFetching: boolean;

  it("render with isFetching = true", async () => {
    isFetching = true;
    const { baseElement } = render(<TodoList todos={todos} isFetching={isFetching} />, { wrapper: MemoryRouter });
    expect(baseElement).toBeTruthy();
  });

  it("render with isFetching = false", async () => {
    isFetching = false;
    const { baseElement } = render(<TodoList todos={todos} isFetching={isFetching} />, { wrapper: MemoryRouter });
    expect(baseElement).toBeTruthy();
  });
});
