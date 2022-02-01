import { Todo } from 'models';

export const featureKey = "todo";

export interface State {
  todos: Todo[] | null;
  isFetching: boolean;
}

export const initialState: State = {
  todos: null,
  isFetching: false,
};
