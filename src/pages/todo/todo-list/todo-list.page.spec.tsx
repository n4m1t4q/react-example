import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { TodoListPage } from './todo-list.page';

jest.mock("./todo-list.container", () => ({
  ...jest.requireActual("./todo-list.container"),
  TodoListContainer: () => jest.fn(() => null),
}));

describe("TodoListPage", () => {
  it("should render", () => {
    const { baseElement } = render(<TodoListPage />, {
      wrapper: MemoryRouter,
    });
    expect(baseElement).toBeTruthy();
  });
});
