import { Todo } from 'models';
import { memo } from 'react';

interface Props {
  isFetching: boolean;
  todos: Todo[] | null;
}

export const TodoList = memo((props: Props) => {
  const { isFetching, todos } = props;

  return (
    <>
      <h2>todo-list</h2>
      {isFetching ? (
        <>Fetching...</>
      ) : (
        <>
          <ul>
            {todos?.map((todo) => (
              <li key={todo.id}>
                <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>{todo.title}</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
});
