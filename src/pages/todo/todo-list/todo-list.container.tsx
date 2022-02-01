import { memo } from 'react';

import { TodoList } from './todo-list.component';
import { useTodoListFacade } from './todo-list.facade';

export const TodoListContainer = memo(() => {
  const { isFetching, todos } = useTodoListFacade();

  return <TodoList isFetching={isFetching} todos={todos} />;
});
