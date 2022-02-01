import { createReducer } from '@reduxjs/toolkit';

import * as actions from './todo.action';
import { initialState } from './todo.state';

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.fetchAllTodos.pending, (state) => {
      state.isFetching = true;
    })
    .addCase(actions.fetchAllTodos.fulfilled, (state, { payload }) => {
      const { todos } = payload;
      state.isFetching = false;
      state.todos = todos;
    })
    .addCase(actions.fetchAllTodos.rejected, (state) => {
      state.isFetching = false;
    });
});
