import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import { TodoListPage } from './todo-list';

export const TodoRoute = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Switch>
        <Route exact path="/todos" component={TodoListPage} />
      </Switch>
    </Suspense>
  );
};
