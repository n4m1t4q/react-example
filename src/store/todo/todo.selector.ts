import { createSelector } from '@reduxjs/toolkit';

import { featureKey, State } from './todo.state';

interface RootState {
  [featureKey]: State;
}

const featureStateSelector = (state: RootState) => state[featureKey];

export const isFetchingSelector = createSelector(featureStateSelector, (state) => state.isFetching);
export const todosSelector = createSelector(featureStateSelector, (state) => state.todos);
