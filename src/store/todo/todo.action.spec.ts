import { generateMockedTodos } from 'mocks/api';
import { todoService } from 'services';

import { configureStore } from '@reduxjs/toolkit';

import { fetchAllTodos } from './todo.action';

describe("todo action", () => {
  it(`should create ${fetchAllTodos.fulfilled.type}`, async () => {
    const mockedTodos = generateMockedTodos();
    const spy = jest.spyOn(todoService, "fetchAll").mockResolvedValue(mockedTodos);
    const store = configureStore({ reducer: jest.fn() });
    store.dispatch(fetchAllTodos());

    expect(spy).toHaveBeenCalled();
  });
});
