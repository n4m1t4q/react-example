import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter, MemoryRouterProps } from 'react-router-dom';

import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';

import { TodoListContainer } from './todo-list.container';
import * as TodoListFacadeModule from './todo-list.facade';

jest.mock("./todo-list.component", () => ({
  ...jest.requireActual("./todo-list.component"),
  TodoList: () => jest.fn(() => null),
}));

describe("TodoListContainer", () => {
  const wrapper = (props: PropsWithChildren<MemoryRouterProps>) => {
    const { children } = props;
    const store = configureStore({ reducer: jest.fn() });

    return (
      <MemoryRouter>
        <Provider store={store}>{children}</Provider>
      </MemoryRouter>
    );
  };

  it("should render", () => {
    jest.spyOn(TodoListFacadeModule, "useTodoListFacade").mockImplementation(() => ({ isFetching: false, todos: [] }));
    const { baseElement } = render(<TodoListContainer />, { wrapper });

    expect(baseElement).toBeTruthy();
  });
});
