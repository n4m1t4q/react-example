import { Todo } from 'models';
import { todoService } from 'services';

import { createAsyncThunk } from '@reduxjs/toolkit';

import { featureKey } from './todo.state';

export const fetchAllTodos = createAsyncThunk<{ todos: Todo[] }>(`${featureKey}/fetchAll`, async () => {
  const result = await todoService.fetchAll();
  return { todos: result };
});
