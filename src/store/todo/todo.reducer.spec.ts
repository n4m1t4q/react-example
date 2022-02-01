import { generateMockedTodos } from 'mocks/api';

import * as actions from './todo.action';
import { reducer } from './todo.reducer';
import { initialState, State } from './todo.state';

describe("todo reducer", () => {
  it("should handle unknown action", () => {
    const action = {
      type: "",
    };

    expect(reducer(undefined, action)).toEqual(initialState);
  });

  describe(`should handle ${actions.fetchAllTodos.typePrefix}`, () => {
    it(`should handle ${actions.fetchAllTodos.pending.type}`, () => {
      const state: State = {
        ...initialState,
      };
      const action = actions.fetchAllTodos.pending("");
      const expectedState: State = {
        ...state,
        isFetching: true,
      };

      expect(reducer(state, action)).toEqual(expectedState);
    });

    it(`should handle ${actions.fetchAllTodos.fulfilled.type}`, () => {
      const state: State = {
        ...initialState,
        isFetching: true,
      };
      const action = actions.fetchAllTodos.fulfilled({ todos: generateMockedTodos() }, "");
      const { todos } = action.payload;
      const expectedState: State = {
        ...state,
        todos,
        isFetching: false,
      };

      expect(reducer(state, action)).toEqual(expectedState);
    });

    it(`should handle ${actions.fetchAllTodos.rejected.type}`, () => {
      const state: State = {
        ...initialState,
        isFetching: true,
      };
      const action = actions.fetchAllTodos.rejected(new Error(), "");
      const expectedState: State = {
        ...state,
        isFetching: false,
      };

      expect(reducer(state, action)).toEqual(expectedState);
    });
  });
});
