import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter, MemoryRouterProps } from 'react-router-dom';

import { configureStore } from '@reduxjs/toolkit';
import { renderHook } from '@testing-library/react-hooks';

import { useTodoListFacade } from './todo-list.facade';

const mockedDispatch = jest.fn().mockResolvedValue({});
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockedDispatch,
  useSelector: () => jest.fn(),
}));

describe("useTodoListFacade", () => {
  const wrapper = (props: PropsWithChildren<MemoryRouterProps>) => {
    const { children } = props;
    const store = configureStore({ reducer: jest.fn() });

    return (
      <MemoryRouter>
        <Provider store={store}>{children}</Provider>
      </MemoryRouter>
    );
  };

  it("should render hook", async () => {
    const { result } = renderHook(() => useTodoListFacade(), {
      wrapper,
    });

    expect(mockedDispatch).toHaveBeenCalled();
    expect(result).toBeTruthy();
  });
});
