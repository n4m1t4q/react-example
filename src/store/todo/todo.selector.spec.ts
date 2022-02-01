import { generateMockedTodos } from 'mocks/api';

import * as selectors from './todo.selector';
import { featureKey, initialState, State } from './todo.state';

interface RootState {
  [featureKey]: State;
}

describe("todo selectors", () => {
  it("should handle isFetchingSelector", () => {
    const isFetching = true;
    const state: RootState = {
      [featureKey]: {
        ...initialState,
        isFetching,
      },
    };

    expect(selectors.isFetchingSelector(state)).toEqual(isFetching);
  });

  it("should handle todosSelector", () => {
    const todos = generateMockedTodos();
    const state: RootState = {
      [featureKey]: { ...initialState, todos },
    };

    expect(selectors.todosSelector(state)).toEqual(todos);
  });
});
